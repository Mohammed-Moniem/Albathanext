import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovie } from '../../redux/Movies';
import { imageUrl } from '../../utils/imageHelper';
import ReactPlayer from 'react-player';
import { Col, Row, Space, Tag, Typography, Statistic, Spin } from 'antd';
import Error from '../Error';
import Review from './Review';

const Movie = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovie(id));
  }, []);

  const { movie, loadingMovie, error } = useSelector((state) => state.movies);

  if (loadingMovie) return null;

  if (error) return <Error />;

  return (
    <>
      {movie ? (
        <div className="movie-wrapper">
          <div
            className="banner"
            style={{
              backgroundImage: `url(${imageUrl(movie.backdrop_path)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <Row className="movie" gutter={[8, 8]} justify="space-around">
            <Col xs={{ span: 0 }} md={{ span: 6 }}>
              <img
                className="movie__poster"
                alt=""
                src={imageUrl(movie.poster_path)}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 14 }}>
              <Space direction="vertical">
                <Typography.Title level={2}>{movie.title}</Typography.Title>
                <div>
                  {movie.genres.map((genre) => (
                    <Tag
                      style={{
                        padding: 5,
                        borderRadius: 10,
                        backgroundColor: '#e33',
                        color: 'white',
                      }}
                      key={genre.id}
                    >
                      {genre.name}
                    </Tag>
                  ))}
                </div>
                <Typography.Paragraph>{movie.overview}</Typography.Paragraph>
                <Row gutter={16}>
                  <Col span={12}>
                    <Statistic title="Total Reviews" value={movie.vote_count} />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Rating"
                      value={movie.vote_average}
                      suffix="/ 10"
                    />
                  </Col>
                </Row>
                {movie.video && movie.video.key && (
                  <Row gutter={16}>
                    <Col span={12}>
                      <Typography.Title level={2}>
                        Trailer Name: {movie.video.name}
                      </Typography.Title>
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${movie.video.key}`}
                      />
                    </Col>
                  </Row>
                )}
                {movie.reviews.length > 0 && (
                  <Row gutter={16}>
                    <Col span={12}>
                      <Typography.Title level={2}>Reviews</Typography.Title>
                      {movie.reviews.map((review) => (
                        <Review review={review} key={review.id} />
                      ))}
                    </Col>
                  </Row>
                )}
              </Space>
            </Col>
          </Row>
        </div>
      ) : (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      )}
    </>
  );
};

export default Movie;

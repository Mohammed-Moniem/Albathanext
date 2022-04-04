import React from 'react';
import { Badge, Card, Rate, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { imageUrl } from '../../utils/imageHelper';
import moment from 'moment';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      {movie.adult && (
        <Badge.Ribbon color="red" text="18+">
          <Card
            title={movie.title}
            hoverable
            cover={<img alt={movie.title} src={imageUrl(movie.poster_path)} />}
            actions={[
              <Rate allowHalf count={10} value={movie.vote_average} disabled />,
            ]}
            extra={movie.adult ? <Tag color="red">18+</Tag> : null}
          >
            <Card.Meta
              description={moment(movie.release_date).format('MMMM YYYY')}
            />
          </Card>
        </Badge.Ribbon>
      )}

      {!movie.adult && (
        <Card
          title={movie.title}
          hoverable
          cover={<img alt={movie.title} src={imageUrl(movie.poster_path)} />}
          actions={[
            <Rate allowHalf count={10} value={movie.vote_average} disabled />,
          ]}
          extra={movie.adult ? <Tag color="red">18+</Tag> : null}
        >
          <Card.Meta
            description={moment(movie.release_date).format('MMMM YYYY')}
          />
          <Card.Meta description={`Popularity: ${movie.popularity}`} />
        </Card>
      )}
    </Link>
  );
};

export default MovieCard;

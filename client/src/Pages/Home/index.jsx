import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/Movies';
import { Divider, Spin, Space } from 'antd';
import MoviesContainer from './MoviesContainer';
import Search from './Search';
import Slider from './Carousel';

const Home = () => {
  const dispatch = useDispatch();
  const { movies, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      {movies.length <= 0 ? (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      ) : (
        <div>
          <div className="slider">
            <Slider suggestions={movies} />
          </div>
          <div className="home-layout-content">
            <Search />
            <Divider />
            <MoviesContainer movies={movies} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

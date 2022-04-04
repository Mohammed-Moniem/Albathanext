import React from "react";
import { Card, Col, Row } from "antd";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MoviesContainer = ({ movies }) => {
  const loading = useSelector((state) => state.movies.loadingMovies);
  return (
    <Card loading={loading}>
      <Row gutter={[8, 8]}>
        {movies.map((movie) => (
          <Col
            xs={{ span: 12 }}
            sm={{ span: 8 }}
            md={{ span: 6 }}
            key={movie.id}
          >
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default MoviesContainer;

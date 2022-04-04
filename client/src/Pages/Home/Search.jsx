import React from "react";
import { useDispatch } from "react-redux";
import { Col, Input, Row } from "antd";
import { getMovies, searchMovies } from "../../redux/Movies";

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (value) => {
    if (value) {
      dispatch(searchMovies(value));
    } else {
      dispatch(getMovies());
    }
  };

  return (
    <Row>
      <Col span={24}>
        <Input.Search
          enterButton
          placeholder="Search Movies ..."
          onSearch={handleSearch}
          allowClear
        />
      </Col>
    </Row>
  );
};

export default Search;

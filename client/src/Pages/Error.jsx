import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Result
      status="500"
      title="404"
      subTitle="Sorry, the movie you are looking for does not exist."
      extra={<Link to="/">Back Home</Link>}
    />
  );
};

export default Error;

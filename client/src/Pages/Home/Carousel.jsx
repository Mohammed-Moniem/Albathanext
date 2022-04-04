import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { imageUrl } from '../../utils/imageHelper';
import { Col, Row, Typography } from 'antd';

const Slider = ({ suggestions }) => {
  return (
    <Swiper slidesPerView={1} autoplay>
      {suggestions.map((suggestion) => (
        <SwiperSlide key={suggestion.id}>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(${imageUrl(suggestion.backdrop_path)})`,
            }}
          >
            <div className="slider-item__container">
              <Row gutter={[8, 8]}>
                <Col>
                  <Typography.Title level={2} style={{ color: '#000' }}>
                    {suggestion.title}
                  </Typography.Title>
                </Col>
              </Row>
              <Row justify="center">
                <Col>
                  <Link to={`/movie/${suggestion.id}`}>
                    <button className="know-more-btn">Know More</button>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;

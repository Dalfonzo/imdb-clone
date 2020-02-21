import React from 'react';
import './Carousel-element.styles.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const CarouselElement = ({ title, overview, poster_path, backdrop_path }) => {
  const url = 'https://image.tmdb.org/t/p/';
  return (
    <div className="element-container">
      <div
        className="element-poster"
        style={{
          background: `url(${url +
            'w500' +
            poster_path}) center/cover no-repeat`
        }}
      ></div>

      <div
        className="element-backdrop"
        style={{
          background: `url(${url +
            'w1280' +
            backdrop_path}) center/cover no-repeat`
        }}
      >
        <Icon icon={faPlayCircle} className="element-backdrop-icon" />
        <div className="element-backdrop-text">
          <p className="title">Watch the trailer</p>
          <p>'{title}'</p>
        </div>
      </div>
    </div>
  );

  // <div className="element-container">
  //   <img src={poster} alt="" />
  // </div>
};
export default CarouselElement;

import React from 'react';
import classes from './Carousel-element.module.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const carouselElement = ({ title, overview, poster_path, backdrop_path }) => {
  const url = 'https://image.tmdb.org/t/p/';
  return (
    <div className={classes.container}>
      <div
        className={classes.poster}
        style={{
          background: `url(${url +
            'w500' +
            poster_path}) center/cover no-repeat`
        }}
      ></div>

      <div
        className={classes.backdrop}
        style={{
          background: `url(${url +
            'w1280' +
            backdrop_path}) center/cover no-repeat`
        }}
      >
        <Icon icon={faPlayCircle} className={classes.backdrop_icon} />
        <div className={classes.backdrop_text}>
          <p className={classes.title}>Watch the trailer</p>
          <p>'{title}'</p>
        </div>
      </div>
    </div>
  );
};
export default carouselElement;
import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { faPlus, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

import classes from './Carousel-element.module.scss';

const carouselElement = ({
  title,
  overview,
  poster_path,
  backdrop_path,
  id
}) => {
  const url = 'https://image.tmdb.org/t/p/';
  return (
    <div className={classes.container}>
      <div className={classes.foo}>
        <Icon icon={faBookmark} className={classes.bookmark} />
        <Icon icon={faPlus} className={classes.plus} />
      </div>
      <Link
        className={classes.poster}
        style={{
          background: `url(${url +
            'w500' +
            poster_path}) center/cover no-repeat`
        }}
        to={`title/${id}`}
      />

      <Link
        className={classes.backdrop}
        style={{
          background: `url(${url +
            'w1280' +
            backdrop_path}) center/cover no-repeat`
        }}
        to={`video/${id}`}
      >
        <Icon icon={faPlayCircle} className={classes.backdrop_icon} />
        <div className={classes.backdrop_text}>
          <p className={classes.title}>Watch the trailer</p>
          <p>'{title}'</p>
        </div>
      </Link>
    </div>
  );
};
export default carouselElement;

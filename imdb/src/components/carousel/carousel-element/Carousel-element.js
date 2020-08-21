import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { faPlus, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { MEDIUM_IMG, FULL_IMG } from '../../../constants/apis';
import classes from './Carousel-element.module.scss';

const carouselElement = ({
  title,
  overview,
  poster_path,
  backdrop_path,
  id,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.foo}>
        <Icon icon={faBookmark} className={classes.bookmark} />
        <Icon icon={faPlus} className={classes.plus} />
      </div>
      <Link
        className={classes.poster}
        style={{
          background: `url(${MEDIUM_IMG + poster_path}) center/cover no-repeat`,
        }}
        to={`title/${id}`}
      />

      <Link
        className={classes.backdrop}
        style={{
          background: `url(${FULL_IMG + backdrop_path}) center/cover no-repeat`,
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

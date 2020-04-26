import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import withLoading from '../../hoc/withLoading';

import classes from './VideoPlayer.module.scss';

const VideoPlayer = ({
  back,
  title,
  description,
  tagline,
  year,
  poster,
  movie,
}) => {
  const link = `https://www.youtube.com/embed/${movie}?autoplay=1`;

  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <p onClick={back}>
          <Icon icon={faChevronLeft} className={classes.arrow} /> Back
        </p>
        <p>
          <Icon icon={faShareAlt} className={classes.share} />
        </p>
      </div>
      <iframe src={link} allowFullScreen title="Video player" />
      <div className={classes.content}>
        <img src={`https://image.tmdb.org/t/p/w185${poster}`} alt="" />
        <div className={classes.text}>
          <p>{title}</p>
          <p>{description}</p>
          <p>...{tagline}</p>
          <p>Release date: {year}</p>
        </div>
      </div>
    </div>
  );
};

export default withLoading(VideoPlayer);

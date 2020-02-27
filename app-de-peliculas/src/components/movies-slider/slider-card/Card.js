import React from 'react';
import classes from './Card.module.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus, faBookmark } from '@fortawesome/free-solid-svg-icons';

const card = ({ movie }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w185';
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.foo}>
          <Icon icon={faBookmark} className={classes.bookmark} />
          <Icon icon={faPlus} className={classes.plus} />
        </div>
        <img src={baseUrl + movie.poster_path} alt="" />
        <p className={classes.vote}>
          <Icon icon={faStar} className={classes.icon} />
          {movie.vote_average.toFixed(1)}
        </p>
        <p className={classes.title}>{movie.title}</p>
        <p className={classes.button}>
          <Icon icon={faPlus} className={classes.icon} />
          Watchlist
        </p>
      </div>
    </div>
  );
};

export default card;

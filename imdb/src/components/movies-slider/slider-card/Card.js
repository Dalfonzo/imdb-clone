import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { faStar, faPlus, faBookmark } from '@fortawesome/free-solid-svg-icons';

import classes from './Card.module.scss';

const card = ({ poster_path, vote_average, title }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w185';
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.foo}>
          <Icon icon={faBookmark} className={classes.bookmark} />
          <Icon icon={faPlus} className={classes.plus} />
        </div>
        <img src={baseUrl + poster_path} alt="Movie Poster" />
        <p className={classes.vote}>
          <Icon icon={faStar} className={classes.icon} />
          {vote_average.toFixed(1)}
        </p>
        <p className={classes.title}>{title}</p>
        <p className={classes.button}>
          <Icon icon={faPlus} className={classes.icon} />
          Watchlist
        </p>
      </div>
    </div>
  );
};

export default card;

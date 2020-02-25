import React from 'react';
import classes from './Card.module.scss'

const card = ({movie}) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  return (
    
      <div className={classes.container}>
        <p>{movie.title}</p>
        <p>{movie.vote_average}</p>
        <img src={baseUrl + movie.poster_path} alt=""/>
      </div>
    
  );
};

export default card;

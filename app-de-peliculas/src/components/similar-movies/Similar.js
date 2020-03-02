import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import classes from './Similar.module.scss';

function Similar({ movies }) {
  const [movie, setMovie] = useState([]);
  const baseUrl = 'https://image.tmdb.org/t/p/';
  // useEffect(() => movies[0] && setMovie(movies[0]),[]); //aca

  return (
    <div className={classes.container}>
      <div className={classes.preview}>
        {movies.slice(0, 6).map(m => {
          return (
            <img
              key={m.id}
              src={baseUrl + 'w92' + m.poster_path}
              onClick={() => setMovie(m)}
            />
          );
        })}
      </div>
      <div className={classes.show}>
        <img src={baseUrl + 'w154' + movie.poster_path} />

        <div>
          <p>{movie.title}</p>
          <p>{movie.overview}</p>
        </div>
        {/* <p className={classes.rating}>
          <Icon icon={faStar} className={classes.backdrop_icon} />
          <Icon icon={faStar} className={classes.backdrop_icon} />
          <Icon icon={faStar} className={classes.backdrop_icon} />
          <Icon icon={faStar} className={classes.backdrop_icon} />
          <Icon icon={faStar} className={classes.backdrop_icon} />
          <Icon icon={faStar} className={classes.backdrop_icon} />
          <Icon icon={faStar} className={classes.backdrop_icon} />
          <Icon icon={faStar} className={classes.backdrop_icon} />
          <Icon icon={faStar} className={classes.backdrop_icon} />
          <Icon icon={faStar} className={classes.backdrop_icon} />
        </p> */}
      </div>
    </div>
  );
}

export default Similar;

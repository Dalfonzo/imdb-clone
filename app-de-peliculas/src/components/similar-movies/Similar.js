import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import classes from './Similar.module.scss';

function Similar({ movies }) {
  console.log(movies.length ? 'yes' : 'no');
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = 'https://image.tmdb.org/t/p/';

  if (!movies.length) return null;
  
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>More like this</p>
      <p className={classes.learn}>Learn More</p>
      <div className={classes.container}>
        <div className={classes.preview}>
          {movies.slice(0, 6).map(m => {
            if (loading) {
              setMovie(movies[0]);
              setLoading(false);
            }
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
          <div className={classes.big}>
            <img src={baseUrl + 'w154' + movie.poster_path} />
            <button>Add to Watchlist</button>
          </div>
          <div className={classes.text}>
            <p>{movie.title}</p>
            <div className={classes.rating}>
              <p>
                <span>
                  {movie.vote_average}
                  /10
                </span>
              </p>
              <div className={classes.starContainer}>
                <p className={classes.back}>
                  <Icon icon={faStar} className={classes.star} />
                  <Icon icon={faStar} className={classes.star} />
                  <Icon icon={faStar} className={classes.star} />
                  <Icon icon={faStar} className={classes.star} />
                  <Icon icon={faStar} className={classes.star} />
                  <Icon icon={faStar} className={classes.star} />
                  <Icon icon={faStar} className={classes.star} />
                  <Icon icon={faStar} className={classes.star} />
                  <Icon icon={faStar} className={classes.star} />
                  <Icon icon={faStar} className={classes.star} />
                  <div
                    className={classes.rating_wrapper}
                    style={{ width: `${movie.vote_average * 10}%` }}
                  >
                    <p className={classes.front}>
                      <Icon icon={faStar} className={classes.star} />
                      <Icon icon={faStar} className={classes.star} />
                      <Icon icon={faStar} className={classes.star} />
                      <Icon icon={faStar} className={classes.star} />
                      <Icon icon={faStar} className={classes.star} />
                      <Icon icon={faStar} className={classes.star} />
                      <Icon icon={faStar} className={classes.star} />
                      <Icon icon={faStar} className={classes.star} />
                      <Icon icon={faStar} className={classes.star} />
                      <Icon icon={faStar} className={classes.star} />
                    </p>
                  </div>
                </p>
              </div>
            </div>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Similar);

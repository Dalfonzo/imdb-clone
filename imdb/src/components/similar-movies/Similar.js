import React, { useState } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SMALL_IMG } from '../../constants/apis';
import classes from './Similar.module.scss';

function Similar({ movies }) {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  if (!movies.length) return null;

  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>More like this</p>
      <p className={classes.learn}>Learn More</p>
      <div className={classes.container}>
        <div className={classes.preview}>
          {movies.slice(0, 6).map((m) => {
            if (loading) {
              setMovie(movies[0]);
              setLoading(false);
            }
            return (
              <img
                key={m.id}
                src={SMALL_IMG + m.poster_path}
                alt=""
                onClick={() => setMovie(m)}
              />
            );
          })}
        </div>

        <div className={classes.show}>
          <div className={classes.big}>
            <img src={SMALL_IMG + movie.poster_path} alt="" />
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
                <div className={classes.back}>
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
                    <div className={classes.front}>
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
                    </div>
                  </div>
                </div>
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

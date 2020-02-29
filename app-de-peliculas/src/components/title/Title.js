import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import {
  faPlus,
  faBookmark,
  faAngleDoubleDown,
  faStar
} from '@fortawesome/free-solid-svg-icons';

import { faStar as rStar } from '@fortawesome/free-regular-svg-icons';

import classes from './Title.module.scss';

const Title = ({ data }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  let {
    title,
    original_title,
    release_date = 'default',
    runtime = 0,
    genres = [1, 2, 3],
    vote_average,
    backdrop_path,
    poster_path
  } = data;

  console.log(data);
  let gen = genres.map(g => g.name).join(', ');

  let date = release_date.slice(0, 4);

  return (
    <div className={classes.container}>
      <div className={classes.left_side}>
        <div className={classes.nav}>
          <ul>
            <li>FULL CAST AND CREW</li>
            <li>TRIVIA</li>
            <li>USER REVIEWS</li>
            <li>IMDbPro</li>
            <li>
              {' '}
              MORE{' '}
              <Icon icon={faAngleDoubleDown} style={{ position: 'relative' }} />
            </li>
            <li>SHARE</li>
          </ul>
        </div>
        <div className={classes.hero_top}>
          <div className={classes.foo}>
            <Icon icon={faBookmark} className={classes.bookmark} />
            <Icon icon={faPlus} className={classes.plus} />
          </div>
          <div className={classes.info}>
            <p>
              {title}
              <span>({date})</span>
            </p>
            <p>
              {original_title}
              <span>(Original title)</span>
            </p>
            <ul>
              <li>{runtime} min</li>
              <li>{gen}</li>
              <li>{release_date}</li>
            </ul>
          </div>
          <div className={classes.votes}>
            <p>
              <Icon icon={faStar} className={classes.star} />
              {vote_average}
              <span>/10</span>
            </p>
            <p>
              <Icon icon={rStar} className={classes.rstar} />
              <p style={{display:'inline-block'}}>Rate this</p>
            </p>
          </div>
        </div>
        <div className={classes.hero}>
          <img src={baseUrl + poster_path} alt="" />
          <img src={baseUrl + backdrop_path} alt="" />
        </div>
      </div>
      <div className={classes.right_side}>2</div>
    </div>
  );
};

export default Title;

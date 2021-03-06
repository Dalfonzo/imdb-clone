import React, { useEffect } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import {
  faPlus,
  faBookmark,
  faAngleDoubleDown,
  faStar,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
  faStar as rStar,
  faPlayCircle,
} from '@fortawesome/free-regular-svg-icons';

import { SMALL_IMG, MEDIUM_IMG } from '../../constants/apis';
import classes from './Title.module.scss';

const findCrew = (crew, roll) => {
  let arr = [];

  for (crew of crew) {
    if (crew.job === roll) {
      if (arr.length < 4) {
        arr.push(crew.name);
      } else {
        break;
      }
    }
  }
  return arr;
};

const findStars = (cast) => {
  let arr = [];
  for (cast of cast) {
    if (arr.length < 4) {
      arr.push(cast.name);
    } else {
      break;
    }
  }
  return arr;
};

const Title = ({ data, id }) => {
  let {
    title = '',
    original_title = '',
    release_date = '',
    runtime = 0,
    genres = [],
    vote_average = 0,
    backdrop_path = '',
    poster_path = '',
    overview = '',
    credits = {
      crew: [],
      cast: [],
    },
  } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = ` ${title} (${release_date.slice(0, 4)}) - IMDB`;
    // eslint-disable-next-line
  }, []);

  let director = findCrew(credits.crew, 'Director').join(' , ');
  let writers = findCrew(credits.crew, 'Screenplay').join(' , ');
  let stars = findStars(credits.cast, 'name', 'name').join(' , ');
  let gen = genres.map((g) => g.name).join(' ,   ');
  let date = release_date.slice(0, 4);

  return (
    <div>
      <div className={classes.nav}>
        <ul>
          <li>FULL CAST AND CREW</li>
          <li>TRIVIA</li>
          <li>USER REVIEWS</li>
          <li>IMDbPro</li>
          <li>
            MORE
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
          <div className={classes.rating}>
            <Icon icon={rStar} className={classes.rstar} />
            <p style={{ display: 'inline-block' }}>Rate this</p>
          </div>
        </div>
      </div>
      <div className={classes.hero}>
        <div
          className={classes.poster}
          style={{
            backgroundImage: `url('${SMALL_IMG + poster_path}')`,
          }}
        />
        <Link
          to={`video/${id}`}
          className={classes.backdrop}
          style={{
            backgroundImage: `url('${MEDIUM_IMG + backdrop_path}')`,
          }}
        >
          <Icon icon={faPlayCircle} className={classes.play} />
          <p>trailer</p>
        </Link>
      </div>
      <div className={classes.overview}>
        <p>{overview}</p>
        <p>
          <b>Director: </b>
          {director}
        </p>
        <p>
          <b>Writers: </b>
          {writers}
        </p>
        <p>
          <b>Stars: </b>
          {stars}
        </p>
        <button>
          <Icon icon={faPlus} className={classes.play} />
          Add to Watchlist
        </button>
      </div>
      <div className={classes.imdbPro}>
        <img src="/img/imdbpro.png" alt="" />
        <p>
          View production, box office, & company info
          <Icon icon={faExternalLinkAlt} className={classes.external} />
        </p>
      </div>
    </div>
  );
};

export default Title;

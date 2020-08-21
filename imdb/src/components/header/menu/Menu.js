import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import logo from '../../../assets/images/IMDB.png';
import {
  faTimesCircle,
  faFilm,
  faUserFriends,
  faTv,
  faPlay,
  faStar,
  faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';

import classes from './Menu.module.scss';

const menu = ({ show, toggleMenu }) => {
  return (
    <div
      className={`${classes.container} ${show ? classes.show : classes.hide} `}
    >
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <img src={logo} alt="" />
          <Icon
            icon={faTimesCircle}
            className={classes.icon}
            onClick={toggleMenu}
          />
        </div>
        <div className={classes.list_container}>
          <div className={classes.row1}>
            <p className={classes.title}>
              <Icon icon={faFilm} className={classes.icon} />
              Movies
            </p>
            <ul className={classes.list}>
              <li>Showtimes & Tickets</li>
              <li>Top Rated Movies</li>
              <li>Most Popular Movies</li>
              <li>Browse Movies by Genre</li>
              <li>Top Box Office</li>
              <li>In Theaters</li>
              <li>Coming Soon</li>
              <li>DVD & Blu-ray Releases</li>
              <li>Release Calendar</li>
              <li>Movie News</li>
              <li>India Movie Spotlight</li>
            </ul>
            <p className={classes.title}>
              <Icon icon={faUserFriends} className={classes.icon} />
              Celebs
            </p>
            <ul className={classes.list}>
              <li>Born Today</li>
              <li>Most Popular Celebs</li>
              <li>Celebrity News</li>
            </ul>
          </div>
          <div className={classes.row2}>
            <div>
              <p className={classes.title}>
                <Icon icon={faTv} className={classes.icon} />
                TV Shows
              </p>
              <ul className={classes.list}>
                <li>Top Rated Shows</li>
                <li>Most Popular Shows</li>
                <li>Browse TV Shows by Genre</li>
                <li>TV News</li>
                <li>India TV Spotlight</li>
              </ul>
            </div>
            <div>
              <p className={classes.title}>
                <Icon icon={faPlay} className={classes.icon} />
                Videos
              </p>
              <ul className={classes.list}>
                <li>IMDb Originals</li>
                <li>Latest Trailers</li>
              </ul>
            </div>
          </div>

          <div className={classes.row3}>
            <p className={classes.title}>
              <Icon icon={faStar} className={classes.icon} />
              Awards & Events
            </p>
            <ul className={classes.list}>
              <li>Oscars</li>
              <li>Best Picture Winners</li>
              <li>Golden Globes</li>
              <li>Emmys</li>
              <li>San Diego Comic-Con</li>
              <li>New York Comic Con</li>
              <li>Sundace Film Festival</li>
              <li>Toronto Int'l Film Festival</li>
              <li>Awards Central</li>
              <li>Festival Central</li>
              <li>All Events</li>
            </ul>
            <p className={classes.title}>
              <Icon icon={faGlobeAmericas} className={classes.icon} />
              Community
            </p>
            <ul className={classes.list}>
              <li>Help Center</li>
              <li>Contributor Zone</li>
              <li>Polls</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;

import React from 'react';
import logo from '../../images/IMDB.png';
import './Menu.styles.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faTimesCircle,
  faFilm,
  faUserFriends,
  faTv,
  faPlay,
  faStar,
  faGlobeAmericas
} from '@fortawesome/free-solid-svg-icons';

const Menu = ({ show, toggleMenu }) => {
  return (
    <div className={`menu-container ${show ? 'show' : 'hide'} `}>
      <div className="wrapper">
        <div className="header">
          <img src={logo} alt="" />
          <Icon icon={faTimesCircle} className="icon" onClick={toggleMenu} />
        </div>
        <div className="list-container">
          <div className="row1">
            <p className="title">
              <Icon icon={faFilm} className="icon" />
              Movies
            </p>
            <ul className="list">
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
            <p className="title">
              <Icon icon={faUserFriends} className="icon" />
              Celebs
            </p>
            <ul className="list">
              <li>Born Today</li>
              <li>Most Popular Celebs</li>
              <li>Celebrity News</li>
            </ul>
          </div>
          <div className="row2">
            <div>
              <p className="title">
                <Icon icon={faTv} className="icon" />
                TV Shows
              </p>
              <ul className="list">
                <li>Top Rated Shows</li>
                <li>Most Popular Shows</li>
                <li>Browse TV Shows by Genre</li>
                <li>TV News</li>
                <li>India TV Spotlight</li>
              </ul>
            </div>
            <div>
              <p className="title">
                <Icon icon={faPlay} className="icon" />
                Videos
              </p>
              <ul className="list">
                <li>IMDb Originals</li>
                <li>Latest Trailers</li>
              </ul>
            </div>
          </div>

          <div className="row3">
            <p className="title">
              <Icon icon={faStar} className="icon" />
              Awards & Events
            </p>
            <ul className="list">
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
            <p className="title">
              <Icon icon={faGlobeAmericas} className="icon" />
              Community
            </p>
            <ul className="list">
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

export default Menu;

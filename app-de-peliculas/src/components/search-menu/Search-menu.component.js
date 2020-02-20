import React from 'react';
import './Search-menu.styles.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faFilm,
  faTv,
  faUserFriends,
  faBuilding,
  faChevronCircleRight,
  faSearchPlus,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const SearchMenu = () => {
  return (
    <div className="search-menu-container">
      <li className="option-list">
        <ul className="option">
          <Icon icon={faSearch}></Icon>
          All
        </ul>
        <ul className="option">
          <Icon icon={faFilm}></Icon>Titles
        </ul>
        <ul className="option">
          <Icon icon={faTv}></Icon>TV Episodes
        </ul>
        <ul className="option">
          <Icon icon={faUserFriends}></Icon>Celebs
        </ul>
        <ul className="option">
          <Icon icon={faBuilding}></Icon>Companies
        </ul>
        <ul className="option">
          <Icon icon={faChevronCircleRight}></Icon>Keywords
        </ul>
        <ul className="option">
          <Icon icon={faSearchPlus}></Icon>Advanced Search
          <Icon icon={faChevronRight}></Icon>
        </ul>
      </li>
    </div>
  );
};

export default SearchMenu;

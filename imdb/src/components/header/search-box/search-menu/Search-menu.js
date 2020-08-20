import React from 'react';
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

import classes from './Search-menu.module.scss';

const searchMenu = () => {
  return (
    <div className={classes.container}>
      <li className={classes.option_list}>
        <ul className={classes.option}>
          <Icon icon={faSearch}></Icon>
          All
        </ul>
        <ul className={classes.option}>
          <Icon icon={faFilm}></Icon>Titles
        </ul>
        <ul className={classes.option}>
          <Icon icon={faTv}></Icon>TV Episodes
        </ul>
        <ul className={classes.option}>
          <Icon icon={faUserFriends}></Icon>Celebs
        </ul>
        <ul className={classes.option}>
          <Icon icon={faBuilding}></Icon>Companies
        </ul>
        <ul className={classes.option}>
          <Icon icon={faChevronCircleRight}></Icon>Keywords
        </ul>
        <ul className={classes.option}>
          <Icon icon={faSearchPlus}></Icon>Advanced Search
          <Icon icon={faChevronRight}></Icon>
        </ul>
      </li>
    </div>
  );
};

export default searchMenu;

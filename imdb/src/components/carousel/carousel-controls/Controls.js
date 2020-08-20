import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import classes from './Controls.module.scss';

const controls = ({ direction, style, onClick }) => {
  const i = direction === 'forward' ? faChevronRight : faChevronLeft;

  return (
    <div className={classes.container} onClick={onClick} style={style}>
      <Icon icon={i} className={classes.icon} />
    </div>
  );
};

export default controls;

import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import classes from './Controls.module.scss';

const controls = ({ direction, disableButton, handler }) => {
  const hideButton = disableButton ? { visibility: 'hidden' } : null;
  const i = direction === 'forward' ? faChevronRight : faChevronLeft;

  return (
    <div className={classes.container} onClick={handler} style={hideButton}>
      <Icon icon={i} className={classes.icon} />
    </div>
  );
};

export default controls;

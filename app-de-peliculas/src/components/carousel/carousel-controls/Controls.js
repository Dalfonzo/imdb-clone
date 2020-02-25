import React from 'react';
import classes from './Controls.module.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

const controls = ({ disableBack, back, forward, disableForward }) => {
  
  const hideBackButton = disableBack ? { visibility: 'hidden' } : null;
  const hideForwardButton = disableForward ? { visibility: 'hidden' } : null;

  return (
    <div className={classes.wrapper}>
      <div 
        className={classes.container} 
        onClick={back} 
        style={hideBackButton}
      >
        <Icon icon={faChevronLeft} className={classes.icon} />
      </div>
      <div
        className={classes.container}
        onClick={forward}
        style={hideForwardButton}
      >
        <Icon icon={faChevronRight} className={classes.icon} />
      </div>
    </div>
  );
};

export default controls;

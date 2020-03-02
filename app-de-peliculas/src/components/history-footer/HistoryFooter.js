import React from 'react';
import classes from './HistoryFooter.module.scss';

function HistoryFooter() {
  return (
    <div className={classes.history}>
      <p className={classes.title}>Recently Viewed</p>
      <p>Clear your history</p>
    </div>
  );
}

export default HistoryFooter;

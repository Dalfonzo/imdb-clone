import React from 'react';
import classes from './DetailsFooter.module.scss';

function DetailsFooter() {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <p>Contribute to This Page</p>
        <button>Edit page</button>
      </div>
      <div className={classes.right}>
        <p>Getting started</p>
        <p>
          Contributor zone <span>&gt;</span>
        </p>
      </div>
    </div>
  );
}

export default DetailsFooter;

import React from 'react';

import classes from './ImdbPro.module.scss';

const imdbPro = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.upper}>
        <p className={classes.title}>
          IMDb<span>Pro</span>
        </p>
        <p className={classes.subtitle}>An Amazon company</p>
        <div className={classes.form}>
          <p>Join</p>
          <p className={classes.option}>
            <span className={`${classes.icon} ${classes.amazon}`} />
            Join With Amazon
          </p>
          <p>Already have an account?</p>
          <p className={classes.option}>
            <span className={`${classes.icon} ${classes.amazon}`} />
            Log in With Amazon
          </p>
          <p className={classes.option}>
            <span className={`${classes.icon} ${classes.amazon}`} />
            Log in With IMDb
          </p>
        </div>
      </div>
      <div className={classes.bottom}>asd</div>
    </div>
  );
};

export default imdbPro;

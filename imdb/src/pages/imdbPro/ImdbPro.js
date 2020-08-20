import React from 'react';

import classes from './ImdbPro.module.scss';

const imdbPro = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.upper}>
        <p className={classes.title}>
          IMDb<span className={classes.span}>Pro</span>
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
            <span className={`${classes.icon} ${classes.imdb}`} />
            Log in With IMDb
          </p>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.links}>
          <p>Help</p>
          <p>Subscriber Agreement</p>
          <p>Privacy Policy</p>
        </div>
        <p className={classes.rights}>An Amazon company</p>
        <p className={classes.rights}>
          © 1990-2020 IMDb.com, Inc. or its affiliates.
        </p>
      </div>
    </div>
  );
};

export default imdbPro;

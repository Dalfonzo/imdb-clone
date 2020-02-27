import React from 'react';

import classes from './SignIn.module.scss';

const signIn = () => {
  return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.links}>
            <p className={classes.title}>Sign in</p>
            <p className={classes.option}>
              <span className={`${classes.icon} ${classes.imdb}`} />
              Sign in with IMDb
            </p>
            <p className={classes.option}>
              <span className={`${classes.icon} ${classes.amazon}`} />
              Sign in with Amazon
            </p>
            <p className={classes.option}>
              <span className={`${classes.icon} ${classes.facebook}`} />
              Sign in with Facebook
            </p>
            <p className={classes.option}>
              <span className={`${classes.icon} ${classes.google}`} />
              Sign in with Google
            </p>
            <p className={classes.separator}>or</p>
            <button>Create a New Account</button>
            <p className={classes.disclaimer}>
              By signing in, you agree to IMDb's <span>Conditions of Use</span>{' '}
              and <span>Privacy Policy.</span>
            </p>
          </div>
          <div className={classes.Benefits}>
            <p className={classes.title}>Benefits of your free IMDb account</p>
            <p className={classes.subtitle}>Personalized Recommendations</p>
            <p className={classes.text}>Discover shows you'll love.</p>
            <p className={classes.subtitle}>Your Watchlist</p>
            <p className={classes.text}>
              Track everything you want to watch and receive e-mail when movies
              open in theaters.
            </p>
            <p className={classes.subtitle}>Your Ratings</p>
            <p className={classes.text}>
              Rate and remember everything you've seen.
            </p>
            <p className={classes.subtitle}>Contribute to IMDb</p>
            <p className={classes.text}>
              Add data that will be seen by millions of people and get cool
              badges.
            </p>
          </div>
        </div>
        <div className={classes.history}>
          <p className={classes.title}>Recently Viewed</p>
          <p>Clear your history</p>
        </div>
      </div>
  );
};

export default signIn;

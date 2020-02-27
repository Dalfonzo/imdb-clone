import React from 'react';

import classes from './Celebrity.module.scss';

const celebrity = ({ name, profile_path }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w185';
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div
          className={classes.image}
          style={{
            background: `url(${baseUrl + profile_path}) center/cover no-repeat`
          }}
        ></div>
        <p className={classes.name}>{name}</p>
      </div>
    </div>
  );
};

export default celebrity;

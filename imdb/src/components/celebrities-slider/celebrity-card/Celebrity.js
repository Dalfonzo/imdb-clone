import React from 'react';

import { SMALL_IMG } from '../../../constants/apis';

import classes from './Celebrity.module.scss';

const celebrity = ({ name, profile_path }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div
          className={classes.image}
          style={{
            background: `url(${
              SMALL_IMG + profile_path
            }) center/cover no-repeat`,
          }}
        ></div>
        <p className={classes.name}>{name}</p>
      </div>
    </div>
  );
};

export default celebrity;

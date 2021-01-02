import React from 'react';

import classes from './newsCard.module.scss';

const card = ({ image, title }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div
          className={classes.image}
          style={{
            background: `url(${image}) center/cover no-repeat`,
          }}
        />
        <p className={classes.description}>{title}</p>
      </div>
    </div>
  );
};

export default card;

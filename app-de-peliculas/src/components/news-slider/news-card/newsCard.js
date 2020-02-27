import React from 'react';

import classes from './newsCard.module.scss';

const card = ({ urlToImage, title }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div
          className={classes.image}
          style={{
            background: `url(${urlToImage}) center/cover no-repeat`
          }}
        ></div>
        <p className={classes.description}>{title}</p>
      </div>
    </div>
  );
};

export default card;

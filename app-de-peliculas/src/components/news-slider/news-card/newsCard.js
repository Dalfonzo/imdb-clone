import React from 'react';
import classes from './newsCard.module.scss';

const card = ({ data }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div
          className={classes.image}
          style={{
            background: `url(${data.urlToImage}) center/cover no-repeat`
          }}
        >
          {console.log(data.urlToImage)}
        </div>
        <p className={classes.description}>{data.title}</p>
      </div>
    </div>
  );
};

export default card;

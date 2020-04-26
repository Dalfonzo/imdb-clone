import React from 'react';
import classes from './AsideElement.module.scss';

const AsideElement = ({ data }) => {
  return (
    <div className={classes.wrapper}>
      {data.slice(0, 1).map(({ title, urlToImage, description }, index) => {
        return (
          <div className={classes.container} key="index">
            <p>{title}</p>
            <img src={urlToImage} alt="" />
            <p>{description}</p>
          </div>
        );
      })}

      <p>
        Watch the video <span>>></span>
      </p>
    </div>
  );
};

export default AsideElement;

import React from 'react';
import classes from './AsideElement.module.scss';

const AsideElement = ({ data }) => {
  return (
    <div className={classes.wrapper}>
      {data.slice(0, 1).map(({ title, image, description }, index) => {
        return (
          <div className={classes.container} key={index}>
            <p>{title}</p>
            <img src={image} alt="" />
            <p>{description}</p>
          </div>
        );
      })}

      <p>
        Watch the video <span>&gt;</span>
      </p>
    </div>
  );
};
export default AsideElement;

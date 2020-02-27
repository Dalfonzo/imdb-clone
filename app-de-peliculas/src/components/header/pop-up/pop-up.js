import React from 'react';

import girl from '../../../images/girl-bg.png';

import classes from './pop-up.module.scss';

const popUp = () => {
  return (
    <div className={classes.container}>
      <div className={classes.image_container}>
        <img src={girl} alt="" />
      </div>
      <div className={classes.text_container}>
        <p>The essential resource for entertainment professionals</p>
        <ul>
          <li>Find industry contacts & talent representation</li>
          <li>Access in-development titles not availables on IMDB</li>
          <li>Get the latets news from leading industry trades</li>
          <li>Claim your page and control your brand across IMDB & Amazon</li>
        </ul>
        <button>Try IMDbPro Free</button>
      </div>
    </div>
  );
};

export default popUp;

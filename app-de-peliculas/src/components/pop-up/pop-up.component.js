import React from 'react';
import './pop-up.styles.scss';
import girl from '../../images/girl-bg.png';

const PopUp = () => {
  return (
    <div className="popup-container">
      <div className="image-container">
        <img src={girl} alt="" />
      </div>
      <div className="text-container">
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

export default PopUp;

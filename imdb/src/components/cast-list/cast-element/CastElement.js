import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Img from '../../../assets/images/default_user.png';

import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { IMG_BASE_URL } from '../../../constants/apis';
import classes from './CastElement.module.scss';

const castElement = ({ name, profile_path, character }) => {
  let profImg =
    profile_path == null ? Img : IMG_BASE_URL + 'w45' + profile_path;
  return (
    <div className={classes.container}>
      <div>
        <img src={profImg} alt="" />
      </div>

      <p>{name}</p>
      <p>
        <Icon icon={faEllipsisH} className={classes.backdrop_icon} />
      </p>
      <p>{character}</p>
    </div>
  );
};

export default castElement;

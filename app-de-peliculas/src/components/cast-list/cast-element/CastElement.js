import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Img from '../../../images/default_user.png';

import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import classes from './CastElement.module.scss';

const castElement = ({ name, profile_path, character }) => {
  // if (profile_path === null) {
  // //   profile_path =
  // //     'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB468460248_.png';
  // // }
  console.log(name);
  const baseUrl = 'https://image.tmdb.org/t/p/w45';
  let profImg = profile_path == null ? Img : baseUrl + profile_path;
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

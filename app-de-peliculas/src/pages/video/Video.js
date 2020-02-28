import React from 'react';
import classes from './Video.module.scss';

import VideoPlayer from '../../components/video-player/VideoPlayer';

const Video = props => {
  return (
    <div className={classes.container}>
      <VideoPlayer
        id={props.match.params.id}
        back={props.history.goBack}
      ></VideoPlayer>
    </div>
  );
};

export default Video;

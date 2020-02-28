import React from 'react';
import classes from './Video.module.scss';

import VideoPlayer from '../../components/video-player/VideoPlayer';

const Video = ({match}) => {
  
  return (
    <div className={classes.container}>
      <VideoPlayer id={match.params.id}></VideoPlayer>
    </div>
  );
};

export default Video;

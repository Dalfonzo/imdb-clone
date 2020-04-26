import React, { useState, useEffect } from 'react';
import classes from './Video.module.scss';
import axios from 'axios';

import VideoPlayer from '../../components/video-player/VideoPlayer';
import withLoading from '../../hoc/withLoading';

const VideoPlayerWithLoading = withLoading(VideoPlayer);
const Video = (props) => {
  const [request, setRequest] = useState({
    movie: '',
    title: '',
    poster: '',
    description: '',
    year: '',
    tagline: '',
    isLoading: false,
  });

  const getApi = (url) => {
    axios(url)
      .then(({ data }) => {
        for (let i = 0; i < data.videos.results.length; i++) {
          if (data.videos.results[i].type === 'Trailer') {
            setRequest({
              movie: data.videos.results[i].key,
              title: data.title,
              poster: data.poster_path,
              description: data.overview,
              year: data.release_date,
              tagline: data.tagline,
              isLoading: false,
            });
            break;
          }
        }
      })
      .catch(function (error) {
        if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      });
  };

  useEffect(() => {
    setRequest({ isLoading: true });
    const url = `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&append_to_response=videos`;
    getApi(url);
  }, [props]);

  return (
    <div className={classes.container}>
      <VideoPlayerWithLoading
        isLoading={request.isLoading}
        {...request}
        back={props.history.goBack}
      />
    </div>
  );
};

export default Video;

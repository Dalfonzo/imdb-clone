import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { faChevronLeft, faShareAlt } from '@fortawesome/free-solid-svg-icons';

import classes from './VideoPlayer.module.scss';

class videoPlayer extends React.Component {
  state = {
    movie: '',
    title: '',
    poster: '',
    description: '',
    year: '',
    tagline: ''
  };

  getApi = url => {
    axios(url).then(({ data }) => {
      for (let i = 0; i < data.videos.results.length; i++) {
        if (data.videos.results[i].type === 'Trailer') {
          this.setState({
            movie: data.videos.results[i].key,
            title: data.title,
            poster: data.poster_path,
            description: data.overview,
            year: data.release_date,
            tagline: data.tagline
          });
          break;
        }
      }
    });
  };

  componentDidMount() {
    let url = `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&append_to_response=videos`;
    this.getApi(url);
  }

  render() {
    let link = `https://www.youtube.com/embed/${this.state.movie}?autoplay=1`;

    return (
      <div className={classes.container}>
        <div className={classes.icon}>
          <p onClick={this.props.back}>
            <Icon icon={faChevronLeft} className={classes.arrow} /> Back
          </p>
          <p>
            <Icon icon={faShareAlt} className={classes.share} />
          </p>
        </div>
        <iframe src={link} allowFullScreen title="Video player" />
        <div className={classes.content}>
          <img
            src={`https://image.tmdb.org/t/p/w185${this.state.poster}`}
            alt=""
          />
          <div className={classes.text}>
            <p>{this.state.title}</p>
            <p>{this.state.description}</p>
            <p>...{this.state.tagline}</p>
            <p>Release date: {this.state.year}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default videoPlayer;

// class videoPlayer extends React.Component {
//   state = {
//     movie: '',
//     link: ''
//   };

//   getApi = url => {
//     axios(url).then(({ data }) => {
//       console.log(data)
//       this.setState(
//         {
//           movie: data.results[0].key
//         },
//         () =>
//           this.setState({
//             link: `https://www.youtube.com/embed/${this.state.movie}`
//           })
//       );
//     });
//   };

//   render() {
//     let url = `https://api.themoviedb.org/3/movie/${this.props.id}/videos?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US`;
//     this.getApi(url);

//     return (
//       <iframe src={this.state.link} allowFullScreen title="Video player" />
//     );
//   }
// }

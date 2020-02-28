import React from 'react';
import axios from 'axios';

import classes from './VideoPlayer.module.scss';

class videoPlayer extends React.Component {
  state = {
    movie: ''
  };

  getApi = url => {
    axios(url).then(({ data }) => {
      for (let i = 0; i < data.videos.results.length; i++) {
        if (data.videos.results[i].type === 'Trailer') {
          this.setState({
            movie: data.videos.results[i].key
          });
          break;
        }
      }
    });
  };

  // getApi = url => {
  //   axios(url).then((response) => {
  //     console.log(response)
  //   });
  // };

  componentDidMount() {
    let url = `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&append_to_response=videos`;
    this.getApi(url);
  }

  render() {
    let link = `https://www.youtube.com/embed/${this.state.movie}`;

    return (
      <div className={classes.container}>
        <iframe src={link} allowFullScreen title="Video player" />
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

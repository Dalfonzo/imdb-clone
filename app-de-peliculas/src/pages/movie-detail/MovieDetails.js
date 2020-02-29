import React, { Component } from 'react';
import axios from 'axios';

import Title from '../../components/title/Title';

class MovieDetails extends Component {
  state = {
    data: []
  };

  getApi = url => {
    axios(url).then(({ data }) => {
      this.setState({
        data: data
      });
    });
  };

  componentDidMount() {
    let url = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US&append_to_response=credits,images,keywords,reviews,similar`;
    this.getApi(url);
  }

  render() {

    return (
      <div className="wrapper-sm">
        <div className="container-sm">
          <Title data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default MovieDetails;

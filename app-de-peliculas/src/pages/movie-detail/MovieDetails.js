import React, { Component } from 'react';
import axios from 'axios';

import Title from '../../components/title/Title';
import Cast from '../../components/cast-list/Cast';
import Similar from '../../components/similar-movies/Similar';
import DetailsFooter from '../../components/details-footer/DetailsFooter';
import HistoryFooter from '../../components/history-footer/HistoryFooter';

import classes from './MovieDetails.module.scss';

class MovieDetails extends Component {
  state = {
    data: [],
    credits: [],
    similar: []
  };

  getApi = async url => {
    const result = await axios(url);
    if (result.data) {
      this.setState({
        data: result.data,
        credits: result.data.credits.cast,
        similar: result.data.similar.results
      });
    }
  };

  async componentDidMount() {
    let url = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US&append_to_response=credits,images,keywords,reviews,similar`;
    await this.getApi(url);
  }
  render() {
    console.log(this.state.similar);
    return (
      <div className="wrapper-sm">
        <div className="container-sm">
          <div className={classes.container}>
            <div className={classes.left_side}>
              <Title data={this.state.data} id={this.props.match.params.id} />
              <Similar movies={this.state.similar} />
              <Cast cast={this.state.credits} />
              <DetailsFooter />
            </div>
            <div className={classes.right_side}></div>
          </div>
        </div>
        <HistoryFooter />
      </div>
    );
  }
}

export default MovieDetails;

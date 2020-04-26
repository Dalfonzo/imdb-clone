import React, { Component } from 'react';
import axios from 'axios';

import Title from '../../components/title/Title';
import Cast from '../../components/cast-list/Cast';
import Similar from '../../components/similar-movies/Similar';
import DetailsFooter from '../../components/details-footer/DetailsFooter';
import HistoryFooter from '../../components/history-footer/HistoryFooter';
import Aside from '../../components/aside/Aside';
import withLoading from '../../hoc/withLoading';

import classes from './MovieDetails.module.scss';

const TitleWithLoading = withLoading(Title);
const CastWithLoading = withLoading(Cast);
const SimilarWithLoading = withLoading(Similar);

class MovieDetails extends Component {
  state = {
    data: [],
    credits: [],
    similar: [],
    isLoading: false,
  };

  fetchData = async (url) => {
    const result = await axios(url);
    if (result.data) {
      this.setState({
        data: result.data,
        credits: result.data.credits.cast,
        similar: result.data.similar.results,
        isLoading: false,
      });
    }
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const FETCH_URL = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US&append_to_response=credits,images,keywords,reviews,similar`;
    await this.fetchData(FETCH_URL);
  }
  render() {
    return (
      <div className="wrapper-sm">
        <div className="container-sm">
          <div className={classes.container}>
            <div className={classes.left_side}>
              <TitleWithLoading
                data={this.state.data}
                id={this.props.match.params.id}
                isLoading={this.state.isLoading}
              />
              <SimilarWithLoading movies={this.state.similar} />
              <CastWithLoading cast={this.state.credits} />
              <DetailsFooter />
            </div>
            <div className={classes.right_side}>
              <Aside url="http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=c89fb28b98ed4170a4004bab8835654b" />
            </div>
          </div>
        </div>
        <HistoryFooter />
      </div>
    );
  }
}

export default MovieDetails;

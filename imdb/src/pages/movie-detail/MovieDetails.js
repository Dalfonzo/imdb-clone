import React, { Component } from 'react';
import axios from 'axios';

import Title from '../../components/title/Title';
import Cast from '../../components/cast-list/Cast';
import Similar from '../../components/similar-movies/Similar';
import DetailsFooter from '../../components/details-footer/DetailsFooter';
import HistoryFooter from '../../components/history-footer/HistoryFooter';
import Aside from '../../components/aside/Aside';
import withLoading from '../../hoc/withLoading';
import { HEADLINES, API_BASE_URL, KEY } from '../../constants/apis';

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

  fetchData = async () => {
    const movieID = this.props.match.params.id;
    const url =
      API_BASE_URL +
      'movie/' +
      movieID +
      KEY +
      '&language=en-US&append_to_response=credits,images,keywords,reviews,similar';

    try {
      const result = await axios(url);
      if (result.data) {
        this.setState({
          data: result.data,
          credits: result.data.credits.cast,
          similar: result.data.similar.results,
          isLoading: false,
        });
      }
    } catch (error) {
      console.log('something went wrong', error);
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchData();
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
              <Aside url={HEADLINES} />
            </div>
          </div>
        </div>
        <HistoryFooter />
      </div>
    );
  }
}

export default MovieDetails;

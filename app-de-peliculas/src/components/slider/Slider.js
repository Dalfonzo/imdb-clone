import React from 'react';
import classes from './Slider.module.scss';
import Card from './slider-card/Card';
import axios from 'axios';

class Slider extends React.Component {
  state = {
    data: [],
    position: 0
  };

  getMovies = () => {
    const url =
      'https://api.themoviedb.org/3/movie/popular?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US&page=1';
    axios(url).then(({ data }) => {
      this.setState({
        data: data.results
      });
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { data, position } = this.state;
    
    return (
      <>
        <button onClick={this.getMovies}>clickme</button>
        <div className={classes.wrapper}>
          <h2 className={classes.title}>What to Watch</h2>
          <h3 className={classes.subtitle}>Fan Favorites</h3>
          <p className={classes.description}>This week's top TV and movies</p>
          <div className={classes.container1}>
            <div className={classes.container2}></div>
          </div>
        </div>
        {data.map(movie => {
          console.log(movie)
          return <Card movie={movie} />;
        })}
      </>
    );
  }
}

export default Slider;

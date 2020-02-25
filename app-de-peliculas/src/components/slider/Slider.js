import React from 'react';
import classes from './Slider.module.scss';
import Card from './slider-card/Card';
import axios from 'axios';
import Controls from '../carousel/carousel-controls/Controls';

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

  adelante = () => {
    this.setState(prvState => ({
      position: prvState.position - 100
    }));
  };

  atras = () => {
    this.setState(prvState => ({
      position: prvState.position + 100
    }));
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { data, position } = this.state;
    const translateSlider = { transform: `translateX(${position}%)` };
    const disableForward = Math.abs(position / 100 ) === Math.floor(data.length / 6)
    const disableBack = !position

    console.log(disableForward)
    return (
      <>
        <div className={classes.wrapper}>
          <h2 className={classes.title}>What to Watch</h2>
          <h3 className={classes.subtitle}>Fan Favorites</h3>
          <p className={classes.description}>This week's top TV and movies</p>
          <div className={classes.container1}>
            <div className={classes.container2} style={translateSlider}>
              {data.map(movie => {
                return <Card movie={movie} />;
              })}
            </div>
            <Controls
              disableBack={disableBack}
              disableForward={disableForward}
              back={this.atras}
              forward={this.adelante}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Slider;

import React from 'react';
import classes from './Carousel.module.scss';
import axios from 'axios';
import CarouselElement from './carousel-element/Carousel-element';
// 3e2cc31e8a094dc74d7fa8c446b0c3fa
// https://image.tmdb.org/t/p/w500
// https://www.youtube.com/watch?v

class Carousel extends React.Component {
  state = {
    data: [],
    position: 0
  };

  getApi = () => {
    const url =
      'https://api.themoviedb.org/3/movie/popular?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US&page=1';
    axios(url).then(({ data }) => {
      this.setState({
        data: data.results
      });
    });
  };

  adelante = () => {
    const gap = 100 / this.state.data.length;

    this.setState(prvState => ({
      position: prvState.position - gap
    }));
  };

  atras = () => {
    const gap = 100 / this.state.data.length;

    this.setState(prvState => ({
      position: prvState.position + gap
    }));
  };

  componentDidMount() {
    this.getApi();
    setInterval(this.adelante, 7000);
  }

  componentDidUpdate() {
    if (
      Math.round(this.state.position) <
      Math.round(100 / this.state.data.length - 100)
    ) {
      this.setState({
        position: 0
      });
    }
  }

  render() {
    const { data, position } = this.state;
    const final = 100 / data.length - 100;
    const translateHero = { transform: `translateX(${position}%)` };

    return (
      <>
        <div className={classes.container_1}>
          <div className={classes.container_2} style={translateHero}>
            {data.map(({ id, ...otrasProps }) => (
              <CarouselElement key={id} {...otrasProps} />
            ))}
          </div>
        </div>

        <button
          onClick={this.atras}
          disabled={Math.round(position) === 0}
        >
          Atras
        </button>
        <button
          onClick={this.adelante}
          disabled={Math.round(position) === Math.round(final)}
        >
          Adelante
        </button>
      </>
    );
  }
}

export default Carousel;

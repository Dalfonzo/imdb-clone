import React from 'react';
import axios from 'axios';

import CarouselElement from './carousel-element/Carousel-element';
import Controls from './carousel-controls/Controls';

import classes from './Carousel.module.scss';

// 3e2cc31e8a094dc74d7fa8c446b0c3fa
// https://image.tmdb.org/t/p/w500
// https://www.youtube.com/watch?v

// pagina de news key
// c89fb28b98ed4170a4004bab8835654b

class Carousel extends React.Component {
  state = {
    data: [],
    position: 0
  };

  getApi = () => {
    axios(this.props.url).then(({ data }) => {
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
          <Controls
            direction="back"
            disableButton={Math.round(position) === 0}
            handler={this.atras}
          />
          <Controls
            direction="forward"
            disableButton={Math.round(position) === Math.round(final)}
            handler={this.adelante}
          />
        </div>
        <p className={classes.sugestion}>Browse trailers</p>
      </>
    );
  }
}

export default Carousel;

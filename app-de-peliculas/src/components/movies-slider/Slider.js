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
    axios(this.props.url).then(({ data }) => {
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
    const disableForward =
      Math.abs(position / 100) === Math.floor(data.length / 6);
    const disableBack = !position;

    return (
      <div className={classes.wrapper}>
        <h2 className={classes.title}>{this.props.title}</h2>
        <h3 className={classes.subtitle}>{this.props.subtitle}</h3>
        <p className={classes.description}>{this.props.description}</p>
        <div className={classes.container1}>
          <div className={classes.container2} style={translateSlider}>
            {data.map(movie => {
              return <Card movie={movie} />;
            })}
          </div>
          <Controls
            direction="back"
            disableButton={disableBack}
            handler={this.atras}
          />
          <Controls
            direction="forward"
            disableButton={disableForward}
            handler={this.adelante}
          />
        </div>
      </div>
    );
  }
}

export default Slider;

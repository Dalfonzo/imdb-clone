import React, { Component } from 'react';
import axios from 'axios';
import Celebrity from './celebrity-card/Celebrity';
import classes from './Celebrities.module.scss';
import Controls from '../carousel/carousel-controls/Controls';

export class Celebrities extends Component {
  state = {
    data: [],
    position: 0
  };

  getCelebs = () => {
    axios(this.props.url).then(({ data }) => {
      this.setState({
        data: data.results
      });
    });
  };

  componentDidMount() {
    this.getCelebs();
  }

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

  render() {
    const { data, position } = this.state;
    const translateSlider = { transform: `translateX(${position}%)` };
    const disableForward =
      Math.abs(position / 100) === Math.floor(data.length / 6);
    const disableBack = !position;

    return (
      <div className={classes.wrapper}>
        <h3 className={classes.subtitle}>{this.props.subtitle}</h3>
        <p className={classes.description}>{this.props.description}</p>

        <div className={classes.container1}>
          <div className={classes.container2} style={translateSlider}>
            {data.map(({id, ...c}) => (
              <Celebrity key={id} {...c} />
            ))}
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

export default Celebrities;

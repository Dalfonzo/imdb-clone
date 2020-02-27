import React from 'react';
import axios from 'axios';
import Card from './news-card/newsCard';
import classes from './News.module.scss';
import Controls from '../carousel/carousel-controls/Controls';

class News extends React.Component {
  state = {
    data: [],
    position: 0
  };

  getNews = () => {
    axios(this.props.url).then(({ data }) => {
      this.setState({
        data: data.articles
      });
    });
  };

  componentDidMount() {
    this.getNews();
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
      Math.abs(position / 100) === Math.floor(data.length / 3);
    const disableBack = !position;
    
    return (
      <div className={classes.wrapper}>
        <h2 className={classes.title}>{this.props.title}</h2>
        <h3 className={classes.subtitle}>{this.props.subtitle}</h3>
        <div className={classes.container1}>
          <div className={classes.container2} style={translateSlider}>
            {data.map(({url, ...otras}) => (
              <Card key={url} {...otras} />
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
export default News;

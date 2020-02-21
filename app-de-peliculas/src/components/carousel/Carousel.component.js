import React from 'react';
import './Carousel.styles.scss';
import axios from 'axios';
import CarouselElement from '../carousel-element/Carousel-element.component';
// 3e2cc31e8a094dc74d7fa8c446b0c3fa
// https://image.tmdb.org/t/p/w500
// https://www.youtube.com/watch?v
class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  getApi = () => {
    const url =
      'https://api.themoviedb.org/3/movie/popular?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US&page=1';
    axios.get(url).then(({ data }) => {
      this.setState({
        data: data.results
      });
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <button onClick={this.getApi}>CLICK ME</button>
        {data.map(({ id, ...otrasProps }) => (
          <CarouselElement key={id} {...otrasProps} />
        ))}
      </div>
    );
  }
}

export default Carousel;

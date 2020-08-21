import React from 'react';

import CarouselElement from './carousel-element/Carousel-element';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import withFetching from '../../hoc/withFetching';
import { settings } from './carouselConfig';
import classes from './Carousel.module.scss';

const Carousel = ({ data }) => {
  return (
    <div className={classes.wrapper}>
      <Slider {...settings}>
        {data.map(({ id, ...otrasProps }) => (
          <CarouselElement key={id} {...otrasProps} id={id} />
        ))}
      </Slider>
      <p className={classes.sugestion}>Browse trailers</p>
    </div>
  );
};

export default withFetching(Carousel);

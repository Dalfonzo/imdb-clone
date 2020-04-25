import React from 'react';

import CarouselElement from './carousel-element/Carousel-element';
import Controls from './carousel-controls/Controls';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import withFetching from '../../hoc/withFetching';

import classes from './Carousel.module.scss';

// 3e2cc31e8a094dc74d7fa8c446b0c3fa
// https://image.tmdb.org/t/p/w500
// https://www.youtube.com/watch?v

// pagina de news key
// c89fb28b98ed4170a4004bab8835654b
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Controls
      direction="back"
      onClick={onClick}
      style={{
        position: 'absolute',
        zIndex: '100',
        transform: 'translateY(-40%)',
        top: '40%',
        left: '1rem',
      }}
    />
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <Controls
      direction="forward"
      onClick={onClick}
      style={{
        position: 'absolute',
        zIndex: '100',
        transform: 'translateY(-40%)',
        top: '40%',
        right: '1rem',
      }}
    />
  );
}

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

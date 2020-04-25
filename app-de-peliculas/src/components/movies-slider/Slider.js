import React from 'react';
import { Link } from 'react-router-dom';
import MovieSlider from 'react-slick';
import withFetching from '../../hoc/withFetching';

import Card from './slider-card/Card';
import Controls from '../carousel/carousel-controls/Controls';

import classes from './Slider.module.scss';

const Slider = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>{props.title}</h2>
      <h3 className={classes.subtitle}>{props.subtitle}</h3>
      <p className={classes.description}>{props.description}</p>
      <MovieSlider {...settings}>
        {props.data.map(({ id, ...otras }) => (
          <Link key={id} to={`title/${id}`} style={{ textDecoration: 'none' }}>
            <Card key={id} {...otras} />
          </Link>
        ))}
      </MovieSlider>
    </div>
  );
};

export default withFetching(Slider);

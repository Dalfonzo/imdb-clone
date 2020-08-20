import React from 'react';
import { Link } from 'react-router-dom';
import MovieSlider from 'react-slick';
import withFetching from '../../hoc/withFetching';
import { settings } from './sliderConfig';

import Card from './slider-card/Card';

import classes from './Slider.module.scss';

const Slider = (props) => {
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

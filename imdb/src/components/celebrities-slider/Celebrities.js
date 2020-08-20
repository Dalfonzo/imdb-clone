import React from 'react';

import Celebrity from './celebrity-card/Celebrity';
import withFeching from '../../hoc/withFetching';
import Slider from 'react-slick';
import { settings } from '../movies-slider/sliderConfig';

import classes from './Celebrities.module.scss';

export const Celebrities = ({ data, ...props }) => {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.subtitle}>{props.subtitle}</h3>
      <p className={classes.description}>{props.description}</p>

      <Slider {...settings}>
        {data.map(({ id, ...otrasProps }) => (
          <Celebrity key={id} {...otrasProps} />
        ))}
      </Slider>
    </div>
  );
};

export default withFeching(Celebrities);

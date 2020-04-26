import React from 'react';
import Slider from 'react-slick';

import Card from './news-card/newsCard';
import { settings } from './newsConfig';
import withFetchingNews from '../../hoc/withFetchingNews';

import classes from './News.module.scss';

const News = ({ data, ...props }) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>{props.title}</h2>
      <h3 className={classes.subtitle}>{props.subtitle}</h3>
      <Slider {...settings}>
        {data.map(({ url, ...otras }) => (
          <a href={url} style={{ textDecoration: 'none' }} key={url}>
            <Card key={url} {...otras} />
          </a>
        ))}
      </Slider>
    </div>
  );
};
export default withFetchingNews(News);

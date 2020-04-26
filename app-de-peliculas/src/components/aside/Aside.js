import React from 'react';
import withFetchingNews from '../../hoc/withFetchingNews';
import AsideElement from './aside-element/AsideElement';

import classes from './Aside.module.scss';

const Aside = ({ data }) => {
  return (
    <div className={classes.container}>
      <AsideElement data={data} />
      <p className={classes.header}>Related News</p>
      {data.slice(1, -1).map(({ title, publishedAt }, index) => {
        return (
          <p key={index} className={classes.title}>
            {title}
            <br />
            <span>{publishedAt}</span>
          </p>
        );
      })}
    </div>
  );
};

export default withFetchingNews(Aside);

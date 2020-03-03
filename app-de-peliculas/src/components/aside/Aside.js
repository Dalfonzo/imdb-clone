import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AsideElement from './aside-element/AsideElement';

import classes from './Aside.module.scss';

const Aside = () => {
  const [data, setData] = useState([]);

  const getApi = url => {
    axios(url).then(({ data }) => {
      setData(data.articles);
      console.log(data);
    });
  };

  useEffect(() => {
    let url =
      'http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=c89fb28b98ed4170a4004bab8835654b';
    getApi(url);
  }, []);

  return (
    <div className={classes.container}>
      <AsideElement data={data} />
      <p className={classes.header}>Related News</p>
      {console.log(data)}
      {data.slice(1, -1).map(({ title,publishedAt }, index) => {
        return (
          <p key={index} className={classes.title}>
            {title}<br/><span>{publishedAt}</span>
          </p>
        );
      })}
    </div>
  );
};

export default Aside;

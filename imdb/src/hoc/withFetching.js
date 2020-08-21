import React, { useState, useEffect } from 'react';
import withLoading from './withLoading';
import axios from 'axios';

const withFetching = (Component) => ({ url, ...otrosProps }) => {
  const ComponentWithLoading = withLoading(Component);
  const [request, setRequest] = useState({
    data: [],
    isLoading: false,
  });

  useEffect(() => {
    setRequest({ isLoading: true });
    axios(url)
      .then(({ data }) => {
        setRequest({ data: data.results || data.articles, isLoading: false });
      })
      .catch(function (error) {
        if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
  }, [url]);

  const { data, isLoading } = request;

  return (
    <ComponentWithLoading isLoading={isLoading} data={data} {...otrosProps} />
  );
};

export default withFetching;

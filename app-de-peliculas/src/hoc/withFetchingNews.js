import React, { useState, useEffect } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';

const withFetching = (Component) => ({ url, ...otrosProps }) => {
  const [request, setRequest] = useState({
    data: [],
    isLoading: false,
  });

  useEffect(() => {
    setRequest({ isLoading: true });
    axios(url).then(({ data }) => {
      setRequest({ data: data.articles, isLoading: false });
    });
  }, [url]);

  const { data, isLoading } = request;
  if (isLoading)
    return (
      <Dimmer active page>
        <Loader content="Loading" />
      </Dimmer>
    );
  return <Component data={data} {...otrosProps} />;
};

export default withFetching;

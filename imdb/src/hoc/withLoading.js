import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const withLoading = (Component) => ({ isLoading, ...props }) => {
  if (isLoading)
    return (
      <Dimmer active page>
        <Loader content="Loading" />
      </Dimmer>
    );
  return <Component {...props} />;
};

export default withLoading;

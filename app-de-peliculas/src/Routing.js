import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/home/Home';
import SignIn from './pages/sign-in/SignIn';
import WithLayout from './hoc/WithLayout';

const routing = (function routing() {
  const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/signin',
      component: SignIn
    }
  ];

  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return <WithLayout>{routeComponents}</WithLayout>;
})();

export default routing;

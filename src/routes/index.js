import React, { memo } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import {
  LazyWrapper,
  ProtectedRoute
} from 'ui';

const Page404 = React.lazy(() => import('pages/Page404'));
const Home = React.lazy(() => import('pages/Home'));
const BlockScreen = React.lazy(() => import('pages/BlockScreen'));

const Router = () => (
  <Switch>
    {routes.map((route) => (
      <ProtectedRoute
        key={route.path}
        {...route}
        component={LazyWrapper(route.component)}
      />
    ))}
  </Switch>
);

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/btc/blocks" />
  }, {
    path: '/btc/blocks',
    exact: true,
    component: Home
  }, {
    path: '/btc/block/:hash',
    exact: false,
    component: BlockScreen
  }, {
    path: '/',
    exact: false,
    component: Page404
  }

];

export default memo(Router);

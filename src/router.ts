import React, { lazy } from 'react';
import { ConnectedComponent } from 'react-redux';

interface RouteBase {
  path: string;
  exact?: boolean;
  component:
    | React.LazyExoticComponent<() => JSX.Element>
    | React.LazyExoticComponent<ConnectedComponent<any, any>>;
}

const routes: RouteBase[] = [
  {
    path: '/app/op/hookDemo',
    exact: false,
    component: lazy(() => import('./routes/hookDemo')),
  },
];

export default routes;

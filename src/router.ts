import React, { lazy } from 'react';
import { ConnectedComponent } from 'react-redux';

interface RouteBase {
  name: string;
  path: string;
  element:
    | React.LazyExoticComponent<() => JSX.Element>
    | React.LazyExoticComponent<ConnectedComponent<any, any>>
    | React.LazyExoticComponent<any>
}

const AppRoutes: RouteBase[] = [
  {
    name: '',
    path: '/app/hookDemo',
    element: lazy(() => import('./routes/hookDemo')),
  },
  {
    name: '',
    path: '/app/classDemo',
    element: lazy(() => import('./routes/classDemo')),
  },
];


export default AppRoutes;

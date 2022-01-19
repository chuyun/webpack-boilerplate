import { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AppRoutes from '@/router';

import './App.css';

import HookDemo from './hookDemo';

const App = () => {
  return (
    <div className="layout">
      <Suspense fallback={<div />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HookDemo />} />
            <Route path="/app/index" element={<Navigate to="/" />} />
            {AppRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.element />}
                />
              );
            })}
            <Route path="*" element={<div>NotFound</div>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;

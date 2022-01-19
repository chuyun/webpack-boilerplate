import { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import router from '@/router';

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
            {router.map(({ path, component }) => {
              return (
                <Route
                  key={path}
                  path={path}
                  element={component}
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

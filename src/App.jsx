import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Songs from './pages/Songs';

import { HOME_ROUTE, SONGS } from './constants/routesPaths';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={HOME_ROUTE}
          element={(
            <Home />
          )}
        />
        <Route
          path={SONGS}
          element={(
            <Songs />
          )}
        />
        {/* <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
        <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

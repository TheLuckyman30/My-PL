import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './pages/welcome/WelcomePage';
import Game from './pages/game/Game';

const router = createHashRouter([
  {
    path: '',
    element: <WelcomePage></WelcomePage>,
  },
  {
    path: '/LeagueTable',
    element: <Game></Game>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

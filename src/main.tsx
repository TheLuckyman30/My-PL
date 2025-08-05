import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import React from 'react';
import ReactDOM from 'react-dom/client';
import MainMenu from './pages/main-menu/MainMenu';
import GamePageLoader from './pages/game/GameLoader';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainMenu />,
  },
  {
    path: '/game/:pageId',
    element: <GamePageLoader />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);

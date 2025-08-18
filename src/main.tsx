import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import React from 'react';
import ReactDOM from 'react-dom/client';
import MainMenu from './pages/main-menu/MainMenu';
import GamePageLoader from './pages/game/GameLoader';
import './index.css';
import Home from './pages/game/home/Home';
import Squad from './pages/game/squad/Squad';
import Player from './pages/game/player/Player';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainMenu />,
  },
  {
    path: '/game',
    element: <GamePageLoader />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'squad/:teamId', element: <Squad /> },
      { path: 'player/:playerId', element: <Player /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);

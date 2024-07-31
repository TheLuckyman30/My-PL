import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WelcomePage from './pages/welcome/WelcomePage';
import LeagueTable from './pages/league_table/League_Table';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage></WelcomePage>,
  },
  {
    path: '/LeagueTable',
    element: <LeagueTable></LeagueTable>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);

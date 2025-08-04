//import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MainMenu from './pages/main-menu/MainMenu';

const router = createHashRouter([
  {
    path: '/',
    element: <MainMenu></MainMenu>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);

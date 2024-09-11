import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/welcome/WelcomePage';
import Game from './pages/game/Game';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/My-PL/">
      <Routes>
        <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
        <Route path="/LeagueTable" element={<Game></Game>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

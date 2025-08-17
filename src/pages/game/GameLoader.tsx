import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function GamePageLoader() {
  return (
    <div className="h-lvh w-lvw">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default GamePageLoader;

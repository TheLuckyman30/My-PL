import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="flex justify-center">
      <div className="flex fixed gap-5 p-3 border mt-5">
        <Link to="/">Menu</Link>
        <div>Home</div>
      </div>
    </div>
  );
}

export default NavBar;

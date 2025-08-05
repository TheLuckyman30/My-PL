import { Link } from 'react-router-dom';

const NAVBAR_OPTIONS = [
  { name: 'Menu', link: '/' },
  { name: 'Home', link: '/game/home' },
];

function NavBar() {
  return (
    <div className="flex justify-center">
      <div className="flex fixed gap-5 p-3 mt-5 items-center bg-sky-700 rounded-md shadow-md text-white font-bold">
        {NAVBAR_OPTIONS.map((option) => (
          <Link className="hover:-translate-y-0.5 duration-150" to={option.link}>
            {option.name}
          </Link>
        ))}
        <div>Janurary 1st, 2025</div>
      </div>
    </div>
  );
}

export default NavBar;

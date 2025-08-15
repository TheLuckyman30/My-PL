import { Link } from 'react-router-dom';
import { useCalendarStore } from '../../zustand/calendar-store';

const NAVBAR_OPTIONS = [
  { name: 'Menu', link: '/' },
  { name: 'Home', link: '/game/home' },
  { name: 'Squad', link: '/game/squad' },
];

function NavBar() {
  const currentDay = useCalendarStore((state) => state.currentDay);
  const advanceDay = useCalendarStore((state) => state.advanceDay);

  return (
    <div className="flex justify-center">
      <div className="flex fixed gap-5 p-3 mt-5 items-center bg-sky-700 rounded-md shadow-md text-white font-bold">
        {NAVBAR_OPTIONS.map((option) => (
          <Link className="hover:-translate-y-0.5 duration-150" to={option.link}>
            {option.name}
          </Link>
        ))}
        <div
          onClick={advanceDay}
        >{`${currentDay.dayName}, ${currentDay.month} ${currentDay.dayNumber} ${currentDay.year}`}</div>
      </div>
    </div>
  );
}

export default NavBar;

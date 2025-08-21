import { Link } from 'react-router-dom';
import { useCalendarStore } from '../../zustand/calendar-store';
import { useUserStore } from '../../zustand/user-store';

function NavBar() {
  const user = useUserStore((state) => state.user);
  const currentDay = useCalendarStore((state) => state.currentDay);
  const advanceDay = useCalendarStore((state) => state.advanceDay);

  const navbarOptions = [
    { name: 'Menu', link: '/' },
    { name: 'Home', link: '/game/home' },
    { name: 'Team', link: `/game/team/${user.selectedTeamId}` },
    { name: 'Squad', link: `/game/squad/${user.selectedTeamId}` },
  ];

  return (
    <div className="flex justify-center">
      <div className="flex fixed gap-5 p-3 mt-5 items-center bg-sky-700 rounded-md shadow-md text-white font-bold">
        {navbarOptions.map((option, index) => (
          <Link className="hover:-translate-y-0.5 duration-150" to={option.link} key={index}>
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

import '../../../css/components/NavBar.css';
import { Date } from '../../../utils/classes/Date';

interface NavBarProps {
  currentDate: Date | null;
  setCurrentDate: (newDate: Date) => void;
}

function NavBar({ currentDate, setCurrentDate }: NavBarProps) {
  function nextDay() {
    if (currentDate && currentDate.nextDate) {
      setCurrentDate(currentDate.nextDate);
    }
  }
  return (
    <div className="navBar">
      <a className="anchor" href="/">
        <img className="image" src="src\assets\images\PL-Logo.png"></img>
      </a>
      <div className="date">
        <div>
          Current Date:{' '}
          {currentDate
            ? currentDate.currentDayName +
              ', ' +
              currentDate.currentMonth +
              ' ' +
              currentDate.currentDay +
              ', ' +
              currentDate.currentYear
            : 'Nothing'}
        </div>
        <div className="date-button" onClick={nextDay}>
          Next Date
        </div>
      </div>
    </div>
  );
}

export default NavBar;

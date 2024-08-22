import '../../../css/components/NavBar.css';
import { Date } from '../../../utils/classes/Date';

interface NavBarProps {
  currentDate: Date | null;
  setCurrentSection: (newSection: number) => void;
}

const BUTTON_BAR = [
  { name: 'League Table', pageNumber: 0 },
  { name: 'Teams', pageNumber: 1 },
  { name: 'Schedule', pageNumber: 2 },
  { name: 'Match Simulation', pageNumber: 3 },
];

function NavBar({ currentDate, setCurrentSection }: NavBarProps) {
  return (
    <div className="navBar">
      <div className="date-container">
        <a className="anchor" href="/">
          <img className="image" src="src\assets\images\PL-Logo.png"></img>
        </a>
        <div className="date">
          <div>
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
        </div>
      </div>
      <div className="button-bar">
        {BUTTON_BAR.map((button) => (
          <div
            className="button"
            onClick={() => setCurrentSection(button.pageNumber)}
          >
            {button.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavBar;

import '../../../css/components/NavBar.css';
import { Date } from '../../../utils/classes/Date';
import Logo from '../../../assets/images/PL-Logo.png';

interface NavBarProps {
  currentDate: Date | null;
  setCurrentSection: (newSection: number) => void;
}

const BUTTON_BAR = [
  { name: 'League Table', pageNumber: 0 },
  { name: 'Schedule', pageNumber: 2 },
];

function NavBar({ currentDate, setCurrentSection }: NavBarProps) {
  return (
    <div className="navBar">
      <div className="date-container">
        <a className="anchor" href="/My-PL/">
          <img className="image" src={Logo}></img>
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

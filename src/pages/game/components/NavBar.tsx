import '../../../css/components/NavBar.css';
import { Date } from '../../../utils/classes/Date';
import Logo from '../../../assets/images/PL-Logo.png';
import { useEffect, useState } from 'react';
import { Menu } from '@mui/material';

interface NavBarProps {
  currentDate: Date | null;
  setCurrentSection: (newSection: number) => void;
}

const BUTTON_BAR = [
  { name: 'League Table', pageNumber: 0 },
  { name: 'Schedule', pageNumber: 2 },
];

function NavBar({ currentDate, setCurrentSection }: NavBarProps) {
  const [parentEL, setParentEL] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(parentEL);

  useEffect(() => {
    const handleResize = () => {
      setParentEL(null);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    setParentEL(event.currentTarget);
  }

  function handleClose() {
    setParentEL(null);
  }

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
        <div>
          <div className="dropdown-button" onClick={handleClick}>
            Menu
          </div>
          <Menu
            anchorEl={parentEL}
            open={isOpen}
            onClose={handleClose}
            disableScrollLock={true}
            anchorOrigin={{
              vertical: 80,
              horizontal: -60,
            }}
          >
            {BUTTON_BAR.map((button) => (
              <div
                className="dropdown-content"
                onClick={() => setCurrentSection(button.pageNumber)}
              >
                {button.name}
              </div>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

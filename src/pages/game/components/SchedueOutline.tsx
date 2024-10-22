import { Date } from '../../../utils/classes/Date';
import '../../../css/components/ScheduleOutline.css';

interface ScheduleOutlineProps {
  datesWithMatches: Date[];
}

function ScheduleOutline({ datesWithMatches }: ScheduleOutlineProps) {
  function scrollToDate(index: number) {
    const element = document.getElementById('date' + index);
    const navbarHeight = document.querySelector('.navBar')?.clientHeight || 0;

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'instant',
      });
    }
  }

  return (
    <div className="outline-container">
      <div>
        {datesWithMatches.map((date: Date, index: number) => (
          <div onClick={() => scrollToDate(index)} className="to-date">
            {date.currentDayName +
              ', ' +
              date.currentMonth +
              ' ' +
              date.currentDay +
              ', ' +
              date.currentYear}{' '}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScheduleOutline;

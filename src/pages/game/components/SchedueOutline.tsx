import { Date } from '../../../utils/classes/Date';

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
    <div>
      {datesWithMatches.map((date: Date, index: number) => (
        <div onClick={() => scrollToDate(index)}>
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
  );
}

export default ScheduleOutline;

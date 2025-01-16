import { MyDate } from '../../../utils/classes/Date';
import '../../../css/components/ScheduleOutline.css';

interface ScheduleOutlineProps {
  datesWithMatches: MyDate[];
}

function ScheduleOutline({ datesWithMatches }: ScheduleOutlineProps) {
  function scrollToDate(index: number) {
    const yOffset: number = -100;
    const element = document.getElementById('date' + index);
    if (element) {
      const y: number =
        element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y });
    }
  }

  return (
    <div className="outline-container">
      <div>
        {datesWithMatches.map((date: MyDate, index: number) => (
          <div onClick={() => scrollToDate(index)} className="to-date">
            {date.dayName +
              ', ' +
              date.month +
              ' ' +
              date.day +
              ', ' +
              date.year}{' '}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScheduleOutline;

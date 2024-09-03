import { Date } from '../../../utils/classes/Date';
import { Match } from '../../../utils/classes/Match';
import { Team } from '../../../utils/classes/Team';
import { season } from '../../../utils/helpers/League_Generation';
import MatchCard from './MatchCard';
import '../../../css/components/Schedule.css';

interface ScheduleProps {
  setTeams: (newTeams: Team[]) => void;
}

function Schedule({ setTeams }: ScheduleProps) {
  let datesWithMatches: Date[] = [];
  let current: Date | null = season.firstGameDate;
  while (current) {
    if (current.hasMatch) {
      datesWithMatches = [...datesWithMatches, current];
    }
    current = current.nextDate;
  }

  return (
    <div>
      {datesWithMatches.map((date: Date) => (
        <div>
          <div className="schedule-date">
            {date.currentDayName +
              ', ' +
              date.currentMonth +
              ' ' +
              date.currentDay +
              ', ' +
              date.currentYear}
          </div>
          <table className="schedule-table">
            {date.matches.map((match: Match) => (
              <MatchCard match={match} setTeams={setTeams}></MatchCard>
            ))}
          </table>
        </div>
      ))}
    </div>
  );
}

export default Schedule;

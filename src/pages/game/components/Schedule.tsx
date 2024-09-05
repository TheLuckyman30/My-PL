import { Date } from '../../../utils/classes/Date';
import { Match } from '../../../utils/classes/Match';
import { Team } from '../../../utils/classes/Team';
import { season } from '../../../utils/helpers/League_Generation';
import MatchCard from './MatchCard';
import '../../../css/components/Schedule.css';
import { matchSim } from '../../../utils/helpers/MatchSimulation';
import { useState } from 'react';

interface ScheduleProps {
  setTeams: (newTeams: Team[]) => void;
}

function Schedule({ setTeams }: ScheduleProps) {
  const [update, setUpdate] = useState<boolean>(false);
  let datesWithMatches: Date[] = [];
  let current: Date | null = season.firstGameDate;
  while (current) {
    if (current.hasMatch) {
      datesWithMatches = [...datesWithMatches, current];
    }
    current = current.nextDate;
  }

  function simMatchDay(date: Date) {
    date.matches.forEach((match: Match) =>
      matchSim(
        match,
        setTeams,
        () => null,
        () => null,
        () => null
      )
    );
    setUpdate(!update);
  }

  return (
    <div>
      {datesWithMatches.map((date: Date) => (
        <div>
          <div className="schedule-date">
            <div>
              {date.currentDayName +
                ', ' +
                date.currentMonth +
                ' ' +
                date.currentDay +
                ', ' +
                date.currentYear}
            </div>
            <br></br>
            <div
              onClick={() => simMatchDay(date)}
              className={
                date.matches.every((match: Match) => match.isDone)
                  ? 'disabled-sim-button'
                  : 'simulate-button'
              }
            >
              Simulate Matchweek
            </div>
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

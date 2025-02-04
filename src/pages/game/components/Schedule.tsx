import { Date } from '../../../utils/classes/Date';
import { Match } from '../../../utils/classes/Match';
import { Team } from '../../../utils/classes/Team';
import { season } from '../../../utils/helpers/League_Generation';
import MatchCard from './MatchCard';
import '../../../css/components/Schedule.css';
//import { matchSim } from '../../../utils/helpers/MatchSimulation';
//import { useState } from 'react';
import ScheduleOutline from './SchedueOutline';

interface ScheduleProps {
  macthes: Match[];
  setTeams: (newTeams: Team[]) => void;
}

function Schedule({ /*macthes*/ setTeams }: ScheduleProps) {
  //const [update, setUpdate] = useState<boolean>(false);
  let datesWithMatches: Date[] = [];
  let current: Date | null = season.firstGameDate;
  while (current) {
    if (current.hasMatch) {
      datesWithMatches = [...datesWithMatches, current];
    }
    current = current.nextDate;
  }

  /*function simMatchDay(date: Date) {
    date.matches.forEach((match: Match) => {
      if (!match.isDone) {
        matchSim(
          match,
          setTeams,
          () => null,
          () => null,
          () => null
        );
      }
    });
    setUpdate(!update);
  }*/

  /*function simAllMacthes() {
    macthes.forEach((match: Match) => {
      if (!match.isDone) {
        matchSim(
          match,
          setTeams,
          () => null,
          () => null,
          () => null
        );
      }
    });
    setUpdate(!update);
  }*/

  return (
    <div style={{ width: '100%' }}>
      <div className="schedule-outline">
        <ScheduleOutline datesWithMatches={datesWithMatches}></ScheduleOutline>
      </div>
      <div className="schedule-container">
        <div>
          {datesWithMatches.map((date: Date, index: number) => (
            <div id={'date' + index} className="schedule">
              <div className="schedule-date">
                {date.currentDayName +
                  ' ' +
                  date.currentMonth +
                  ' ' +
                  date.currentDay +
                  ', ' +
                  date.currentYear}
              </div>
              <div className="schedule-table">
                {date.matches.map((match: Match) => (
                  <MatchCard match={match} setTeams={setTeams}></MatchCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Schedule;

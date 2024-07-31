import { Team } from '../../../utils/classes/Team';
import { Match } from '../../../utils/classes/Match';

interface MatchProps {
  selectedTeam: Team;
}

function Matches({ selectedTeam }: MatchProps) {
  return (
    <div>
      <div>
        {selectedTeam.mathches &&
          selectedTeam.mathches.map((match: Match, index: number) => (
            <div key={index}>
              <div>{match.homeTeam.name + ' vs ' + match.awayTeam.name}</div>
              <div>
                {match.date?.currentMonth +
                  ', ' +
                  match.date?.currentDay +
                  ' ' +
                  match.date?.currentYear}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Matches;

import { Button } from '@mui/material';
import MatchCard from './MatchCard';
import { Match } from '../../../utils/classes/Match';
import { Team } from '../../../utils/classes/Team';
import { matchSim } from '../../../utils/helpers/MatchSimulation';

interface MatchesListProps {
  matches: Match[];
  setTeams: (setTeams: Team[]) => void;
}

function MacthSim({ matches, setTeams }: MatchesListProps) {
  const sortedMatches = [...matches].sort((a, b) =>
    a.date && b.date ? a.date?.uniqueID - b.date?.uniqueID : 0
  );
  let matchweek: number = 1;

  function simAll() {
    sortedMatches.forEach((match: Match) =>
      matchSim(
        match,
        setTeams,
        () => {},
        () => {},
        () => {}
      )
    );
  }

  return (
    <div>
      <Button onClick={simAll}>Sim All</Button>
      {sortedMatches.map((match: Match, index: number) => (
        <div>
          <div>
            {(index === 0 || (index % 10 === 0 && index > 9)) && (
              <h2>Matchweek: {matchweek++}</h2>
            )}
          </div>
          <MatchCard match={match} setTeams={setTeams}></MatchCard>
        </div>
      ))}
    </div>
  );
}

export default MacthSim;

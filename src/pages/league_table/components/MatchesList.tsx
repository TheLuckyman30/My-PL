import { Drawer } from '@mui/material';
import MatchCard from './MatchCard';
import { Match } from '../../../utils/classes/Match';
import { Team } from '../../../utils/classes/Team';

interface MatchesListProps {
  matches: Match[];
  openMatchList: boolean;
  setTeams: (setTeams: Team[]) => void;
}

function MatchesList({ matches, openMatchList, setTeams }: MatchesListProps) {
  const sortedMatches = [...matches].sort((a, b) =>
    a.date && b.date ? a.date?.uniqueID - b.date?.uniqueID : 0
  );
  let matchweek: number = 1;

  return (
    <div>
      <Drawer open={openMatchList}>
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
      </Drawer>
    </div>
  );
}

export default MatchesList;

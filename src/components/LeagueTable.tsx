import { Link } from 'react-router-dom';
import { League } from '../utils/interfaces/league';

interface LeagueTableProps {
  league: League;
}

function LeagueTable({ league }: LeagueTableProps) {
  return (
    <div className="text-center self-center text-4xl font-bold">
      <div className="flex flex-wrap flex-col">
        {league.teams.map((team) => (
          <Link to={`/game/team/${team.id}`}>{team.name}</Link>
        ))}
      </div>
    </div>
  );
}

export default LeagueTable;

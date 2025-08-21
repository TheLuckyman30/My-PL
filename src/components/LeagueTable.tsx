import { Link } from 'react-router-dom';
import { League } from '../utils/interfaces/league';

interface LeagueTableProps {
  league: League;
}

function LeagueTable({ league }: LeagueTableProps) {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex flex-wrap flex-col shadow-2xl p-8 border-2 border-zinc-500">
        {league.teams.map((team, index) => (
          <Link to={`/game/team/${team.id}`} key={index}>{`${index + 1}. ${team.name}`}</Link>
        ))}
      </div>
    </div>
  );
}

export default LeagueTable;

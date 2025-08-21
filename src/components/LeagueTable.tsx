import { Link } from 'react-router-dom';
import { useLeagueStore } from '../zustand/league-store';
import { useTeamStore } from '../zustand/team-store';

interface LeagueTableProps {
  leagueId: string;
}

function LeagueTable({ leagueId }: LeagueTableProps) {
  const leagues = useLeagueStore((state) => state.leagues);
  const teams = useTeamStore((state) => state.teams);
  const league = leagues.get(leagueId);

  if (league) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex flex-wrap flex-col shadow-2xl p-8 border-2 border-zinc-500">
          {league.teamIds.map((teamId, index) => (
            <Link to={`/game/team/${teams.get(teamId)?.id}`} key={index}>{`${index + 1}. ${
              teams.get(teamId)?.name
            }`}</Link>
          ))}
        </div>
      </div>
    );
  }
}

export default LeagueTable;

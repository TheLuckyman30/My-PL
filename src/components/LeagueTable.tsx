import { useLeagueStore } from '../zustand/league-store';
import TableRow from './TableRow';

interface LeagueTableProps {
  leagueId: string;
}

function LeagueTable({ leagueId }: LeagueTableProps) {
  const league = useLeagueStore((state) => state.leagues.get(leagueId));

  if (league) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex flex-wrap flex-col shadow-2xl p-8 border-2 border-zinc-500">
          {league.teamIds.map((teamId, index) => (
            <TableRow teamId={teamId} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default LeagueTable;

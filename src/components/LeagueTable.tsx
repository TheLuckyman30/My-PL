import { useLeagueStore } from '../zustand/league-store';
import TableRow from './TableRow';

interface LeagueTableProps {
  leagueId: string;
}

const LEAUGE_TABLE_HEADERS = ['Name', 'W', 'D', 'L', 'GD', 'PTS'];

function LeagueTable({ leagueId }: LeagueTableProps) {
  const league = useLeagueStore((state) => state.leagues.get(leagueId));

  if (league) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <table className="shadow-2xl border">
          {LEAUGE_TABLE_HEADERS.map((header) => (
            <th>{header}</th>
          ))}
          {league.teamIds.map((teamId, index) => (
            <TableRow teamId={teamId} key={index} />
          ))}
        </table>
      </div>
    );
  }
}

export default LeagueTable;

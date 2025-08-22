import { Link } from 'react-router-dom';
import { useTeamStore } from '../zustand/team-store';

interface TableRowProps {
  teamId: string;
}

function TableRow({ teamId }: TableRowProps) {
  const team = useTeamStore((state) => state.teams.get(teamId));

  if (team) {
    return (
      <tr className="hover:scale-105 hover:shadow-2xl duration-150 bg-white">
        <td className="p-5">
          <Link to={`/game/team/${teamId}`}>{team.name}</Link>
        </td>
        <td className="p-5">{team.wins}</td>
        <td className="p-5">{team.draws}</td>
        <td className="p-5">{team.loses}</td>
        <td className="p-5">{team.goalDifference}</td>
        <td className="p-5">0</td>
      </tr>
    );
  }
}

export default TableRow;

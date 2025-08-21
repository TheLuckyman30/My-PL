import { Link } from 'react-router-dom';
import { useTeamStore } from '../zustand/team-store';

interface TableRowProps {
  teamId: string;
}

function TableRow({ teamId }: TableRowProps) {
  const team = useTeamStore((state) => state.teams.get(teamId));

  if (team) {
    return <Link to={`/game/team/${teamId}`}>{team.name}</Link>;
  }
}

export default TableRow;

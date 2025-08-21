import { Link, useParams } from 'react-router-dom';
import { useTeamStore } from '../../../zustand/team-store';

function Team() {
  const teamId = useParams<{ teamId: string }>().teamId;
  if (teamId) {
    const selectedTeam = useTeamStore((state) => state.teams.get(teamId));
    if (selectedTeam) {
      return (
        <div className="flex h-full justify-center items-center">
          <Link to={`/game/squad/${teamId}`}>{selectedTeam.name}</Link>
        </div>
      );
    }
  }
}

export default Team;

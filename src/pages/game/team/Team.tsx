import { useParams } from 'react-router-dom';
import { useTeamStore } from '../../../zustand/team-store';

function Team() {
  const teams = useTeamStore((state) => state.teams);
  const teamId = useParams<{ teamId: string }>().teamId;
  if (teamId) {
    const selectedTeam = teams.get(teamId);
    if (selectedTeam) {
      return (
        <div className="mt-30">
          <div>{selectedTeam.name}</div>
        </div>
      );
    }
  }
}

export default Team;

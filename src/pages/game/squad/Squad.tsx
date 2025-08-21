import { useParams } from 'react-router-dom';
import { useTeamStore } from '../../../zustand/team-store';
import SquadPlayerCard from './components/SquadPlayerCard';

function Squad() {
  const teamId = useParams<{ teamId: string }>().teamId;
  if (teamId) {
    const selectedTeam = useTeamStore((state) => state.teams.get(teamId));
    if (selectedTeam) {
      return (
        <div className="mt-30 p-5">
          <div className="grid grid-cols-1 gap-5 text-center md:grid-cols-2 lg:grid-cols-4">
            {selectedTeam.playerIds.map((playerId, index) => (
              <SquadPlayerCard playerId={playerId} key={index} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Squad;

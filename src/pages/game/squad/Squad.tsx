import { Link, useParams } from 'react-router-dom';
import { useTeamStore } from '../../../zustand/team-store';
import { usePlayerStore } from '../../../zustand/player-store';

function Squad() {
  const players = usePlayerStore((state) => state.players);
  const teams = useTeamStore((state) => state.teams);
  const teamId = useParams<{ teamId: string }>().teamId;
  if (teamId) {
    const selectedTeam = teams.get(teamId);
    if (selectedTeam) {
      return (
        <div className="mt-30 p-5">
          <div className="grid grid-cols-1 gap-5 text-center md:grid-cols-2 lg:grid-cols-4">
            {selectedTeam.playerIds.map((playerId, index) => (
              <Link
                to={`/game/player/${players.get(playerId)?.id}`}
                key={index}
                className="p-10 shadow-lg rounded-md hover:-translate-y-1 duration-200 cursor-pointer"
              >
                {players.get(playerId)?.name}
              </Link>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Squad;

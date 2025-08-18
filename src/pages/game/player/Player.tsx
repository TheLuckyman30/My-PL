import { useParams } from 'react-router-dom';
import { usePlayerStore } from '../../../zustand/player-store';

function Player() {
  const players = usePlayerStore((state) => state.players);
  const playerId = useParams<{ playerId: string }>().playerId;
  if (playerId) {
    const selectedPlayer = players.get(playerId);
    if (selectedPlayer) {
      return (
        <div className="mt-30">
          <div>{selectedPlayer.name}</div>
        </div>
      );
    }
  }
}

export default Player;

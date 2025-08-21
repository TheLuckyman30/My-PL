import { Link } from 'react-router-dom';
import { usePlayerStore } from '../../../../zustand/player-store';

interface SquadPlayerCardProps {
  playerId: string;
}

function SquadPlayerCard({ playerId }: SquadPlayerCardProps) {
  const player = usePlayerStore((state) => state.players.get(playerId));

  if (player) {
    return (
      <Link
        to={`/game/player/${playerId}`}
        className="p-10 shadow-lg rounded-md hover:-translate-y-1 duration-200 cursor-pointer"
      >
        {player.name}
      </Link>
    );
  }
}

export default SquadPlayerCard;

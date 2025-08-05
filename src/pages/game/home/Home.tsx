import { usePlayerStore } from '../../../zustand/player-store';

function Home() {
  const player = usePlayerStore((state) => state.player);

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="grid grid-rows-2">
        <div className="text-center self-center text-4xl font-bold">
          {player?.selectedTeam.name}
        </div>
        <div className="text-center self-center text-4xl font-bold">[Form/Upcoming Matches]</div>
      </div>
      <div className="text-center self-center text-4xl font-bold">[League Info]</div>
    </div>
  );
}

export default Home;

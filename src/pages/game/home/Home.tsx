import { Link } from 'react-router-dom';
import { useUserStore } from '../../../zustand/user-store';

function Home() {
  const user = useUserStore((state) => state.user);
  if (user) {
    return (
      <div className="grid grid-cols-2 h-full">
        <div className="grid grid-rows-2">
          <div className="text-center self-center text-4xl font-bold">[Team Info]</div>
          <div className="text-center self-center text-4xl font-bold">[Form/Upcoming Matches]</div>
        </div>
        <Link
          to={`/game/league/${user.selectedTeam.league.id}`}
          className="text-center self-center text-4xl font-bold"
        >
          [League Info]
        </Link>
      </div>
    );
  }
}

export default Home;

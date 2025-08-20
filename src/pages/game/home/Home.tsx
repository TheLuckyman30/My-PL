import { useUserStore } from '../../../zustand/user-store';
import LeagueTable from '../../../components/LeagueTable';

function Home() {
  const user = useUserStore((state) => state.user);
  if (user) {
    return (
      <div className="grid grid-cols-2 h-full">
        <div className="grid grid-rows-2">
          <div className="text-center self-center text-4xl font-bold">[Team Info]</div>
          <div className="text-center self-center text-4xl font-bold">[Form/Upcoming Matches]</div>
        </div>
        <LeagueTable league={user.selectedTeam.league} />
      </div>
    );
  }
}

export default Home;

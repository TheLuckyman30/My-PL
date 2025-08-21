import { useUserStore } from '../../../zustand/user-store';
import LeagueTable from '../../../components/LeagueTable';
import { useTeamStore } from '../../../zustand/team-store';
import { Link } from 'react-router-dom';

function Home() {
  const user = useUserStore((state) => state.user);
  const selectedTeam = useTeamStore((state) => state.teams.get(user.selectedTeamId));

  if (selectedTeam) {
    return (
      <div className="grid grid-cols-2 h-full">
        <div className="grid grid-rows-2">
          <Link
            to={`/game/team/${selectedTeam.id}`}
            className="text-center self-center text-4xl font-bold"
          >
            {selectedTeam.name}
          </Link>
          <div className="text-center self-center text-4xl font-bold">[Form/Upcoming Matches]</div>
        </div>
        <LeagueTable leagueId={selectedTeam.leagueId} />
      </div>
    );
  }
}

export default Home;

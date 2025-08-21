import { useUserStore } from '../../../zustand/user-store';
import LeagueTable from '../../../components/LeagueTable';
import { useTeamStore } from '../../../zustand/team-store';

function Home() {
  const user = useUserStore((state) => state.user);
  const teams = useTeamStore((state) => state.teams);

  if (user) {
    const selectedTeam = teams.get(user.selectedTeamId);
    if (selectedTeam) {
      return (
        <div className="grid grid-cols-2 h-full">
          <div className="grid grid-rows-2">
            <div className="text-center self-center text-4xl font-bold">[Team Info]</div>
            <div className="text-center self-center text-4xl font-bold">
              [Form/Upcoming Matches]
            </div>
          </div>
          <LeagueTable leagueId={selectedTeam.leagueId} />
        </div>
      );
    }
  }
}

export default Home;

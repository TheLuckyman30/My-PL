import { useParams } from 'react-router-dom';
import { useLeagueStore } from '../../../zustand/league-store';

function League() {
  const leagueId = useParams<{ leagueId: string }>().leagueId;
  if (leagueId) {
    const selectedLeague = useLeagueStore((state) => state.leagues.get(leagueId));
    if (selectedLeague) {
      return (
        <div className="flex h-full justify-center items-center">
          <div>{selectedLeague.name}</div>
        </div>
      );
    }
  }
}

export default League;

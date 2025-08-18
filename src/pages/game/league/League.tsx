import { useParams } from 'react-router-dom';
import { useLeagueStore } from '../../../zustand/league-store';

function League() {
  const leagues = useLeagueStore((state) => state.leagues);
  const leagueId = useParams<{ leagueId: string }>().leagueId;
  if (leagueId) {
    const selectedLeague = leagues.get(leagueId);
    if (selectedLeague) {
      return (
        <div className="mt-30">
          <div>{selectedLeague.name}</div>
        </div>
      );
    }
  }
}

export default League;

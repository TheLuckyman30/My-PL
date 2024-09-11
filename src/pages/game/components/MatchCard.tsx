import { Match } from '../../../utils/classes/Match';
import { Team } from '../../../utils/classes/Team';
import { useEffect, useState } from 'react';
import '../../../css/components/MatchCard.css';
import { matchSim } from '../../../utils/helpers/MatchSimulation';

interface MatchProps {
  match: Match;
  setTeams: (setTeams: Team[]) => void;
}

function MatchCard({ match, setTeams }: MatchProps) {
  const [didSim, setDidSim] = useState<boolean>(match.isDone);
  const [homeGoals, setHomeGoals] = useState<number>(match.homeScore);
  const [awayGoals, setAwayGoals] = useState<number>(match.awayScore);

  useEffect(() => {
    setDidSim(match.isDone);
    setHomeGoals(match.homeScore);
    setAwayGoals(match.awayScore);
  }, [match.isDone]);

  function simMatch() {
    matchSim(match, setTeams, setDidSim, setHomeGoals, setAwayGoals);
  }

  return (
    <tr>
      <td style={{ width: '46rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <img src={match.homeTeam.logoURL}></img>
          </div>
          <div>{match.homeTeam.name}</div>
        </div>
      </td>
      <td style={{ whiteSpace: 'nowrap' }}>
        <div
          style={{ display: 'flex', width: 'fit-content' }}
          className={didSim ? 'disabled-match-button' : 'match-button'}
          onClick={simMatch}
        >
          {homeGoals} - {awayGoals}
        </div>
      </td>
      <td>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'right',
          }}
        >
          <div>{match.awayTeam.name}</div>
          <img src={match.awayTeam.logoURL}></img>
        </div>
      </td>
    </tr>
  );
}

export default MatchCard;

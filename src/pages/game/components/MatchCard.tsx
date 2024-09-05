import { Match } from '../../../utils/classes/Match';
import { matchSim } from '../../../utils/helpers/MatchSimulation';
import { Team } from '../../../utils/classes/Team';
import { useEffect, useState } from 'react';
import '../../../css/components/MatchCard.css';

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
      <td>
        <img src={match.homeTeam.logoURL}></img>
      </td>
      <td style={{ width: '35rem' }}>{match.homeTeam.name}</td>
      <td style={{ whiteSpace: 'nowrap' }}>
        <div
          style={{ display: 'flex', width: 'fit-content' }}
          className={didSim ? 'disabled-match-button' : 'match-button'}
          onClick={simMatch}
        >
          {homeGoals} - {awayGoals}
        </div>
      </td>
      <td style={{ width: '35rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'right',
          }}
        >
          {match.awayTeam.name}
        </div>
      </td>
      <td>
        <img src={match.awayTeam.logoURL}></img>
      </td>
    </tr>
  );
}

export default MatchCard;

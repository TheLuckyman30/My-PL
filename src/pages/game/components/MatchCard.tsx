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
      <td>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'right',
          }}
        >
          <div>
            {match.homeTeam.name.length <= 18
              ? match.homeTeam.name
              : match.homeTeam.shortName}
          </div>
          <div>
            <img
              style={{ height: '75px', width: '75px' }}
              src={match.homeTeam.logoURL}
            ></img>
          </div>
        </div>
      </td>
      <td style={{ whiteSpace: 'nowrap' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              display: 'flex',
              width: 'fit-content',
            }}
            className={didSim ? 'disabled-match-button' : 'match-button'}
            onClick={simMatch}
          >
            {homeGoals} - {awayGoals}
          </div>
        </div>
      </td>
      <td>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left ',
          }}
        >
          <img
            style={{ height: '75px', width: '75px' }}
            src={match.awayTeam.logoURL}
          ></img>
          <div>
            {match.awayTeam.name.length <= 18
              ? match.awayTeam.name
              : match.awayTeam.shortName}
          </div>
        </div>
      </td>
    </tr>
  );
}

export default MatchCard;

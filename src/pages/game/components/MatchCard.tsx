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
    <div className="table-container">
      <div className="team justify-right">
        <div>
          {match.homeTeam.name.length <= 18
            ? match.homeTeam.name
            : match.homeTeam.shortName}
        </div>
        <div>
          <img src={match.homeTeam.logoURL}></img>
        </div>
      </div>
      <div
        onClick={simMatch}
        className={!didSim ? 'match-button' : 'disabled-match-button'}
      >
        {homeGoals} - {awayGoals}
      </div>
      <div className="team">
        <div>
          <img src={match.awayTeam.logoURL}></img>
        </div>
        <div>
          {match.awayTeam.name.length <= 18
            ? match.awayTeam.name
            : match.awayTeam.shortName}
        </div>
      </div>
    </div>
  );
}

export default MatchCard;

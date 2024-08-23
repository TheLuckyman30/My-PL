import { Button } from '@mui/material';
import { Match } from '../../../utils/classes/Match';
import { matchSim } from '../../../utils/helpers/MatchSimulation';
import { Team } from '../../../utils/classes/Team';
import { useState } from 'react';
import '../../../css/components/MatchCard.css';

interface MatchProps {
  match: Match;
  setTeams: (setTeams: Team[]) => void;
}

function MatchCard({ match, setTeams }: MatchProps) {
  const [didSim, setDidSim] = useState<boolean>(match.isDone);
  const [homeGoals, setHomeGoals] = useState<number>(match.homeScore);
  const [awayGoals, setAwayGoals] = useState<number>(match.awayScore);
  return (
    <div className="card-container">
      <div className="card-date">
        {match.date?.currentMonth +
          ' ' +
          match.date?.currentDay +
          ', ' +
          match.date?.currentYear}
      </div>
      <div className="card-content">
        <img
          src={match.homeTeam.logoURL}
          className="card-margin"
          style={{ height: '32px', width: '32px' }}
        ></img>
        <div className="card-margin">
          {'  ' + homeGoals + '  -  ' + awayGoals + '  '}
        </div>
        <img
          src={match.awayTeam.logoURL}
          style={{ height: '32px', width: '32px' }}
        ></img>
      </div>
    </div>
  );
}

export default MatchCard;

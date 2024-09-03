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
    <tr>
      <td>
        <img src={match.homeTeam.logoURL}></img>
      </td>
      <td style={{ width: '30rem' }}>{match.homeTeam.name}</td>
      <td>{homeGoals}</td>
      <td>-</td>
      <td style={{ width: '5rem' }}>{awayGoals}</td>
      <td>{match.awayTeam.name}</td>
      <td>
        <img src={match.awayTeam.logoURL}></img>
      </td>
    </tr>
  );
}

export default MatchCard;

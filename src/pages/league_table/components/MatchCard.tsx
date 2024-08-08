import { Button } from '@mui/material';
import { Match } from '../../../utils/classes/Match';
import { matchSim } from '../../../utils/helpers/MatchSimulation';
import { Team } from '../../../utils/classes/Team';
import { useState } from 'react';

interface MatchProps {
  match: Match;
  setTeams: (setTeams: Team[]) => void;
}

function MatchCard({ match, setTeams }: MatchProps) {
  const [didSim, setDidSim] = useState<boolean>(false);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '15vh',
        width: '15vw',
        background: 'linear-gradient(120deg, #f2f2f2, #efefef)',
        borderRadius: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '30px',
        fontFamily: 'monospace',
      }}
    >
      <div style={{ fontSize: '15px' }}>
        {match.date?.currentMonth +
          ' ' +
          match.date?.currentDay +
          ', ' +
          match.date?.currentYear}
      </div>
      {match.homeTeam.shortName}
      {'  0  -  0  '}
      {match.awayTeam.shortName}
      <Button
        onClick={() => matchSim(match, setTeams, setDidSim)}
        disabled={didSim}
      >
        Sim
      </Button>
    </div>
  );
}

export default MatchCard;

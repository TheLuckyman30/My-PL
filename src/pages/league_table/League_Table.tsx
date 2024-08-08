import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Teams from './components/Teams';
import '../../css/pages/League_Table.css';
import { Team } from '../../utils/classes/Team';
import {
  allMatches,
  allTeams,
  generateAll,
} from '../../utils/helpers/League_Generation';
import { Match } from '../../utils/classes/Match';
import MatchesList from './components/MatchesList';

function LeagueTable() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [openMatchList, setOpenMatchList] = useState<boolean>(true);

  useEffect(() => {
    generateAll();
    setTeams(allTeams);
    setMatches(allMatches);
  }, []);

  return (
    <div className="lt-page">
      <Button variant="contained" href="/">
        Home
      </Button>
      <div className="lt-table">
        <div className="lt-table-header">
          <div>POS</div>
          <div>CLUB</div>
          <div>PL</div>
          <div>W</div>
          <div>D</div>
          <div>L</div>
          <div>GD</div>
          <div>PTS</div>
        </div>
        {teams.map((team: Team, index: number) => (
          <Teams key={index} team={team}></Teams>
        ))}
      </div>
      <MatchesList
        matches={matches}
        openMatchList={openMatchList}
        setTeams={setTeams}
      ></MatchesList>
    </div>
  );
}

export default LeagueTable;

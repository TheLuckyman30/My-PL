import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
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
  const [openMatchList, setOpenMatchList] = useState<boolean>(false);

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
      <Button onClick={() => setOpenMatchList(true)}>Open Match List</Button>
      <MatchesList
        matches={matches}
        openMatchList={openMatchList}
        setTeams={setTeams}
        setOpenMatchList={setOpenMatchList}
      ></MatchesList>
    </div>
  );
}

export default LeagueTable;

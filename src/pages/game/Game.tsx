import { useEffect, useState } from 'react';
import '../../css/pages/Game.css';
import { Team } from '../../utils/classes/Team';
import {
  allMatches,
  allTeams,
  generateAll,
  season,
} from '../../utils/helpers/League_Generation';
import { Match } from '../../utils/classes/Match';
import LeagueTable from './components/League_Table';
import NavBar from './components/NavBar';
import { Date } from '../../utils/classes/Date';

function Game() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [openMatchList, setOpenMatchList] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    generateAll();
    setTeams(allTeams);
    setMatches(allMatches);
    setCurrentDate(season.startDate as Date | null);
  }, []);

  return (
    <div className="game-page">
      <NavBar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      ></NavBar>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <LeagueTable teams={teams}></LeagueTable>
      </div>
    </div>
  );
}

export default Game;

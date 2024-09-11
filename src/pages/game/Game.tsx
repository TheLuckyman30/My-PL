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
import MatchSim from './components/MatchSim';

function Game() {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [teams, setTeams] = useState<Team[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
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
        setCurrentSection={setCurrentSection}
      ></NavBar>
      <div className="game-section">
        {currentSection === 0 && <LeagueTable teams={teams}></LeagueTable>}
        {currentSection === 3 && (
          <MatchSim matches={matches} setTeams={setTeams}></MatchSim>
        )}
      </div>
    </div>
  );
}

export default Game;

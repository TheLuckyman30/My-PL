import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import Teams from './components/Teams';
import '../../css/pages/League_Table.css';
import { Team } from '../../utils/classes/Team';
import { allTeams, generateAll } from '../../utils/helpers/League_Generation';
import Matches from './components/Matches';

function LeagueTable() {
  generateAll();
  const [teams, setTeams] = useState<Team[]>(allTeams);
  const [selectedTeam, setSelectedTeam] = useState<Team>(allTeams[0]);

  function selectTeam(event: SelectChangeEvent) {
    const newTeam = teams.find((team) => team.name === event.target.value);
    if (newTeam) {
      setSelectedTeam(newTeam);
    }
  }

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
      <Select onChange={selectTeam} value={selectedTeam.name}>
        {teams.map((team: Team) => (
          <MenuItem value={team.name}>{team.name}</MenuItem>
        ))}
      </Select>
      <Matches selectedTeam={selectedTeam}></Matches>
    </div>
  );
}

export default LeagueTable;

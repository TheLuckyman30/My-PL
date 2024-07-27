import {
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import { intitalTeams, Team } from './League_Table_Classes';
import Teams from './components/Teams';
import Matches from './components/Matches';

function LeagueTable() {
  const [teams, setTeams] = useState<Team[]>(teamSort(intitalTeams));
  const [selectedTeam, setSelectedTeam] = useState<Team>(intitalTeams[0]);

  function changeSelectedTeam(event: SelectChangeEvent) {
    const foundTeam = teams.find(
      (team: Team) => team.name === event.target.value
    );
    if (foundTeam) {
      setSelectedTeam(foundTeam);
    }
  }

  function changePoints(change: number) {
    const newTeams = teams.map((team: Team) =>
      team.name === selectedTeam.name
        ? new Team(
            team.name,
            team.goalsFor,
            team.goalsAgainst,
            team.goalDiff,
            team.points + change,
            team.mathches
          )
        : team
    );
    setTeams(teamSort(newTeams));
  }

  function teamSort(teams: Team[]): Team[] {
    return teams.sort((a, b) => {
      if (b.points !== a.points) {
        return b.points - a.points;
      }
      if (b.goalDiff !== a.goalDiff) {
        return b.goalDiff - a.goalDiff;
      }
      if (b.goalsFor !== a.goalsFor) {
        return b.goalsFor - a.goalsFor;
      }
      if (b.goalsAgainst !== a.goalsAgainst) {
        return b.goalsAgainst - a.goalsAgainst;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        width: '100vw',
        flexDirection: 'column',
      }}
    >
      <Button variant="contained" href="/">
        Home
      </Button>
      <div>
        {teams.map((team: Team, index: number) => (
          <Teams key={index} team={team}></Teams>
        ))}
      </div>
      <div style={{ display: 'flex', margin: '10px' }}>
        <FormControl>
          <Select value={selectedTeam.name} onChange={changeSelectedTeam}>
            {teams.map((team: Team) => (
              <MenuItem key={team.name} value={team.name}>
                {team.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button onClick={() => changePoints(1)}>Add</Button>
        <Button onClick={() => changePoints(-1)}>Subtract</Button>
        <Matches
          selectedTeam={selectedTeam}
          teams={teams}
          setTeams={setTeams}
        ></Matches>
      </div>
    </div>
  );
}

export default LeagueTable;

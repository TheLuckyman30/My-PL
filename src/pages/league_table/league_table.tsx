import {
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

interface Team {
  name: string;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

const intitalTeams: Team[] = [
  { name: 'Totttenham Hotspur', goalsFor: 0, goalsAgainst: 0, points: 0 },
  { name: 'Liverpool', goalsFor: 0, goalsAgainst: 0, points: 0 },
  { name: 'Manchester United', goalsFor: 0, goalsAgainst: 0, points: 0 },
  { name: 'Manchester City', goalsFor: 0, goalsAgainst: 0, points: 0 },
  { name: 'Chelsea', goalsFor: 0, goalsAgainst: 0, points: 0 },
  { name: 'Arsenal', goalsFor: 0, goalsAgainst: 0, points: 0 },
];

function Team({ team }: { team: Team }) {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: '50vw',
          backgroundColor: 'tan',
          borderRadius: '5px',
          boxShadow: '5px 5px gray',
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ margin: '10px' }}>{team.name}</div>
        <div style={{ margin: '10px' }}>GF: {team.goalsFor}</div>
        <div style={{ margin: '10px' }}>GA: {team.goalsAgainst}</div>
        <div style={{ margin: '10px' }}>
          GD: {team.goalsFor - team.goalsAgainst}
        </div>
        <div style={{ margin: '10px' }}>PTS: {team.points}</div>
      </div>
    </div>
  );
}

function LeagueTable() {
  const [teams, setTeams] = useState<Team[]>(intitalTeams);
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
        ? { ...team, points: team.points + change }
        : { ...team }
    );
    setTeams(newTeams.sort((a, b) => b.points - a.points));
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
          <Team key={index} team={team}></Team>
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
      </div>
    </div>
  );
}

export default LeagueTable;

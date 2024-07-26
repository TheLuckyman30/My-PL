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
  goalDiff: number;
  points: number;
}

const intitalTeams: Team[] = [
  {
    name: 'Totttenham Hotspur',
    goalsFor: 0,
    goalsAgainst: 0,
    goalDiff: 0,
    points: 0,
  },
  { name: 'Liverpool', goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
  {
    name: 'Manchester United',
    goalsFor: 0,
    goalsAgainst: 0,
    goalDiff: 0,
    points: 0,
  },
  {
    name: 'Manchester City',
    goalsFor: 0,
    goalsAgainst: 0,
    goalDiff: 0,
    points: 0,
  },
  { name: 'Chelsea', goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
  { name: 'Arsenal', goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
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
        <div style={{ margin: '10px' }}>GD: {team.goalDiff}</div>
        <div style={{ margin: '10px' }}>PTS: {team.points}</div>
      </div>
    </div>
  );
}

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
        ? { ...team, points: team.points + change }
        : { ...team }
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

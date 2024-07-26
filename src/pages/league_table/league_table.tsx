import {
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

class Team {
  public name: string;
  public goalsFor: number;
  public goalsAgainst: number;
  public goalDiff: number;
  public points: number;
  public Mathches: Match[];

  constructor(name: string) {
    this.name = name;
    this.goalsFor = 0;
    this.goalsAgainst = 0;
    this.goalDiff = 0;
    this.points = 0;
    this.Mathches = [];
  }
}

class Match {
  public homeTeam: Team;
  public awayTeam: Team;

  constructor(homeTeam: Team, awayTeam: Team) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
  }
}

const intitalTeams: Team[] = [
  new Team('Tottenham Hotspur'),
  new Team('Liverpool'),
  new Team('Machester United'),
  new Team('Manchester City'),
  new Team('Chelsea'),
  new Team('Arsenal'),
];

function Teams({ team }: { team: Team }) {
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
      </div>
    </div>
  );
}

export default LeagueTable;

import { Button } from '@mui/material';
import { useState } from 'react';
import { intitalTeams, Team } from './League_Table_Classes';
import Teams from './components/Teams';

function LeagueTable() {
  const [teams, setTeams] = useState<Team[]>(teamSort(intitalTeams));

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
    </div>
  );
}

export default LeagueTable;

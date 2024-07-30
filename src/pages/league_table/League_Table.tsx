import { Button } from '@mui/material';
import { useState } from 'react';
import Teams from './components/Teams';
import '../../css/pages/League_Table.css';
import { intitalTeams, Team } from '../../classes/Team';

function LeagueTable() {
  const [teams, setTeams] = useState<Team[]>(teamSort(intitalTeams));

  function teamSort(teams: Team[]): Team[] {
    const sortedTeams: Team[] = teams.sort((a, b) => {
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
        return a.shortName.localeCompare(b.shortName);
      }
    });
    sortedTeams.forEach(
      (team: Team, index: number) => (team.position = index + 1)
    );
    return sortedTeams;
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
    </div>
  );
}

export default LeagueTable;

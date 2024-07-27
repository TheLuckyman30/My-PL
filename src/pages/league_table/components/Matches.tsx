import { Button } from '@mui/material';
import { Match, Team } from '../League_Table_Classes';
import { useState } from 'react';

interface MatchProps {
  selectedTeam: Team;
  teams: Team[];
  setTeams: (newTeams: Team[]) => void;
}

function Matches({ selectedTeam, teams, setTeams }: MatchProps) {
  const [matches, setMatches] = useState<Match[]>([]);
  function generateMatches() {
    let newMatches: Match[] = [];
    for (let i = 0; i < teams.length; i++) {
      for (let j = 0; j < teams.length; j++) {
        if (teams[i].name !== teams[j].name) {
          newMatches = [...newMatches, new Match(teams[i], teams[j])];
        }
      }
      assignMatches(newMatches);
      setMatches(newMatches);
    }
  }

  function assignMatches(listOfMacthes: Match[]) {
    for (let i = 0; i < teams.length; i++) {
      const teamName = teams[i].name;
      teams[i].mathches = listOfMacthes.filter(
        (match: Match) =>
          match.homeTeam.name === teamName || match.awayTeam.name === teamName
      );
    }
  }

  return (
    <div>
      <Button onClick={generateMatches}>Generate Matches</Button>
      <div>
        {selectedTeam.mathches &&
          selectedTeam.mathches.map((match: Match) => (
            <div>{match.homeTeam.name + ' vs ' + match.awayTeam.name}</div>
          ))}
      </div>
    </div>
  );
}

export default Matches;

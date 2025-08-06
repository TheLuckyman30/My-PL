import { League } from './interfaces/league';
import { Team } from './interfaces/team';
import { Player } from './interfaces/player';
import leagues from '../data/temp-leagues.json';
import teams from '../data/temp-teams.json';
import players from '../data/temp-players.json';

interface LeagueJSON {
  id: string;
  name: string;
}

interface TeamJSON {
  id: string;
  name: string;
  shortName: string;
  threeLetterName: string;
  leagueId: string;
}

interface PlayerJSON {
  name: string;
  teamId: string;
}

export function parseJSONData() {
  const allLeagues: LeagueJSON[] = leagues;
  const allTeams: TeamJSON[] = teams;
  const allPlayers: PlayerJSON[] = players;

  const newLeagues: League[] = [];
  const newTeams: Team[] = [];
  const newPlayers: Player[] = [];

  allLeagues.forEach((league) => {
    newLeagues.push({ id: league.id, name: league.name, teams: [] });
  });

  allTeams.forEach((team) => {
    const league = newLeagues.find((league) => league.id === team.leagueId);
    if (league) {
      newTeams.push({
        id: team.id,
        name: team.name,
        shortName: team.shortName,
        threeLetterName: team.threeLetterName,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        wins: 0,
        draws: 0,
        loses: 0,
        leaguePosition: 0,
        league: league,
        players: [],
      });
    }

    allPlayers.forEach((player) => {
      const team = newTeams.find((team) => team.id === player.teamId);
      if (team) {
        newPlayers.push({ name: player.name, team: team });
      }
    });
  });
}

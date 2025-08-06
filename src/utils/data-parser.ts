import { useLeagueStore } from '../zustand/league-store';
import { useTeamStore } from '../zustand/team-store';
import { usePlayerStore } from '../zustand/player-store';
import { League } from './interfaces/league';
import { Team } from './interfaces/team';
import { Player } from './interfaces/player';
import data from '../data/temp-database.json';

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

interface DataJSON {
  leagues: LeagueJSON[];
  teams: TeamJSON[];
  players: PlayerJSON[];
}

export function parseJSONData() {
  const setLeagues = useLeagueStore((state) => state.setLeagues);
  const setTeams = useTeamStore((state) => state.setTeams);
  const setPlayers = usePlayerStore((state) => state.setPlayers);

  const importedData: DataJSON = data;
  const importedLeagues = importedData.leagues;
  const importedTeams = importedData.teams;
  const importedPlayers = importedData.players;

  const newLeagues: League[] = [];
  const newTeams: Team[] = [];
  const newPlayers: Player[] = [];

  importedLeagues.forEach((league) => {
    const newLeague: League = { id: league.id, name: league.name, teams: [] };
    newLeagues.push(newLeague);
  });

  importedTeams.forEach((team) => {
    const teamsLeague = newLeagues.find((league) => league.id === team.leagueId);
    if (teamsLeague) {
      const newTeam: Team = {
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
        league: teamsLeague,
        players: [],
      };
      newTeams.push(newTeam);
      teamsLeague.teams.push(newTeam);
    }
  });

  importedPlayers.forEach((player) => {
    const playersTeam = newTeams.find((team) => team.id === player.teamId);
    if (playersTeam) {
      const newPlayer: Player = { name: player.name, team: playersTeam };
      newPlayers.push(newPlayer);
      playersTeam.players.push(newPlayer);
    }
  });

  setLeagues(newLeagues);
  setTeams(newTeams);
  setPlayers(newPlayers);
}

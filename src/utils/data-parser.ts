import { useLeagueStore } from '../zustand/league-store';
import { useTeamStore } from '../zustand/team-store';
import { usePlayerStore } from '../zustand/player-store';
import { League } from './interfaces/league';
import { Team } from './interfaces/team';
import { Player } from './interfaces/player';
import data from '../data/temp-database.json';

/**
 * This is the inital data parser to generate league, team, and player objects in the game
 */
export function useParseJSONData() {
  const setLeagues = useLeagueStore((state) => state.setLeagues);
  const setTeams = useTeamStore((state) => state.setTeams);
  const setPlayers = usePlayerStore((state) => state.setPlayers);

  const { leagues, teams, players } = data;

  const newLeagues: League[] = [];
  const newTeams: Team[] = [];
  const newPlayers: Player[] = [];

  leagues.forEach((league) => {
    const newLeague: League = { id: league.id, name: league.name, teams: [] };
    newLeagues.push(newLeague);
  });

  teams.forEach((team) => {
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

  players.forEach((player) => {
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

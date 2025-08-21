import { useLeagueStore } from '../zustand/league-store';
import { useTeamStore } from '../zustand/team-store';
import { usePlayerStore } from '../zustand/player-store';
import { League } from './interfaces/league';
import { Team } from './interfaces/team';
import { Player } from './interfaces/player';
import { leagues, teams, players } from '../data/temp-database.json';
import { useEffect } from 'react';

/**
 * This is the inital data parser to generate league, team, and player objects in the game
 */
export function useParseJSONData() {
  const { leagues: storedLeagues, setLeagues } = useLeagueStore();
  const { teams: storedTeams, setTeams } = useTeamStore();
  const { players: storedPlayers, setPlayers } = usePlayerStore();

  useEffect(() => {
    leagues.forEach((league) => {
      const newLeague: League = {
        id: league.id,
        name: league.name,
        teamIds: [],
      };
      storedLeagues.set(newLeague.id, newLeague);
    });

    teams.forEach((team) => {
      const teamsLeague = storedLeagues.get(team.leagueId);
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
          leagueId: team.leagueId,
          playerIds: [],
        };
        storedTeams.set(newTeam.id, newTeam);
        teamsLeague.teamIds.push(newTeam.id);
      }
    });

    players.forEach((player) => {
      const playersTeam = storedTeams.get(player.teamId);
      if (playersTeam) {
        const newPlayer: Player = { id: player.id, name: player.name, teamId: player.teamId };
        storedPlayers.set(newPlayer.id, newPlayer);
        playersTeam.playerIds.push(newPlayer.id);
      }
    });

    setLeagues(storedLeagues);
    setTeams(storedTeams);
    setPlayers(storedPlayers);
  }, []);
}

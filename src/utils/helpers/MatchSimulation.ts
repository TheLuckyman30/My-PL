import { Match } from "../classes/Match";
import { Team } from "../classes/Team";
import { allTeams, teamSort } from "./League_Generation";

export function matchSim (match: Match, setTeams: (newTeams: Team[]) => void, setDidSim: (didSim: boolean) => void) {
    const totalTeamStrength: number = match.homeTeam.teamStrength + match.awayTeam.teamStrength;
    const homeTeamOdds: number = match.homeTeam.teamStrength / totalTeamStrength;
    const awayTeamOdds: number = match.awayTeam.teamStrength / totalTeamStrength;

    const rand: number = Math.random();

    if (rand <= homeTeamOdds && rand > awayTeamOdds) {
        match.homeScore = 1;
        match.winningTeam = match.homeTeam;
        match.losingTeam = match.awayTeam;
    }
    else {
        match.awayScore = 1;
        match.winningTeam = match.awayTeam;
        match.losingTeam = match.homeTeam;
    }
    match.winningTeam.points += 3;
    setDidSim(true);
    setTeams(teamSort(allTeams));
}
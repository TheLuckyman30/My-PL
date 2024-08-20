import { Match } from "../classes/Match";
import { Team } from "../classes/Team";
import { allTeams, teamSort } from "./League_Generation";

export function matchSim (match: Match, setTeams: (newTeams: Team[]) => void, setDidSim: (didSim: boolean) => void, setHomeGoals: (newGoals: number) => void, setAwayGoals: (newGoals: number) => void) {
    const totalTeamStrength: number = match.homeTeam.teamStrength + match.awayTeam.teamStrength;
    const homeTeamOdds: number = (match.homeTeam.teamStrength / totalTeamStrength) * .05;
    const awayTeamOdds: number = (match.awayTeam.teamStrength / totalTeamStrength) * .05;
    const matchLength: number = 90;

    for (let i = 1; i <= matchLength; i++) {
        let homeChanceCreated: boolean = false;
        let awayChanceCreated: boolean = true;
        let canScore: boolean = false;
        let canConcede: boolean = false;

        let rand: number = Math.random();
        if (rand > awayTeamOdds && rand <= homeTeamOdds) {
            homeChanceCreated = true;
        }
        else if (rand <= awayTeamOdds) {
            awayChanceCreated = true;
        }

        if (homeChanceCreated) {
            rand = Math.random();
            if (rand <= homeTeamOdds) {
                canScore = true;
            }

            rand = Math.random();
            if (rand >= awayTeamOdds) {
                canConcede = true;
            }

            if (canScore && canConcede) {
                match.homeScore += 1;
            }
        }
        if (awayChanceCreated) {
            rand = Math.random();
            if (rand <= awayTeamOdds) {
                canScore = true;
            }

            rand = Math.random();
            if (rand >= homeTeamOdds) {
                canConcede = true;
            }

            if (canScore && canConcede) {
                match.awayScore += 1;
            }
        }
    }
    if (match.homeScore > match.awayScore) {
        match.winningTeam = match.homeTeam;
        match.losingTeam = match.awayTeam;
        match.winningTeam.goalsFor += match.homeScore;
        match.losingTeam.goalsFor += match.awayScore;
        match.winningTeam.goalsAgainst += match.awayScore;
        match.losingTeam.goalsAgainst += match.homeScore;
    }
    else if (match.awayScore > match.homeScore) {
        match.winningTeam = match.awayTeam;
        match.losingTeam = match.homeTeam;
        match.winningTeam.goalsFor += match.awayScore;
        match.losingTeam.goalsFor += match.homeScore;
        match.winningTeam.goalsAgainst += match.homeScore;
        match.losingTeam.goalsAgainst += match.awayScore;
    }
    else {
        match.homeTeam.goalsFor += match.homeScore;
        match.awayTeam.goalsFor += match.awayScore;
        match.homeTeam.goalsAgainst += match.awayScore;
        match.awayTeam.goalsAgainst += match.homeScore;
    }

    if (match.winningTeam && match.losingTeam) {
        match.winningTeam.points += 3;
        match.winningTeam.won += 1;
        match.losingTeam.lost += 1;
    }
    else {
        match.homeTeam.points += 1;
        match.awayTeam.points += 1;
        match.homeTeam.drawn += 1;
        match.awayTeam.drawn += 1;
    }

    match.homeTeam.goalDiff = match.homeTeam.goalsFor - match.homeTeam.goalsAgainst;
    match.awayTeam.goalDiff = match.awayTeam.goalsFor - match.awayTeam.goalsAgainst;
    match.homeTeam.played += 1;
    match.awayTeam.played += 1;
    match.isDone = true;
    console.log(match.homeTeam.goalsFor);
    console.log(match.awayTeam.goalsFor);
    
    setHomeGoals(match.homeScore);
    setAwayGoals(match.awayScore);
    setDidSim(true);
    setTeams(teamSort(allTeams));
}
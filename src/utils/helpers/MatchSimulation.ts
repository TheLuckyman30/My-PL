import { Match } from "../classes/Match";
import { Team } from "../classes/Team";
import { allTeams } from "./League_Generation";
import { teamSort } from "./TeamSort";

export function matchSim (match: Match, setTeams: (newTeams: Team[]) => void, setDidSim: (didSim: boolean) => void, setHomeGoals: (newGoals: number) => void, setAwayGoals: (newGoals: number) => void) {
    const totalTeamStrength: number = match.homeTeam.teamStrength + match.awayTeam.teamStrength;
    const homeTeamOdds: number = (match.homeTeam.teamStrength / totalTeamStrength) ;
    const awayTeamOdds: number = (match.awayTeam.teamStrength / totalTeamStrength) ;
    const matchLength: number = 90;

    for (let i = 1; i <= matchLength; i++) {
        let rand: number = Math.random();
        if (rand <= 0.1 ) {
            let homeChanceCreated: boolean = false;
            let awayChanceCreated: boolean = false;
            let canScore: boolean = false;
            let canConcede: boolean = false;

            rand = Math.random();
            if (rand <= homeTeamOdds) {
                homeChanceCreated = true;
            }
            rand = Math.random();
            if (rand <= awayTeamOdds && !homeChanceCreated) {
                awayChanceCreated = true;
            }

            if (homeChanceCreated) {
                const scoringOdds: number = homeTeamOdds;
                const concedingOdds: number = awayTeamOdds;
                rand = Math.random();
                if (rand <= scoringOdds) {
                    canScore = true;
                }

                rand = Math.random();
                if (rand >= concedingOdds) {
                    canConcede = true;
                }

                if (canScore && canConcede) {
                    match.homeScore += 1;
                    match.homeTeam.goalsFor += 1;
                    match.awayTeam.goalsAgainst += 1;
                }
            }
            if (awayChanceCreated) {
                const scoringOdds: number = awayTeamOdds;
                const concedingOdds: number = homeTeamOdds;
                rand = Math.random();
                if (rand <= scoringOdds) {
                    canScore = true;
                }

                rand = Math.random();
                if (rand >= concedingOdds) {
                    canConcede = true;
                }

                if (canScore && canConcede) {
                    match.awayScore += 1;
                    match.awayTeam.goalsFor += 1;
                    match.homeTeam.goalsAgainst += 1;
                }
            }
        }
        
    }

    if (match.homeScore > match.awayScore) {
        match.winningTeam = match.homeTeam;
        match.losingTeam = match.awayTeam;
    }
    else if (match.awayScore > match.homeScore) {
        match.winningTeam = match.awayTeam;
        match.losingTeam = match.homeTeam;
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
    
    setHomeGoals(match.homeScore);
    setAwayGoals(match.awayScore);
    setDidSim(true);
    setTeams(teamSort(allTeams));
}
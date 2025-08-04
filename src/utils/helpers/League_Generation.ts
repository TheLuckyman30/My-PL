import { Match } from '../interfaces/Match';
import { Team } from '../interfaces/Team';
import { MyDate } from '../interfaces/MyDate';
import { teamSort } from './TeamSort';
import { Matchweek } from '../interfaces/Matchweek';
import teams from '../../data/Teams.json'


export let allTeams: Team[] = [];
export let allMatches: Match[] = [];
export let season: MyDate[] = [];

function generateSeason() {
  const months = [
    { name: 'July', has31: true},
    { name: 'August', has31: true},
    { name: 'September', has31: false},
    { name: 'October', has31: true},
    { name: 'November', has31: false},
    { name: 'December', has31: true},
    { name: 'January', has31: true},
    { name: 'February', has31: false},
    { name: 'March', has31: true},
    { name: 'April', has31: false},
    { name: 'May', has31: true},
    { name: 'June', has31: false},
  ];
  const days: Record<string, string> = {
    Sunday: 'Monday',
    Monday: 'Tuesday',
    Tuesday: 'Wednesday',
    Wednesday: 'Thursday',
    Thursday: 'Friday',
    Friday: 'Saturday',
    Saturday: 'Sunday',
  };
  let dayName: string = season.length > 0 ? days[season[season.length - 1].dayName] : 'Monday';
  let year: number = season.length > 0 ? season[season.length - 1].year : 2024;
  

  months.forEach((month) => {
    year = month.name === 'January' ? year + 1 : year;
    const isLeapYear: boolean = (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0));
    const daysInMonth: number = month.has31 ? 31 : (month.name === 'February' ? (isLeapYear ? 29 : 28) : 30);
    for (let i: number = 1; i <= daysInMonth; i++) {
      const newDate: MyDate = {month: month.name, day: i, year: year, dayName: dayName, hasMatch: false, matches: []};
      season = [...season, newDate];
      dayName = days[dayName];
    }
  });
}

function generateTeams() {
  allTeams = teams.map((team) => ({
    ...team,
    logoURL: new URL(`../../assets/team_logos/${team.logoURL}`, import.meta.url).href,
  }));
  allTeams = teamSort(allTeams);
}

function generateMatches() {
  let gameDate: number = season.findIndex((date: MyDate) => date.dayName === 'Saturday' && date.month === 'August'); // Find first Saturday in August

  let tempTeams: Team[] = [...allTeams];
  for (let i = tempTeams.length - 1; i > 0; i--) { // Randomize order of teams
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [tempTeams[i], tempTeams[randomIndex]] = [tempTeams[randomIndex], tempTeams[i]]; 
  }

  let matchweeks: Matchweek[] = [];
  for (let i = 0; i < 38; i++) { // Create Matchweek objects with attached dates
    const newMatchweek: Matchweek = {dates: [gameDate], teamsSchedueled: []}
    matchweeks.push(newMatchweek);
    gameDate = gameDate + 7;
  }

  const fixedTeam: Team = tempTeams.splice(tempTeams.length / 2, 1)[0]; 
  const halfLength: number = tempTeams.length / 2;
  const order = [0, 0, 1, 1]; // Pattern of home and away assignments | 0 = home | 1 = away |
  let fixedTeamOrderCounter: number = 0;
  let homeTeam: Team;
  let awayTeam: Team;
  for (let i = 0; i < matchweeks.length / 2; i++) { // Schedule all season matches based on double round robin algorithm 
    const lastTeam = tempTeams.splice(tempTeams.length - 1, 1)[0];
    const upperHalf: Team[] = tempTeams.slice(0, halfLength);
    const lowerHalf: Team[] = tempTeams.slice(halfLength, tempTeams.length);
    let orderCounter: number = 0;
    fixedTeamOrderCounter = fixedTeamOrderCounter >= order.length ? 0 : fixedTeamOrderCounter;

    homeTeam = order[fixedTeamOrderCounter] === 0 ? fixedTeam : lastTeam;
    awayTeam = order[fixedTeamOrderCounter] === 1 ? fixedTeam : lastTeam;

    const newMatch: Match = {homeTeam: homeTeam, awayTeam: awayTeam, winningTeam: null, losingTeam: null, homeScore: 0, awayScore: 0, date: null, isDone: false};
    const reversedMatch: Match = {homeTeam: awayTeam, awayTeam: homeTeam, winningTeam: null, losingTeam: null, homeScore: 0, awayScore: 0, date: null, isDone: false};

    allMatches.push(newMatch, reversedMatch);
    fixedTeam.matches.push(newMatch, reversedMatch);
    lastTeam.matches.push(newMatch, reversedMatch);
    season[matchweeks[i].dates[0]].matches.push(newMatch);
    season[matchweeks[i + (matchweeks.length / 2)].dates[0]].matches.push(reversedMatch);

    upperHalf.forEach((team1: Team, index: number) => {
      const team2: Team = lowerHalf[lowerHalf.length - (index + 1)];
      orderCounter = orderCounter >= order.length ? 0 : orderCounter;

      homeTeam = order[orderCounter] === 0 ? team1 : team2;
      awayTeam = order[orderCounter] === 1 ? team1 : team2;

      const newMatch: Match = {homeTeam: homeTeam, awayTeam: awayTeam, winningTeam: null, losingTeam: null, homeScore: 0, awayScore: 0, date: null, isDone: false};
      const reversedMatch: Match = {homeTeam: awayTeam, awayTeam: homeTeam, winningTeam: null, losingTeam: null, homeScore: 0, awayScore: 0, date: null, isDone: false};
      
      allMatches.push(newMatch, reversedMatch);
      team1.matches.push(newMatch, reversedMatch);
      team2.matches.push(newMatch, reversedMatch);
      season[matchweeks[i].dates[0]].matches.push(newMatch);
      season[matchweeks[i + (matchweeks.length / 2)].dates[0]].matches.push(reversedMatch);

      orderCounter++;
    });
    fixedTeamOrderCounter++;
    tempTeams = [lastTeam, ...tempTeams];
  }
}

export function generateAll() {
  generateSeason();
  generateTeams();
  generateMatches();
}

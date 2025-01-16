import { Match } from '../classes/Match';
import { Team } from '../classes/Team';
import { MyDate } from '../classes/Date';
import { teamSort } from './TeamSort';
import teams from '../../data/Teams.json'
import { Matchweek } from '../classes/Matchweel';

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
  allTeams = teams.map((team) => team);
  allTeams = teamSort(allTeams);
}

function generateMatches() {
  let gameDate: number = season.findIndex((date: MyDate) => date.dayName === 'Saturday' && date.month === 'August');

  let tempTeams: Team[] = [...allTeams];
  for (let i = tempTeams.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [tempTeams[i], tempTeams[randomIndex]] = [tempTeams[randomIndex], tempTeams[i]]; 
  }

  let matchweeks: Matchweek[] = [];
  for (let i = 0; i < 38; i++) {
    const newMatchweek: Matchweek = {dates: [gameDate], teamsSchedueled: []}
    matchweeks.push(newMatchweek);
    gameDate = gameDate + 7;
  }

  const fixedTeam: Team = tempTeams.splice(tempTeams.length / 2, 1)[0];
  console.log(tempTeams);
  const halfLength: number = tempTeams.length / 2;
  for (let i = 0; i < 19; i++) {
    const upperHalf: Team[] = tempTeams.slice(0, halfLength);
    const lowerHalf: Team[] = tempTeams.slice(halfLength, tempTeams.length);
    console.log(upperHalf);
    console.log(lowerHalf);
    upperHalf.forEach((team1: Team, index: number) => {
      const team2: Team = lowerHalf[lowerHalf.length - (index + 2)];
      const newMatch: Match = {homeTeam: team1, awayTeam: team2, winningTeam: null, losingTeam: null, homeScore: 0, awayScore: 0, date: null, isDone: false};
      allMatches.push(newMatch);
      team1.matches.push(newMatch);
      team2.matches.push(newMatch);
      season[matchweeks[i].dates[0]].matches.push(newMatch);
    });
    const newMatch: Match = {homeTeam: fixedTeam, awayTeam: lowerHalf[lowerHalf.length - 1], winningTeam: null, losingTeam: null, homeScore: 0, awayScore: 0, date: null, isDone: false};
    allMatches.push(newMatch);
    season[matchweeks[i].dates[0]].matches.push(newMatch);
    const test = tempTeams.splice(tempTeams.length - 1, 1)[0];
    tempTeams = [test, ...tempTeams];
  }

}

export function generateAll() {
  generateSeason();
  generateTeams();
  generateMatches();
}

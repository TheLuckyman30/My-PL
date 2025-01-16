import { Match } from '../classes/Match';
import { Team } from '../classes/Team';
import { MyDate } from '../classes/Date';
import teams from '../../data/Teams.json'
import { teamSort } from './TeamSort';

export let allTeams: Team[] = [];
export let allMatches: Match[] = [];
export let season: MyDate[] = []

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
  let dayName: string = season.length > 0 ? days[season[-1].dayName] : 'Monday';
  let year: number = season.length > 0 ? season[-1].year : 2024;
  

  months.forEach((month) => {
    year = month.name === 'January' ? year ++ : year;
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
  //
}

export function generateAll() {
  generateSeason();
  generateTeams();
  generateMatches();
}

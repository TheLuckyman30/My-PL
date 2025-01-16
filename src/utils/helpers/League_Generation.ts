import { Match } from '../classes/Match';
import { Team } from '../classes/Team';
import { MyDate } from '../classes/Date';
import teams from '../../data/Teams.json'
import spursLogo from '../../assets/team_logos/Spurs-logo.png'
import liverpoolLogo from '../../assets/team_logos/Liverpool-logo.png'
import manULogo from '../../assets/team_logos/ManU-logo.png'
import manCityLogo from '../../assets/team_logos/ManCity-logo.png'
import chelseaLogo from '../../assets/team_logos/Chelsea-logo.png'
import arsenalLogo from '../../assets/team_logos/Arsenal-logo.png'
import wolvesLogo from '../../assets/team_logos/Wolves-logo.png'
import southamptonLogo from '../../assets/team_logos/Southampton-logo.png'
import evertonLogo from '../../assets/team_logos/Everton-logo.png'
import fulhamLogo from '../../assets/team_logos/Fulham-logo.png'
import palaceLogo from '../../assets/team_logos/Palace-logo.png'
import leicesterLogo from '../../assets/team_logos/Leicester-logo.png'
import ipswichLogo from '../../assets/team_logos/Ipswich-logo.png'
import brentfordLogo from '../../assets/team_logos/Brentford-logo.png'
import westhamLogo from '../../assets/team_logos/WestHam-logo.png'
import brightonLogo from '../../assets/team_logos/Brighton-logo.png'
import newcaslteLogo from '../../assets/team_logos/Newcastle-logo.png'
import forestLogo from '../../assets/team_logos/Forest-logo.png'
import villaLogo from '../../assets/team_logos/Villa-logo.png'
import bournemouthLogo from '../../assets/team_logos/Bournemouth-logo.png'

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
  let dayName: string = season ? days[season[-1].dayName] : 'Monday';
  let year: number = season ? season[-1].year : 2024;
  

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

export function teamSort(teams: Team[]): Team[] {
  const copyOfTeams = [...teams];
  const sortedTeams: Team[] = copyOfTeams.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    if (b.goalDiff !== a.goalDiff) {
      return b.goalDiff - a.goalDiff;
    }
    if (b.goalsFor !== a.goalsFor) {
      return b.goalsFor - a.goalsFor;
    }
    if (b.goalsAgainst !== a.goalsAgainst) {
      return b.goalsAgainst - a.goalsAgainst;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
  sortedTeams.forEach(
    (team: Team, index: number) => (team.position = index + 1)
  );
  return sortedTeams;
}

export function generateAll() {
  generateSeason();
  generateTeams();
  generateMatches();
}

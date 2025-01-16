import { Match } from '../classes/Match';
import { Team } from '../classes/Team';
import { MyDate } from '../classes/Date';
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
      const tempDate: MyDate = {month: month.name, day: i, year: year, dayName: dayName, hasMatch: false, matches: []};
      season = [...season, tempDate];
      dayName = days[dayName];
    }
  });
}

function generateTeams() {
  allTeams = [
    new Team('Tottenham Hotspur', 'TOT', 90, spursLogo, 'Spurs'),
    new Team('Liverpool', 'LIV', 75, liverpoolLogo),
    new Team('Machester United', 'MUN', 60, manULogo, 'Man United'),
    new Team('Manchester City', 'MCI', 95, manCityLogo, 'Man City'),
    new Team('Chelsea', 'CHE', 30, chelseaLogo),
    new Team('Arsenal', 'ARS', 30, arsenalLogo),
    new Team ('Wolverhampton Wanderers', 'WOL', 30, wolvesLogo, 'Wolves'),
    new Team ('Southampton', 'SOU', 15, southamptonLogo),
    new Team ('Everton', 'EVE', 20, evertonLogo),
    new Team ('Fulham', 'FUL', 35, fulhamLogo),
    new Team ('Crystal Palace', 'CRY', 30, palaceLogo),
    new Team ('Leicester City', 'LEI', 25, leicesterLogo, 'Leicester'),
    new Team ('Ipswich Town', 'IPS', 15, ipswichLogo),
    new Team ('Brentford', 'BRE', 35, brentfordLogo),
    new Team ('West Ham United', 'WHU', 40, westhamLogo, 'West Ham'),
    new Team ('Brighton And Hove Albion', 'BHA', 55, brightonLogo, 'Brighton'),
    new Team ('Newcastle United', 'NEW', 60, newcaslteLogo, 'Newcastle'),
    new Team ('Nottingham Forest', 'NFO', 25, forestLogo, 'Forest'),
    new Team ('Aston Villa', 'AVL', 65, villaLogo),
    new Team ('Bournemouth', 'BOU', 30, bournemouthLogo),
  ];
  allTeams = teamSort(allTeams);
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

function generateMatches() {
  // Generates All Matches
  allTeams.forEach((homeTeam: Team) =>
    allTeams.forEach((awayTeam: Team) =>
      homeTeam.name !== awayTeam.name
        ? (allMatches = [...allMatches, new Match(homeTeam, awayTeam)])
        : allMatches
    )
  );
  
  // Randomizes the order of the matches
  for (let i = allMatches.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allMatches[i], allMatches[j]] = [allMatches[j], allMatches[i]];
  }

  // Assigns matches to each team
  allTeams.forEach(
    (team: Team) =>
      (team.mathches = allMatches.filter(
        (match: Match) =>
          match.homeTeam.name === team.name || match.awayTeam.name === team.name
      ))
  );

  // Assigns Dates to all of the matches
  allTeams.forEach((team: Team) => {
    for (let i = team.mathches.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [team.mathches[i], team.mathches[j]] = [
        team.mathches[j],
        team.mathches[i],
      ];
    }
  });
  if (firstGameDate) {
    let gameDate: Date | null = firstGameDate;
    for (let k = 0; k < allTeams.length * 2 + 10; k++) {
      allTeams.forEach((team: Team) => {
        const match = team.mathches.find(
          (match) =>
            gameDate &&
            !match.date &&
            !match.homeTeam.matchDates.includes(gameDate.uniqueID) &&
            !match.awayTeam.matchDates.includes(gameDate.uniqueID)
        );
        if (match) {
          if (gameDate) {
            match.date = gameDate;
            gameDate.matches = [...gameDate.matches, match]
            gameDate.hasMatch = true;
            match.homeTeam.matchDates = [
              ...match.homeTeam.matchDates,
              gameDate.uniqueID,
            ];
            match.awayTeam.matchDates = [
              ...match.awayTeam.matchDates,
              gameDate.uniqueID,
            ];
          }
        }
      });
      for (let j = 0; j < 7; j++) {
        if (gameDate) {
          gameDate = gameDate.nextDate;
        }
      }
    }
  }
  allTeams.forEach((team: Team) =>
    team.mathches.sort((a, b) =>
      a.date && b.date ? a.date.uniqueID - b.date.uniqueID : 0
    )
  );
}

export function generateAll() {
  generateSeason();
  generateTeams();
  generateMatches();
}

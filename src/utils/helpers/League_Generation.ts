import { Match } from '../classes/Match';
import { Season } from '../classes/Season';
import { Team } from '../classes/Team';
import { Date } from '../classes/Date';

export let allTeams: Team[] = [];
export let allMatches: Match[] = [];
export let season: Season = new Season(2023, 'Thursday');
let firstGameDate: Date | null = null;

function generateSeason() {
  // Find the second Saturday of August
  let current = season.startDate;
  let fridayCounter: number = 0;
  while (current && fridayCounter !== 2) {
    if (
      current.currentDayName === 'Saturday' &&
      current.currentMonth === 'August'
    ) {
      fridayCounter++;
    }
    if (fridayCounter !== 2) {
      current = current.nextDate;
    }
  }
  firstGameDate = current;
}

function generateTeams() {
  allTeams = [
    new Team('Tottenham Hotspur', 'TOT', 90),
    new Team('Liverpool', 'LIV', 75),
    new Team('Machester United', 'MUN', 60),
    new Team('Manchester City', 'MCI', 95),
    new Team('Chelsea', 'CHE', 1),
    new Team('Arsenal', 'ARS', 1),
    new Team ('Wolves', 'WOL', 30),
    new Team ('Southampton', 'SOU', 15),
    new Team ('Everton', 'EVE', 20),
    new Team ('Fulham', 'FUL', 35),
    new Team ('Crystal Palace', 'CRY', 30),
    new Team ('Leicsetr City', 'LEI', 25),
    new Team ('Ipswich Town', 'IPS', 15),
    new Team ('Brentford', 'BRE', 35),
    new Team ('West Ham', 'HAM', 40),
    new Team ('Brighton', 'BRI', 55),
    new Team ('Newcastle', 'NEW', 60),
    new Team ('Nottingham Forrest', 'FOR', 25),
    new Team ('Aston Villa', 'AST', 65),
    new Team ('Bournemouth', 'BOU', 30),
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

  const tmp = allTeams.find(team => team.name === allMatches[5].homeTeam.name);
  console.log(tmp === allMatches[5].homeTeam)

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

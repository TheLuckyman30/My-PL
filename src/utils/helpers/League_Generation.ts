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
    new Team('Tottenham Hotspur', 'TOT'),
    new Team('Liverpool', 'LIV'),
    new Team('Machester United', 'MUN'),
    new Team('Manchester City', 'MCI'),
    new Team('Chelsea', 'CHE'),
    new Team('Arsenal', 'ARS'),
    new Team ('Wolves', 'WOL'),
    new Team ('Southampton', 'SOU'),
    new Team ('Everton', 'EVE'),
    new Team ('Fulham', 'FUL'),
    new Team ('Crystal Palace', 'CRY'),
    new Team ('Leicsetr City', 'LEI'),
    new Team ('Ipswich Town', 'IPS'),
    new Team ('Brentford', 'BRE'),
    new Team ('West Ham', 'HAM'),
    new Team ('Brighton', 'BRI'),
    new Team ('Newcastle', 'NEW'),
    new Team ('Nottingham Forrest', 'FOR'),
    new Team ('Aston Villa', 'AST'),
    new Team ('Bournemouth', 'BOU'),
  ];
  allTeams = teamSort(allTeams);
}

function teamSort(teams: Team[]): Team[] {
  const sortedTeams: Team[] = teams.sort((a, b) => {
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

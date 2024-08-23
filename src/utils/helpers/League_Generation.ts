import { Match } from '../classes/Match';
import { Season } from '../classes/Season';
import { Team } from '../classes/Team';
import { Date } from '../classes/Date';

export let allTeams: Team[] = [];
export let allMatches: Match[] = [];
export let season: Season = new Season(2024, 'Saturday');
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
    new Team('Tottenham Hotspur', 'TOT', 90, 'src/assets/team_logos/Spurs-logo.png'),
    new Team('Liverpool', 'LIV', 75, 'src/assets/team_logos/Liverpool-logo.png'),
    new Team('Machester United', 'MUN', 60, 'src/assets/team_logos/ManU-logo.png'),
    new Team('Manchester City', 'MCI', 95, 'src/assets/team_logos/ManCity-logo.png'),
    new Team('Chelsea', 'CHE', 30, 'src/assets/team_logos/Chelsea-logo.png'),
    new Team('Arsenal', 'ARS', 30, 'src/assets/team_logos/Arsenal-logo.png'),
    new Team ('Wolverhampton Wanderers', 'WOL', 30, 'src/assets/team_logos/Wolves-logo.png'),
    new Team ('Southampton', 'SOU', 15, 'src/assets/team_logos/Southampton-logo.png'),
    new Team ('Everton', 'EVE', 20, 'src/assets/team_logos/Everton-logo.png'),
    new Team ('Fulham', 'FUL', 35, 'src/assets/team_logos/Fulham-logo.png'),
    new Team ('Crystal Palace', 'CRY', 30, 'src/assets/team_logos/Palace-logo.png'),
    new Team ('Leicester City', 'LEI', 25, 'src/assets/team_logos/Leicester-logo.png'),
    new Team ('Ipswich Town', 'IPS', 15, 'src/assets/team_logos/Ipswich-logo.png'),
    new Team ('Brentford', 'BRE', 35, 'src/assets/team_logos/Brentford-logo.png'),
    new Team ('West Ham United', 'WHU', 40, 'src/assets/team_logos/WestHam-logo.png'),
    new Team ('Brighton And Hove Albion', 'BHA', 55, 'src/assets/team_logos/Brighton-logo.png'),
    new Team ('Newcastle United', 'NEW', 60, 'src/assets/team_logos/Newcastle-logo.png'),
    new Team ('Nottingham Forest', 'NFO', 25, 'src/assets/team_logos/Forest-logo.png'),
    new Team ('Aston Villa', 'AVL', 65, 'src/assets/team_logos/Villa-logo.png'),
    new Team ('Bournemouth', 'BOU', 30, 'src/assets/team_logos/Bournemouth-logo.png'),
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

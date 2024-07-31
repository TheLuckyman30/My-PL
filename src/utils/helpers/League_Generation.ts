import { Match } from '../classes/Match';
import { Season } from '../classes/Season';
import { Team } from '../classes/Team';
import { Date } from '../classes/Date';

export let allTeams: Team[] = [];
export let allMatches: Match[] = [];
export let season: Season = new Season(2023, 'Thursday');
let firstGameDate: Date | null = null;

function generateSeason() {
  // Find the second Friday of August
  let current = season.startDate;
  let fridayCounter: number = 0;
  while (current && fridayCounter !== 2) {
    if (
      current.currentDayName === 'Friday' &&
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
      return a.shortName.localeCompare(b.shortName);
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
  if (firstGameDate) {
    allTeams.forEach((team: Team) => {
      let gameDate: Date | null = firstGameDate;
      for (let i = team.mathches.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [team.mathches[i], team.mathches[j]] = [
          team.mathches[j],
          team.mathches[i],
        ];
      }
      while (team.mathches.some(match => !match.date)) {
        const tmp = team.mathches.find(match => gameDate && !match.date && (!match.homeTeam.matchDates.includes(gameDate.uniqueID) && !match.awayTeam.matchDates.includes(gameDate.uniqueID)));
        if (tmp) {
          if (gameDate) {
            tmp.date = gameDate;
            tmp.homeTeam.matchDates = [...tmp.homeTeam.matchDates, gameDate.uniqueID];
            tmp.awayTeam.matchDates = [...tmp.awayTeam.matchDates, gameDate.uniqueID];
          }
        }
        for (let j = 0; j < 7; j++) {
            if (gameDate) {
              gameDate = gameDate.nextDate;
            }
        }
      }
      
      /*team.mathches.forEach((match: Match) => {
        if (!match.date) {
          while (
            gameDate &&
            (match.homeTeam.matchDates.includes(gameDate.uniqueID) ||
              match.awayTeam.matchDates.includes(gameDate.uniqueID))
          ) {
            for (let i = 0; i < 7; i++) {
              if (gameDate) {
                gameDate = gameDate.nextDate;
              }
            }
          }
          match.date = gameDate;
          if (gameDate) {
            match.homeTeam.matchDates = [...match.homeTeam.matchDates, gameDate.uniqueID];
            match.awayTeam.matchDates = [...match.awayTeam.matchDates, gameDate.uniqueID];
          }
        }
      }); */
      console.log(team.name + " " + team.matchDates.map((date: number) => date))
      team.mathches.sort((a, b) =>
        a.date && b.date ? a.date.uniqueID - b.date.uniqueID : 0
      );
    });
  }
}

export function generateAll() {
  generateSeason();
  generateTeams();
  generateMatches();
}

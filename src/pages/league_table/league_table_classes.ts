export class Team {
  public name: string;
  public goalsFor: number;
  public goalsAgainst: number;
  public goalDiff: number;
  public points: number;
  public mathches: Match[];

  constructor(
    name: string,
    goalsFor: number = 0,
    goalsAgainst: number = 0,
    goalDiff: number = 0,
    points: number = 0,
    matches: Match[] = []
  ) {
    this.name = name;
    this.goalsFor = goalsFor;
    this.goalsAgainst = goalsAgainst;
    this.goalDiff = goalDiff;
    this.points = points;
    this.mathches = matches;
  }

  addMatch(home: boolean, oppositon: Team) {
    if (home) {
      this.mathches = [...this.mathches, new Match(this, oppositon)];
    } else {
      this.mathches = [...this.mathches, new Match(oppositon, this)];
    }
  }
}

export class Match {
  public homeTeam: Team;
  public awayTeam: Team;

  constructor(homeTeam: Team, awayTeam: Team) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
  }
}

export const intitalTeams: Team[] = [
  new Team('Tottenham Hotspur'),
  new Team('Liverpool'),
  new Team('Machester United'),
  new Team('Manchester City'),
  new Team('Chelsea'),
  new Team('Arsenal'),
];
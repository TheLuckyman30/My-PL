export class Team {
  public name: string;
  public shortName: string;
  public goalsFor: number;
  public goalsAgainst: number;
  public goalDiff: number;
  public points: number;
  public mathches: Match[];
  public played: number;
  public won: number;
  public drawn: number;
  public lost: number;
  public position: number;

  constructor(
    name: string,
    shortName: string,
    goalsFor: number = 0,
    goalsAgainst: number = 0,
    goalDiff: number = 0,
    points: number = 0,
    matches: Match[] = [],
    played: number = 0,
    won: number = 0,
    drawn: number = 0,
    lost: number = 0,
    position: number = 0
  ) {
    this.name = name;
    this.shortName = shortName;
    this.goalsFor = goalsFor;
    this.goalsAgainst = goalsAgainst;
    this.goalDiff = goalDiff;
    this.points = points;
    this.mathches = matches;
    this.played = played;
    this.won = won;
    this.drawn = drawn;
    this.lost = lost;
    this.position = position;
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
  new Team('Tottenham Hotspur', 'TOT'),
  new Team('Liverpool', 'LIV'),
  new Team('Machester United', 'MUN'),
  new Team('Manchester City', 'MCI'),
  new Team('Chelsea', 'CHE'),
  new Team('Arsenal', 'ARS'),
];
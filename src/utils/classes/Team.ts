import { Match } from "./Match";

export class Team {
  public name: string;
  public shortName: string;
  public teamStrength: number;
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
  public matchDates: number[];
  facedTeams: string[];

  constructor(
    name: string,
    shortName: string,
    teamStrength: number,
    goalsFor: number = 0,
    goalsAgainst: number = 0,
    goalDiff: number = 0,
    points: number = 0,
    matches: Match[] = [],
    played: number = 0,
    won: number = 0,
    drawn: number = 0,
    lost: number = 0,
    position: number = 0,
    matchDates: number[] = [],
    facedTeams: string[] = []
  ) {
    this.name = name;
    this.shortName = shortName;
    this.teamStrength = teamStrength;
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
    this.matchDates = matchDates;
    this.facedTeams = facedTeams;
  }

  addMatch(home: boolean, oppositon: Team) {
    if (home) {
      this.mathches = [...this.mathches, new Match(this, oppositon)];
    } else {
      this.mathches = [...this.mathches, new Match(oppositon, this)];
    }
  }
}
import { Team } from "./Team";

export class Match {
  public homeTeam: Team;
  public awayTeam: Team;

  constructor(homeTeam: Team, awayTeam: Team) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
  }
}
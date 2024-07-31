import { Team } from "./Team";
import { Date } from "./Date";

export class Match {
  public homeTeam: Team;
  public awayTeam: Team;
  public date: Date | null;

  constructor(homeTeam: Team, awayTeam: Team, date: Date | null = null) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.date = date;
  }
}
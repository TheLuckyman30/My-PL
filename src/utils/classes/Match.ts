import { Team } from './Team';
import { MyDate } from './Date';

export interface Match {
  homeTeam: Team;
  awayTeam: Team;
  winningTeam: Team | null;
  losingTeam: Team | null;
  homeScore: number;
  awayScore: number
  date: MyDate | null;
  isDone: boolean;
}

/*export class Match {
  public homeTeam: Team;
  public awayTeam: Team;
  public winningTeam: Team | null;
  public losingTeam: Team | null;
  public homeScore: number;
  public awayScore: number;
  public date: Date | null;
  public isDone: boolean;

  constructor(
    homeTeam: Team,
    awayTeam: Team,
    winningTeam: Team | null = null,
    losingTeam: Team | null = null,
    homeScore: number = 0,
    awayScore: number = 0,
    date: Date | null = null,
    isDone: boolean = false
  ) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.winningTeam = winningTeam;
    this.losingTeam = losingTeam;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.date = date;
    this.isDone = isDone;
  }
}*/

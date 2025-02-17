import { Team } from './Team';
import { MyDate } from './MyDate';

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
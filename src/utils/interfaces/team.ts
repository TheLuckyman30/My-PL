import { League } from './league';
import { Player } from './player';

export interface Team {
  id: string;
  name: string;
  shortName: string;
  threeLetterName: string;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  wins: number;
  draws: number;
  loses: number;
  league: League;
  players: Player[];
}

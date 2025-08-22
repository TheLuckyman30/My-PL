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
  points: number;
  leagueId: string;
  playerIds: string[];
}

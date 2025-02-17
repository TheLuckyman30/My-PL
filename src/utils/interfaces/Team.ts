import { Match } from "./Match";

export interface Team {
  name: string;
  shortName: string;
  threeLetterName: string;
  teamStrength: number;
  logoURL: string;
  goalsFor: number;
  goalsAgainst: number;
  goalDiff: number;
  points: number;
  matches: Match[];
  played: number;
  won: number;
  drawn: number;
  lost: number;
  position: number;
}
import { Match } from "./Match";

export interface MyDate {
  month: string;
  day: number;
  year: number;
  dayName: string;
  hasMatch: boolean;
  matches: Match[];
}
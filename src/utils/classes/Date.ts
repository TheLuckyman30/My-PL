import { Match } from "./Match";

export interface MyDate {
  month: string;
  day: number;
  year: number;
  dayName: string;
  hasMatch: boolean;
  matches: Match[];
}

/*export class Date {
  public currentMonth: string;
  public currentDay: string;
  public currentYear: number;
  public hasMatch: boolean;
  public nextDate: Date | null;
  public currentDayName: string;
  public uniqueID: number;
  public matches: Match[];

  constructor (currentMonth: string, currentDay: string, currentYear: number, hasMatch: boolean, nextDate: Date | null = null, currentDayName: string, uniqueID: number, matches: Match[] = []) {
    this.currentMonth = currentMonth;
    this.currentDay = currentDay;
    this.currentYear = currentYear;
    this.hasMatch = hasMatch;
    this.nextDate = nextDate;
    this.currentDayName = currentDayName;
    this.uniqueID = uniqueID;
    this.matches = matches;
  }
}
*/
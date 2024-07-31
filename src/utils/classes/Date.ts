export class Date {
  public currentMonth: string;
  public currentDay: string;
  public currentYear: number;
  public hasMatch: boolean;
  public nextDate: Date | null;
  public currentDayName: string;
  public uniqueID: number;

  constructor (currentMonth: string, currentDay: string, currentYear: number, hasMatch: boolean, nextDate: Date | null = null, currentDayName: string, uniqueID: number) {
    this.currentMonth = currentMonth;
    this.currentDay = currentDay;
    this.currentYear = currentYear;
    this.hasMatch = hasMatch;
    this.nextDate = nextDate;
    this.currentDayName = currentDayName;
    this.uniqueID = uniqueID;
  }
}
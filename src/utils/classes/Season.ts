import { Date } from "./Date";

const MONTHS = [
  { name: 'June', has31: false, isFeb: false },
  { name: 'July', has31: true, isFeb: false },
  { name: 'August', has31: true, isFeb: false },
  { name: 'September', has31: false, isFeb: false },
  { name: 'October', has31: true, isFeb: false },
  { name: 'November', has31: false, isFeb: false },
  { name: 'December', has31: true, isFeb: false },
  { name: 'January', has31: true, isFeb: false },
  { name: 'Febuary', has31: false, isFeb: true },
  { name: 'March', has31: true, isFeb: false },
  { name: 'April', has31: false, isFeb: false },
  { name: 'May', has31: true, isFeb: false },
];

const DAYS: Record<string, string> = {
  Sunday: 'Monday',
  Monday: 'Tuesday',
  Tuesday: 'Wednesday',
  Wednesday: 'Thursday',
  Thursday: 'Friday',
  Friday: 'Saturday',
  Saturday: 'Sunday',
};

export class Season {
  public startDate: Date | null;
  public endDate: Date | null;
  public calendarYear: number;
  public initalDayName: string;
  public willHaveLeapYear: boolean;

  constructor(calendarYear: number, initalDayName: string) {
    this.startDate = null;
    this.endDate = null;
    this.calendarYear = calendarYear;
    this.initalDayName = initalDayName;
    this.willHaveLeapYear = false;
    MONTHS.forEach((month) => {
      this.willHaveLeapYear =
        this.calendarYear % 4 === 0
          ? this.calendarYear % 100 === 0
            ? this.calendarYear % 400 === 0
              ? true
              : false
            : true
          : false;
      const daysInMonth: number = month.has31
        ? 31
        : month.isFeb
        ? this.willHaveLeapYear
          ? 29
          : 28
        : 30;
      for (let i = 1; i <= daysInMonth; i++) {
        const currentDate: Date | null = this.endDate;
        if (currentDate) {
          this.calendarYear =
            currentDate.currentMonth === 'December' &&
            currentDate.currentDay === '31'
              ? this.calendarYear + 1
              : this.calendarYear;
        }
        const newDate: Date = new Date(
          month.name,
          i.toString(),
          this.calendarYear,
          false,
          null,
          this.initalDayName,
          currentDate ? currentDate.uniqueID + 1 : 0
        );
        if (currentDate) {
          currentDate.nextDate = newDate;
          this.endDate = newDate;
          newDate.currentDayName = DAYS[currentDate.currentDayName];
        } else {
          this.startDate = newDate;
          this.endDate = newDate;
        }
      }
    });
  }
}
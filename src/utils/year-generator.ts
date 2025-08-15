import { Day } from './interfaces/day';
import { Year } from './interfaces/year';

/**
 * This function will create a new year object
 *
 * @param {number} year The current year number
 * @param {string} dayName The day name you want to start the year at or use as a reference for getting the next day name
 * @param {boolean} getNextDayName Whether or not the use the next day name based off of the dayName parameter
 * @returns {Year} The created year object with an array containing every day of the year
 */
export function createNewYear(year: number, dayName: string, getNextDayName: boolean): Year {
  const isLeapYear: boolean = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const months: Record<string, number> = {
    January: 31,
    February: isLeapYear ? 29 : 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };
  const daysOfWeek: Record<string, string> = {
    Sunday: 'Monday',
    Monday: 'Tuesday',
    Tuesday: 'Wednesday',
    Wednesday: 'Thursday',
    Thursday: 'Friday',
    Friday: 'Saturday',
    Saturday: 'Sunday',
  };
  const days: Day[] = [];

  if (getNextDayName) {
    dayName = daysOfWeek[dayName];
  }

  for (const [month, numberOfDays] of Object.entries(months)) {
    for (let i = 1; i <= numberOfDays; i++) {
      const newDay: Day = { dayName: dayName, dayNumber: i, month: month, year: year };
      days.push(newDay);
      dayName = daysOfWeek[dayName];
    }
  }

  const newYear: Year = { year: year, days: days, nextYear: null };
  return newYear;
}

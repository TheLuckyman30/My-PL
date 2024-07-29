import { useState } from 'react';
import { Date } from '../League_Table_Classes';
import { Button } from '@mui/material';

const MONTHS = [
  { name: 'January', has31: true, isFeb: false },
  { name: 'Febuary', has31: false, isFeb: true },
  { name: 'March', has31: true, isFeb: false },
  { name: 'April', has31: false, isFeb: false },
  { name: 'May', has31: true, isFeb: false },
  { name: 'June', has31: false, isFeb: false },
  { name: 'July', has31: true, isFeb: false },
  { name: 'August', has31: true, isFeb: false },
  { name: 'September', has31: false, isFeb: false },
  { name: 'October', has31: true, isFeb: false },
  { name: 'November', has31: false, isFeb: false },
  { name: 'December', has31: true, isFeb: false },
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

class Calendars {
  public head: Date | null;
  public last: Date | null;
  public calendarYear: number;
  public initalDayName: string;
  public isLeapYear: boolean;

  constructor(calendarYear: number, initalDayName: string) {
    this.calendarYear = calendarYear;
    this.initalDayName = initalDayName;
    this.isLeapYear =
      calendarYear % 4 === 0
        ? calendarYear % 100 === 0
          ? calendarYear % 400 === 0
            ? true
            : false
          : true
        : false;
    this.head = null;
    this.last = null;
    MONTHS.forEach((month) => {
      const daysInMonth: number = month.has31
        ? 31
        : month.isFeb
        ? this.isLeapYear
          ? 29
          : 28
        : 30;
      for (let i = 1; i <= daysInMonth; i++) {
        const currentDate: Date | null = this.last;
        const newDate: Date = new Date(
          month.name,
          i.toString(),
          this.calendarYear,
          false,
          null,
          this.initalDayName
        );
        if (currentDate) {
          currentDate.nextDate = newDate;
          this.last = newDate;
          newDate.currentDayName = DAYS[currentDate.currentDayName];
        } else {
          this.head = newDate;
          this.last = newDate;
        }
      }
    });
  }
}

function Calendar() {
  const [currentCalendar, setCurrentCalendar] = useState<Calendars>(
    new Calendars(2023, 'Sunday')
  );
  const [currentDate, setCurrentDate] = useState<Date | null>(
    currentCalendar.head
  );

  function nextDay() {
    if (currentDate) {
      const newDate: Date | null = currentDate.nextDate;
      if (!newDate) {
        const newCalendar: Calendars = new Calendars(
          currentCalendar.calendarYear + 1,
          DAYS[currentDate.currentDayName]
        );
        setCurrentCalendar(newCalendar);
        setCurrentDate(newCalendar.head);
      } else {
        setCurrentDate(newDate);
      }
    }
  }

  function nextMonth() {
    let current: Date | null = currentDate;
    for (let i = 0; i < 30; i++) {
      if (current) {
        current = current.nextDate;
      }
    }
    if (current) {
      setCurrentDate(current);
    }
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>
          {currentDate?.currentMonth +
            ', ' +
            currentDate?.currentDayName +
            ' ' +
            currentDate?.currentDay +
            ' ' +
            currentDate?.currentYear}
        </div>
      </div>

      <Button onClick={nextDay}>Next Day</Button>
      <Button onClick={nextMonth}>Next Month</Button>
    </div>
  );
}

export default Calendar;

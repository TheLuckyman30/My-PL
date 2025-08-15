import { create } from 'zustand';
import { Year } from '../utils/interfaces/year';
import { Day } from '../utils/interfaces/day';
import { createNewYear } from '../utils/year-generator';

type CalendarStore = {
  currentYear: Year;
  currentDay: Day;
  nextDayIndex: number;
  setCurrentYear: (newYear: Year) => void;
  setCurrentDay: (newDay: Day) => void;
  setNextDayIndex: (newIndex: number) => void;
  advanceDay: () => void;
};

const initalYear = createNewYear(2025, 'Wednesday', false);
const secondYear = createNewYear(
  initalYear.year + 1,
  initalYear.days[initalYear.days.length - 1].dayName,
  true
);

initalYear.nextYear = secondYear;

export const useCalendarStore = create<CalendarStore>((set, get) => ({
  currentYear: initalYear,
  currentDay: initalYear.days[0],
  nextDayIndex: 1,
  setCurrentYear: (newYear: Year) => {
    set({ currentYear: newYear });
  },
  setCurrentDay: (newDay: Day) => {
    set({ currentDay: newDay });
  },
  setNextDayIndex: (newIndex: number) => {
    set({ nextDayIndex: newIndex });
  },
  advanceDay: () => {
    const nextDayIndex = get().nextDayIndex;
    let currentYear = get().currentYear;
    if (nextDayIndex === 0 && currentYear.nextYear) {
      const newFutureYear = createNewYear(
        currentYear.nextYear.year + 1,
        currentYear.nextYear.days[currentYear.days.length - 1].dayName,
        true
      );
      const oldYear = currentYear;
      currentYear = currentYear.nextYear;
      currentYear.nextYear = newFutureYear;
      set({ currentYear: currentYear });
      oldYear.nextYear = null;
    }
    set({ currentDay: currentYear.days[nextDayIndex] });
    if (nextDayIndex === currentYear.days.length - 1) {
      set({ nextDayIndex: 0 });
    } else {
      set({ nextDayIndex: nextDayIndex + 1 });
    }
  },
}));

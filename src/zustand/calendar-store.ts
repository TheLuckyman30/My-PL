import { create } from 'zustand';
import { Day } from '../utils/interfaces/day';
import { Year } from '../utils/interfaces/year';
import { createNewYear } from '../utils/year-generator';

type CalendarStore = {
  years: Year[];
  currentDay: Day | null;
  setYears: (newYears: Year[]) => void;
  setCurrentDay: (newDay: Day) => void;
};

const initalYear = createNewYear(2025, 'Wednesday');
const secondYear = createNewYear(
  initalYear.year,
  initalYear.days[initalYear.days.length - 1].dayName
);

export const useCalendarStore = create<CalendarStore>((set) => ({
  years: [initalYear, secondYear],
  currentDay: initalYear.days[0],
  setYears: (newYears: Year[]) => {
    set({ years: newYears });
  },
  setCurrentDay: (newDay: Day) => {
    set({ currentDay: newDay });
  },
}));

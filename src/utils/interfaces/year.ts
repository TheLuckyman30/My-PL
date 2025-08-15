import { Day } from './day';

export interface Year {
  year: number;
  days: Day[];
  nextYear: Year | null;
}

import { Team } from './team';

export interface League {
  id: string;
  name: string;
  teams: Team[];
}

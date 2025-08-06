import { create } from 'zustand';
import { Team } from '../utils/interfaces/team';
import teams from '../data/temp-teams.json';

type TeamStore = {
  teams: Team[];
};

export const useTeamStore = create<TeamStore>(() => ({
  teams: teams,
}));

import { create } from 'zustand';
import { Team } from '../utils/interfaces/team';

type TeamStore = {
  teams: Team[];
  setTeams: (newTeams: Team[]) => void;
};

export const useTeamStore = create<TeamStore>((set) => ({
  teams: [],
  setTeams: (newTeams: Team[]) => {
    set({ teams: newTeams });
  },
}));

import { create } from 'zustand';
import { Team } from '../utils/interfaces/team';

type TeamStore = {
  teams: Map<string, Team>;
  setTeams: (newTeams: Map<string, Team>) => void;
};

export const useTeamStore = create<TeamStore>((set) => ({
  teams: new Map<string, Team>(),
  setTeams: (newTeams: Map<string, Team>) => {
    set({ teams: newTeams });
  },
}));

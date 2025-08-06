import { create } from 'zustand';
import { League } from '../utils/interfaces/league';

type LeagueStore = {
  leagues: League[];
  setLeagues: (newLeagues: League[]) => void;
};

export const useLeagueStore = create<LeagueStore>((set) => ({
  leagues: [],
  setLeagues: (newLeagues: League[]) => {
    set({ leagues: newLeagues });
  },
}));

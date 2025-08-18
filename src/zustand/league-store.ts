import { create } from 'zustand';
import { League } from '../utils/interfaces/league';

type LeagueStore = {
  leagues: Map<string, League>;
  setLeagues: (newLeagues: Map<string, League>) => void;
};

export const useLeagueStore = create<LeagueStore>((set) => ({
  leagues: new Map<string, League>(),
  setLeagues: (newLeagues: Map<string, League>) => {
    set({ leagues: newLeagues });
  },
}));

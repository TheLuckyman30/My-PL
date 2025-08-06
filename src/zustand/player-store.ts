import { create } from 'zustand';
import { Player } from '../utils/interfaces/player';

type PlayerStore = {
  players: Player[];
  setPlayers: (newPlayers: Player[]) => void;
};

export const usePlayerStore = create<PlayerStore>((set) => ({
  players: [],
  setPlayers: (newPlayers: Player[]) => {
    set({ players: newPlayers });
  },
}));

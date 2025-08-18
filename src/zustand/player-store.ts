import { create } from 'zustand';
import { Player } from '../utils/interfaces/player';

type PlayerStore = {
  players: Map<string, Player>;
  setPlayers: (newPlayers: Map<string, Player>) => void;
};

export const usePlayerStore = create<PlayerStore>((set) => ({
  players: new Map<string, Player>(),
  setPlayers: (newPlayers: Map<string, Player>) => {
    set({ players: newPlayers });
  },
}));

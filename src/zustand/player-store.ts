import { create } from "zustand";
import { Player } from "../utils/interfaces/player"

type PlayerStore = {
    player: Player | null;
    setPlayer: (newPlayer: Player | null) => void;
}

export const usePlayerStore = create<PlayerStore>((set) => ({
    player: null,
    setPlayer: (newPlayer: Player | null) => {
        set({player: newPlayer})
    }
}));
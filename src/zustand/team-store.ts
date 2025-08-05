import { create } from "zustand";
import { Team } from "../utils/interfaces/tempt2";
import teams from '../data/temp-teams.json'

type TeamStore = {
    teams: Team[]
}

export const useTeamStore = create<TeamStore>(() => ({
    teams: teams
}));
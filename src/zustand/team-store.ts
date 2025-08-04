import { create } from "zustand";
import { Team } from "../interfaces/Team";
import teams from '../data/temp-teams.json'

type TeamStore = {
    teams: Team[]
}

export const useTeamStore = create<TeamStore>(() => ({
    teams: teams
}));
import { Team } from "./team";

export interface User {
    firstName: string;
    lastName: string;
    selectedTeam: Team;
}

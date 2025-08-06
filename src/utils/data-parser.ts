import data from '../data/temp-database.json';

interface LeagueJSON {
  id: string;
  name: string;
}

interface TeamJSON {
  id: string;
  name: string;
  shortName: string;
  threeLetterName: string;
  leagueId: string;
}

interface PlayerJSON {
  name: string;
  teamId: string;
}

interface DataJSON {
  leagues: LeagueJSON[];
  teams: TeamJSON[];
  players: PlayerJSON[];
}

export function parseJSONData() {
  const importedData: DataJSON = data;
}

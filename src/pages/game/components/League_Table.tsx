import { Team } from '../../../utils/classes/Team';
import '../../../css/components/League_Table.css';
import { useMediaQuery } from '@mui/material';

interface LeagueTableProps {
  teams: Team[];
}

const TABLE_HEADER_ITEMS: string[] = [
  'Position',
  'Club',
  'Played',
  'Won',
  'Drawn',
  'Lost',
  'GF',
  'GA',
  'GD',
  'Points',
];

const SPECIAL_POSITIONS: Record<number, string> = {
  1: '#4285F4',
  2: '#4285F4',
  3: '#4285F4',
  4: '#4285F4',
  5: '#fa7b17',
  6: '#fa7b17',
  7: '#34a853',
  18: '#ea0035',
  19: '#ea0035',
  20: '#ea0035',
};

function LeagueTable({ teams }: LeagueTableProps) {
  const isSmallScreen: boolean = useMediaQuery('(max-width:1000px)');

  return (
    <div>
      <table className="table">
        <tr className="lt-header">
          {TABLE_HEADER_ITEMS.map((item: string) => (
            <th className="table-header">{item}</th>
          ))}
        </tr>
        {teams.map((team: Team) => (
          <tr className="table-body">
            <td>
              <div
                className="table-stripes"
                style={{ backgroundColor: SPECIAL_POSITIONS[team.position] }}
              ></div>
              <div>{team.position}</div>
            </td>
            <td className="image-box">
              <img
                src={team.logoURL}
                style={{ height: '32px', width: '32px', paddingRight: '2px' }}
              ></img>
              <div>{!isSmallScreen && team.name}</div>
              <div>{isSmallScreen && team.shortName}</div>
            </td>
            <td>{team.played}</td>
            <td>{team.won}</td>
            <td>{team.drawn}</td>
            <td>{team.lost}</td>
            <td>{team.goalsFor}</td>
            <td>{team.goalsAgainst}</td>
            <td>{team.goalDiff}</td>
            <td>{team.points}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default LeagueTable;

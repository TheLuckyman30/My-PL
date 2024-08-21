import { Team } from '../../../utils/classes/Team';
import '../../../css/components/League_Table.css';

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
  return (
    <div style={{ marginTop: '15vh' }}>
      <table
        style={{
          border: 'solid gray 2px',
          borderSpacing: '2.25rem ',
        }}
      >
        <tr className="lt-header">
          {TABLE_HEADER_ITEMS.map((item: string) => (
            <td style={{ textAlign: 'left' }}>{item}</td>
          ))}
        </tr>
        {teams.map((team: Team) => (
          <tr className="lt-container">
            <td style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '0',
                  bottom: '0',
                  width: '5px', // Adjust width as needed
                  backgroundColor:
                    SPECIAL_POSITIONS[team.position] || 'transparent',
                }}
              />
              <div>{team.position}</div>{' '}
            </td>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={team.logoURL}
                style={{ height: '32px', width: '32px', paddingRight: '2px' }}
              ></img>
              <div>{team.name}</div>
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

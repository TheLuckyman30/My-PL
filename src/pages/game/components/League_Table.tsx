import { Team } from '../../../utils/classes/Team';
import '../../../css/components/League_Table.css';

interface LeagueTableProps {
  teams: Team[];
}

const TABLE_HEADER_ITEMS: string[] = [
  'Pos',
  'Club',
  'PL',
  'W',
  'D',
  'L',
  'GD',
  'PTS',
];

const SPECIAL_POSITIONS: Record<number, string> = {
  1: '#4285F4',
  2: '#4285F4',
  3: '#4285F4',
  4: '#4285F4',
  5: '#fa7b17',
  6: '#fa7b17',
  7: '#34a853',
  18: '#fc3f3f',
  19: '#ea0035',
  20: '#ea0035',
};

function LeagueTable({ teams }: LeagueTableProps) {
  return (
    <div>
      <div className="lt-header">
        {TABLE_HEADER_ITEMS.map((item: string) => (
          <div style={{ width: '10vw' }}>{item}</div>
        ))}
      </div>
      {teams.map((team: Team) => (
        <div className="lt-container">
          <div
            style={{
              width: '0.5vw',
              background: SPECIAL_POSITIONS[team.position],
              position: 'absolute',
              left: '0',
              top: '0',
              bottom: '0',
              borderBottomLeftRadius: '15px',
              borderTopLeftRadius: '15px',
              border: `solid ${SPECIAL_POSITIONS[team.position]} 2px`,
            }}
          ></div>
          <div style={{ width: '1vw' }}></div>
          <div style={{ width: '10vw' }}>{team.position}</div>
          <div style={{ width: '10vw' }}>{team.shortName}</div>
          <div style={{ width: '10vw' }}>{team.played}</div>
          <div style={{ width: '10vw' }}>{team.won}</div>
          <div style={{ width: '10vw' }}>{team.drawn}</div>
          <div style={{ width: '10vw' }}>{team.lost}</div>
          <div style={{ width: '10vw' }}>{team.goalDiff}</div>
          <div style={{ width: '10vw' }}>{team.points}</div>
        </div>
      ))}
    </div>
  );
}

export default LeagueTable;

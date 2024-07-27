import { Team } from '../temp';

function Teams({ team }: { team: Team }) {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: '50vw',
          backgroundColor: 'tan',
          borderRadius: '5px',
          boxShadow: '5px 5px gray',
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ margin: '10px' }}>{team.name}</div>
        <div style={{ margin: '10px' }}>GF: {team.goalsFor}</div>
        <div style={{ margin: '10px' }}>GA: {team.goalsAgainst}</div>
        <div style={{ margin: '10px' }}>GD: {team.goalDiff}</div>
        <div style={{ margin: '10px' }}>PTS: {team.points}</div>
      </div>
    </div>
  );
}

export default Teams;

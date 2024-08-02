import { Match } from '../../../utils/classes/Match';

interface MatchProps {
  match: Match;
}

function Matches({ match }: MatchProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '15vh',
        width: '15vw',
        background: 'linear-gradient(120deg, #f2f2f2, #efefef)',
        borderRadius: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '30px',
      }}
    >
      <div style={{ fontSize: '15px' }}>
        {match.date?.currentMonth +
          ' ' +
          match.date?.currentDay +
          ', ' +
          match.date?.currentYear}
      </div>
      {match.homeTeam.shortName}
      {'  0  -  0  '}
      {match.awayTeam.shortName}
    </div>
  );
}

export default Matches;

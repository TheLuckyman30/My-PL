import { Match } from '../../../utils/classes/Match';
import { Team } from '../../../utils/classes/Team';
import '../../../css/components/MatchCard.css';

interface MatchProps {
  match: Match;
  setTeams: (setTeams: Team[]) => void;
}

function MatchCard({ match }: MatchProps) {
  const homeGoals = match.homeScore;
  const awayGoals = match.awayScore;
  return (
    <div className="card-container">
      <div className="card-date">
        {match.date?.currentMonth +
          ' ' +
          match.date?.currentDay +
          ', ' +
          match.date?.currentYear}
      </div>
      <div className="card-content">
        <img
          src={match.homeTeam.logoURL}
          className="card-margin"
          style={{ height: '32px', width: '32px' }}
        ></img>
        <div className="card-margin">
          {'  ' + homeGoals + '  -  ' + awayGoals + '  '}
        </div>
        <img
          src={match.awayTeam.logoURL}
          style={{ height: '32px', width: '32px' }}
        ></img>
      </div>
    </div>
  );
}

export default MatchCard;

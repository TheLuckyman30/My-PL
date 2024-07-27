import { Team } from '../League_Table_Classes';
import './Teams.css';

function Teams({ team }: { team: Team }) {
  return (
    <div className="teams-box">
      <div>{team.position}</div>
      <div>{team.shortName}</div>
      <div>{team.played}</div>
      <div>{team.won}</div>
      <div>{team.drawn}</div>
      <div>{team.lost}</div>
      <div>{team.goalDiff}</div>
      <div>{team.points}</div>
    </div>
  );
}

export default Teams;

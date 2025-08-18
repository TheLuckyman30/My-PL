import { useParams } from 'react-router-dom';
import { useTeamStore } from '../../../zustand/team-store';

const TABLE_HEADERS = ['Name'];

function Squad() {
  const teams = useTeamStore((state) => state.teams);
  const teamId = useParams<{ teamId: string }>().teamId;
  if (teamId) {
    const selectedTeam = teams.get(teamId);
    if (selectedTeam) {
      return (
        <div className="mt-30">
          <table className="text-left">
            <tr>
              {TABLE_HEADERS.map((header) => (
                <th>{header}</th>
              ))}
            </tr>
            {selectedTeam.players.map((player) => (
              <tr>
                <td>{player.name}</td>
              </tr>
            ))}
          </table>
        </div>
      );
    }
  }
}

export default Squad;

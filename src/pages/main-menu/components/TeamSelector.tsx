import { Link } from 'react-router-dom';
import { SelectionScreen } from '../../../utils/enums/selection-screens';
import { useTeamStore } from '../../../zustand/team-store';
import { User } from '../../../utils/interfaces/user';
import { useUserStore } from '../../../zustand/user-store';
import { Team } from '../../../utils/interfaces/team';
import CloseIcon from '@mui/icons-material/Close';

interface TeamSelectorProps {
  setCurrentSelectionScreen: (screen: number) => void;
}

function TeamSelector({ setCurrentSelectionScreen }: TeamSelectorProps) {
  const teams = useTeamStore((state) => state.teams);
  const setUser = useUserStore((state) => state.setUser);

  function selectTeam(selectedTeam: Team) {
    const newPlayer: User = { firstName: 'John', lastName: 'Doe', selectedTeam: selectedTeam };
    setUser(newPlayer);
  }

  return (
    <div className="fixed bg-white rounded-md p-15 shadow-2xl w-350">
      <div className="flex flex-row place-content-center">
        <div className="text-center mb-15 font-bold text-4xl w-full">Select a Team</div>
        <div
          className="cursor-pointer"
          onClick={() => setCurrentSelectionScreen(SelectionScreen.MAIN_MENU)}
        >
          <CloseIcon />
        </div>
      </div>
      <div className="flex flex-wrap gap-15">
        {teams.map((team) => (
          <Link to="/game/home" onClick={() => selectTeam(team)}>
            {team.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TeamSelector;

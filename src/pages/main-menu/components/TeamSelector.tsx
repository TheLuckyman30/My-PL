import { Link } from 'react-router-dom';
import { SelectionScreen } from '../../../utils/enums/selection-screens';
import { useTeamStore } from '../../../zustand/team-store';
import CloseIcon from '@mui/icons-material/Close';
import { usePlayerStore } from '../../../zustand/player-store';
import { Player } from '../../../utils/interfaces/temp1';

interface TeamSelectorProps {
  setCurrentSelectionScreen: (screen: number) => void;
}

function TeamSelector({ setCurrentSelectionScreen }: TeamSelectorProps) {
  const teams = useTeamStore((state) => state.teams);
  const setPlayer = usePlayerStore((state) => state.setPlayer);

  function selectTeam() {
    const newPlayer: Player = { selectedTeam: teams[0] };
    setPlayer(newPlayer);
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
          <Link to="/game/home" onClick={selectTeam}>
            {team.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TeamSelector;

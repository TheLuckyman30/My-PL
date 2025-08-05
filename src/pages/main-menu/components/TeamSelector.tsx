import { SelectionScreen } from '../../../utils/enums/selection-screens';
import { useTeamStore } from '../../../zustand/team-store';
import CloseIcon from '@mui/icons-material/Close';

interface TeamSelectorProps {
  setCurrentSelectionScreen: (screen: number) => void;
}

function TeamSelector({ setCurrentSelectionScreen }: TeamSelectorProps) {
  const teams = useTeamStore((state) => state.teams);
  return (
    <div className="fixed bg-white rounded-md p-15 shadow-2xl w-350">
      <div className="flex flex-row place-content-center">
        <div className="text-center mb-15 font-bold text-4xl w-full">Select a Team</div>
        <div
          className="cursor-pointer"
          onClick={() => setCurrentSelectionScreen(SelectionScreen.MAIN_MENU)}
        >
          <CloseIcon></CloseIcon>
        </div>
      </div>
      <div className="flex flex-wrap gap-15">
        {teams.map((team) => (
          <div>{team.name}</div>
        ))}
      </div>
    </div>
  );
}

export default TeamSelector;

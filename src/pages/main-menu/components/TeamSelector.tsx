import CloseIcon from '@mui/icons-material/Close';

interface TeamSelectorProps {
  setCurrentSelectionScreen: (screen: number) => void;
}

function TeamSelector({ setCurrentSelectionScreen }: TeamSelectorProps) {
  return (
    <div className="fixed bg-white rounded-md p-15 shadow-md">
      <div className="flex flex-row place-content-center">
        <div className="text-center mb-15 font-bold text-4xl w-full">Select a Gamemode</div>
        <div className="cursor-pointer" onClick={() => setCurrentSelectionScreen(0)}>
          <CloseIcon></CloseIcon>
        </div>
      </div>

      <div className="flex flex-row gap-15"></div>
    </div>
  );
}

export default TeamSelector;

import CloseIcon from '@mui/icons-material/Close';

interface ModeSelectorProps {
  setCurrentSelectionScreen: (screen: number) => void;
}

const GAME_MODES = [
  {
    name: 'Head Coach',
    description:
      'Take on the role of head coach of any football club of your choosing. Take your club to the very top of world football adn become the most succesful team of all time.',
  },
  {
    name: 'Spectator',
    description:
      "You will start out with no job, but that's ok. You can step into the world of football at any time you want, " +
      'or you can just sit back and watch the evolving football world around you.',
  },
];

function ModeSelector({ setCurrentSelectionScreen }: ModeSelectorProps) {
  function changeScreen() {
    setCurrentSelectionScreen(0);
  }

  return (
    <div className="fixed bg-white rounded-md p-15 shadow-md">
      <div className="flex flex-row place-content-center">
        <div className="text-center mb-15 font-bold text-4xl w-full">Select a Gamemode</div>
        <div className="cursor-pointer" onClick={changeScreen}>
          <CloseIcon></CloseIcon>
        </div>
      </div>

      <div className="flex flex-row gap-15">
        {GAME_MODES.map((mode) => (
          <div className="rounded-md p-5 shadow-md bg-stone-50 w-100 hover:-translate-y-3 duration-200 cursor-pointer">
            <div className="text-center mb-5 font-bold text-2xl">{mode.name}</div>
            <div>{mode.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModeSelector;

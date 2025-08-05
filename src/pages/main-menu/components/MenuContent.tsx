import { SelectionScreen } from '../../../utils/enums/selection-screens';

interface MenuContentProps {
  setCurrentSelectionScreen: (screen: number) => void;
}

function MenuContent({ setCurrentSelectionScreen }: MenuContentProps) {
  return (
    <>
      <div className="text-6xl font-bold">World Football Simulator</div>
      <div className="flex flex-row gap-15 text-4xl mt-20">
        <div
          className="bg-sky-500 p-3 rounded-md text-white font-bold hover:-translate-y-1 duration-200 cursor-pointer"
          onClick={() => setCurrentSelectionScreen(SelectionScreen.MODE_SELECTOR)}
        >
          New Game
        </div>
        <div className="bg-sky-800 p-3 rounded-md text-white font-bold">
          Load Game
          {/*This is currently non functional until a save system is implemented*/}
        </div>
      </div>
    </>
  );
}

export default MenuContent;

interface MenuContentProps {
  setCurrentSelectionScreen: (screen: number) => void;
}

function MenuContent({ setCurrentSelectionScreen }: MenuContentProps) {
  function changeScreen() {
    setCurrentSelectionScreen(1);
  }

  return (
    <>
      <div className="text-6xl font-bold">World Football Simulator</div>
      <div className="flex flex-row gap-15 text-4xl mt-20">
        <div
          className="bg-sky-500 p-3 rounded-md text-white font-bold cursor-pointer"
          onClick={changeScreen}
        >
          New Game
        </div>
        <div className="bg-sky-500 p-3 rounded-md text-white font-bold cursor-pointer">
          Load Game
          {/*This is currently non functional until a save system is implemented*/}
        </div>
      </div>
    </>
  );
}

export default MenuContent;

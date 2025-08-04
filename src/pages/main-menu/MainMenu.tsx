import '../../css/MainMenu.css';

function MainMenu() {
  return (
    <div className="main flex flex-col justify-center items-center">
      <div className="text-6xl font-bold">World Football Simulator</div>
      <div className="flex flex-row gap-15 text-4xl mt-20">
        <div className="bg-sky-500 p-3 rounded-md text-white font-bold cursor-pointer">
          New Game
        </div>
        <div className="bg-sky-500 p-3 rounded-md text-white font-bold cursor-pointer">
          Load Game
          {/*This is currently non functional until a save system is implemented*/}
        </div>
      </div>
    </div>
  );
}

export default MainMenu;

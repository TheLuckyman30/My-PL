import '../../css/MainMenu.css';

function MainMenu() {
  return (
    <div className="main flex flex-col justify-center items-center">
      <div className="text-6xl font-bold">World Football Simulator</div>
      <div className="flex flex-row gap-15 text-4xl mt-20">
        <div>New Save</div>
        <div>Load Save</div>
      </div>
    </div>
  );
}

export default MainMenu;

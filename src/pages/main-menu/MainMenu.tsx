import { useState } from 'react';
import '../../css/MainMenu.css';
import ModeSelector from './components/ModeSelector';
import MenuContent from './components/MenuContent';

function MainMenu() {
  const [currentSelectionScreen, setCurrentSelectionScreen] = useState<Number>(0);

  return (
    <div className="main flex flex-col justify-center items-center">
      <MenuContent setCurrentSelectionScreen={setCurrentSelectionScreen}></MenuContent>
      {currentSelectionScreen === 1 && <ModeSelector></ModeSelector>}
    </div>
  );
}

export default MainMenu;

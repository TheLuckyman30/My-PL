import { useState } from 'react';
import '../../css/MainMenu.css';
import ModeSelector from './components/ModeSelector';
import MenuContent from './components/MenuContent';
import TeamSelector from './components/TeamSelector';
function MainMenu() {
  const [currentSelectionScreen, setCurrentSelectionScreen] = useState<number>(0);

  return (
    <div className="main flex flex-col justify-center items-center">
      <MenuContent setCurrentSelectionScreen={setCurrentSelectionScreen}></MenuContent>
      {currentSelectionScreen === 1 && (
        <ModeSelector setCurrentSelectionScreen={setCurrentSelectionScreen}></ModeSelector>
      )}
      {currentSelectionScreen === 2 && (
        <TeamSelector setCurrentSelectionScreen={setCurrentSelectionScreen}></TeamSelector>
      )}
    </div>
  );
}

export default MainMenu;

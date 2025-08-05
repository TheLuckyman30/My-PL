import { useState } from 'react';
import { SelectionScreen } from '../../utils/enums/selection-screens';
import ModeSelector from './components/ModeSelector';
import MenuContent from './components/MenuContent';
import TeamSelector from './components/TeamSelector';
import '../../css/MainMenu.css';

function MainMenu() {
  const [currentSelectionScreen, setCurrentSelectionScreen] = useState<SelectionScreen>(
    SelectionScreen.MAIN_MENU
  );

  return (
    <div className="main flex flex-col justify-center items-center">
      <MenuContent setCurrentSelectionScreen={setCurrentSelectionScreen}></MenuContent>
      {currentSelectionScreen === SelectionScreen.MODE_SELECTOR && (
        <ModeSelector setCurrentSelectionScreen={setCurrentSelectionScreen}></ModeSelector>
      )}
      {currentSelectionScreen === SelectionScreen.TEAM_SELECTOR && (
        <TeamSelector setCurrentSelectionScreen={setCurrentSelectionScreen}></TeamSelector>
      )}
    </div>
  );
}

export default MainMenu;

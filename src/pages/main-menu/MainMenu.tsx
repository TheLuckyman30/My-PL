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
      <MenuContent setCurrentSelectionScreen={setCurrentSelectionScreen} />
      {currentSelectionScreen === SelectionScreen.MODE_SELECTOR && (
        <ModeSelector setCurrentSelectionScreen={setCurrentSelectionScreen} />
      )}
      {currentSelectionScreen === SelectionScreen.TEAM_SELECTOR && (
        <TeamSelector setCurrentSelectionScreen={setCurrentSelectionScreen} />
      )}
    </div>
  );
}

export default MainMenu;

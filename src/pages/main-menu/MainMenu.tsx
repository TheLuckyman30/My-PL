import { useTeamStore } from '../../zustand/team-store';

function MainMenu() {
  const teams = useTeamStore((state) => state.teams);
  return <div>{teams[1].name}</div>;
}

export default MainMenu;

import { useParams } from 'react-router-dom';
import Home from './home/Home';
import NavBar from './NavBar';
import Squad from './squad/Squad';

function GamePageLoader() {
  const urlParam = useParams<{ pageId: string }>();
  const pageId = urlParam.pageId;

  function chooseComponent() {
    switch (pageId) {
      case 'home':
        return <Home />;
      case 'squad':
        return <Squad />;
      default:
        return <div>Not Found</div>;
    }
  }

  return (
    <div className="h-lvh w-lvw">
      <NavBar />
      {chooseComponent()}
    </div>
  );
}

export default GamePageLoader;

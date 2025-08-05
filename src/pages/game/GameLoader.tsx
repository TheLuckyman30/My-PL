import { useParams } from 'react-router-dom';
import Home from './home/Home';
import NavBar from './home/components/NavBar';

function GamePageLoader() {
  const urlParam = useParams<{ pageId: string }>();
  const pageId = urlParam.pageId;

  function chooseComponent() {
    switch (pageId) {
      case 'home':
        return <Home />;
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

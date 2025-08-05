import { useParams } from 'react-router-dom';
import Home from './home/Home';

function GamePageLoader() {
  const urlParam = useParams<{ pageId: string }>();
  const pageId = urlParam.pageId;

  switch (pageId) {
    case 'home':
      return <Home />;
    default:
      return <div>Not Found</div>;
  }
}

export default GamePageLoader;

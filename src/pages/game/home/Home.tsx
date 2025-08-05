import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="grid grid-cols-2 h-lvh">
      <div>
        <Link to="/">Main Menu</Link>
        <div>Date</div>
        <div>Team Info</div>
      </div>
      <div>League Info</div>
    </div>
  );
}

export default Home;

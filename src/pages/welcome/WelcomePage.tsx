import { Button } from '@mui/material';
import './WelcomePage.css';

function WelcomePage() {
  return (
    <div className="welcome-background w-text">
      <div>Welcome to the Premier Leauge</div>
      <Button variant="contained" href="/LeagueTable">
        League Table
      </Button>
    </div>
  );
}

export default WelcomePage;

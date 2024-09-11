import { Button } from '@mui/material';
import '../../css/pages/WelcomePage.css';

function WelcomePage() {
  return (
    <div className="w-background w-text">
      <div>Welcome to the Premier Leauge</div>
      <Button variant="contained" href="/My-PL/LeagueTable">
        League Table
      </Button>
    </div>
  );
}

export default WelcomePage;

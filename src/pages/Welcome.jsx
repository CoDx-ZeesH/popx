import { useNavigate } from 'react-router-dom';
import MobileContainer from '../components/MobileContainer.jsx';
import Button from '../components/Button.jsx';
import '../css/Welcome.css';

/**
 * Page 1 - Welcome Screen
 * Entry point of the app. Routes the user to either Register or Login.
 */
function Welcome() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="welcome">
        {/* Decorative hero area (brand accent shapes) */}
        <div className="welcome__hero" aria-hidden="true">
          <span className="welcome__blob welcome__blob--1" />
          <span className="welcome__blob welcome__blob--2" />
          <span className="welcome__blob welcome__blob--3" />
        </div>

        <div className="welcome__content">
          <h1 className="welcome__title">Welcome to PopX</h1>
          <p className="welcome__subtitle">
            Your go-to platform for amazing content and experiences. Get started today!
          </p>

          <div className="welcome__actions">
            <Button variant="primary" onClick={() => navigate('/register')}>
              Create Account
            </Button>
            <Button variant="secondary" onClick={() => navigate('/login')}>
              Already Registered? Login
            </Button>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}

export default Welcome;

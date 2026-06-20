import { useEffect, useState } from 'react';
import MobileContainer from '../components/MobileContainer.jsx';
import '../css/Profile.css';

// Fallback shown if the user lands here without registering first
// (e.g. they used the Login flow directly).
const DEFAULT_USER = {
  name: 'Marry Doe',
  email: 'marry@gmail.com',
};

/**
 * Page 4 - Account Settings Screen
 * Reads the registered user's name/email from localStorage and
 * displays them alongside a generic avatar and bio text.
 */
function Profile() {
  const [user, setUser] = useState(DEFAULT_USER);

  useEffect(() => {
    const stored = localStorage.getItem('popx_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        setUser(DEFAULT_USER);
      }
    }
  }, []);

  return (
    <MobileContainer>
      <div className="profile">
        <header className="profile__header">Account Settings</header>

        <div className="profile__card">
          <div className="profile__avatar-wrap">
            {/* Generic placeholder avatar - no real photo is used */}
            <div className="profile__avatar">
              <svg viewBox="0 0 24 24" width="100%" height="100%">
                <circle cx="12" cy="9" r="4" fill="#c9c9d6" />
                <path d="M3.5 21c0-4.142 3.806-7.5 8.5-7.5s8.5 3.358 8.5 7.5" fill="#c9c9d6" />
              </svg>
            </div>
            <span className="profile__camera">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 8h3l1.5-2h7L17 8h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"
                  stroke="#ffffff"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="14" r="3.2" stroke="#ffffff" strokeWidth="1.6" />
              </svg>
            </span>
          </div>

          <div className="profile__info">
            <h2 className="profile__name">{user.name}</h2>
            <p className="profile__email">{user.email}</p>
          </div>
        </div>

        <p className="profile__bio">
          Welcome to your PopX profile! This is your personal space where you can manage your account settings and preferences. Keep your information up-to-date to get the best experience.
        </p>

        <div className="profile__placeholder" />
      </div>
    </MobileContainer>
  );
}

export default Profile;

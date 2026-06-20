import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';

/**
 * Root application component.
 * Defines all client-side routes for the PopX flow:
 *   "/"          -> Welcome screen
 *   "/login"     -> Login screen
 *   "/register"  -> Create account screen
 *   "/profile"   -> Account settings screen
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;

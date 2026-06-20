import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileContainer from '../components/MobileContainer.jsx';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';
import '../css/Login.css';

/**
 * Page 2 - Login Screen
 * Simple client-side form. There is no backend in this assignment,
 * so a successful "login" just requires both fields to be filled
 * before navigating to the Account Settings page.
 */
function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = form.email.trim() !== '' && form.password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    navigate('/profile');
  };

  return (
    <MobileContainer>
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">
          Signin to your <br /> PopX account
        </h1>
        <p className="login__subtitle">
          Welcome back! Sign in with your email and password to continue.
        </p>

        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter email address"
          value={form.email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />

        <div className="login__action">
          <Button type="submit" variant="primary" disabled={!isValid}>
            Login
          </Button>
        </div>
      </form>
    </MobileContainer>
  );
}

export default Login;

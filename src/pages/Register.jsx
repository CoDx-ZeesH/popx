import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileContainer from '../components/MobileContainer.jsx';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';
import '../css/Register.css';

/**
 * Page 3 - Register Screen
 * Collects the new account's details. On submit, the user's name and
 * email are persisted to localStorage so the Account Settings page
 * can display them.
 */
function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isValid =
    form.fullName.trim() !== '' &&
    form.phone.trim() !== '' &&
    form.email.trim() !== '' &&
    form.password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    // Persist only what the Account Settings page needs to display
    localStorage.setItem(
      'popx_user',
      JSON.stringify({ name: form.fullName, email: form.email })
    );

    navigate('/profile');
  };

  return (
    <MobileContainer>
      <form className="register" onSubmit={handleSubmit}>
        <div className="register__scroll">
          <h1 className="register__title">
            Create your <br /> PopX account
          </h1>

          <InputField
            label="Full Name"
            required
            name="fullName"
            placeholder="Enter full name"
            value={form.fullName}
            onChange={handleChange}
          />
          <InputField
            label="Phone number"
            required
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
          />
          <InputField
            label="Email address"
            required
            name="email"
            type="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            required
            name="password"
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
          <InputField
            label="Company name"
            name="companyName"
            placeholder="Enter company name"
            value={form.companyName}
            onChange={handleChange}
          />

          <div className="register__radio-group">
            <span className="register__radio-label">
              Are you an Agency?<span className="register__asterisk"> *</span>
            </span>
            <div className="register__radio-options">
              <label className="register__radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={form.isAgency === 'yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="register__radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={form.isAgency === 'no'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
        </div>

        <div className="register__footer">
          <Button type="submit" variant="primary" disabled={!isValid}>
            Create Account
          </Button>
        </div>
      </form>
    </MobileContainer>
  );
}

export default Register;

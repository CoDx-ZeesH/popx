import '../css/Button.css';

/**
 * Reusable Button component used across all PopX screens.
 *
 * @param {React.ReactNode} children - Button label/content
 * @param {() => void} onClick - Click handler
 * @param {'button'|'submit'} type - Native button type
 * @param {'primary'|'secondary'} variant - Visual style
 *   primary   -> solid purple button (e.g. "Create Account", "Login")
 *   secondary -> light purple/outline button (e.g. "Already Registered? Login")
 * @param {boolean} disabled - Disables the button and shows the grey "inactive" state
 */
function Button({ children, onClick, type = 'button', variant = 'primary', disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn--${variant}`}
    >
      {children}
    </button>
  );
}

export default Button;

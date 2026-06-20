import '../css/InputField.css';

/**
 * Reusable labelled input field used on the Login and Register screens.
 *
 * @param {string} label - Field label rendered above the input
 * @param {boolean} required - Shows a red asterisk next to the label
 * @param {string} type - Native input type (text, email, password, tel, ...)
 * @param {string} placeholder - Placeholder text
 * @param {string} name - Field name, also used as the htmlFor/id pairing
 * @param {string} value - Controlled value
 * @param {(e: React.ChangeEvent) => void} onChange - Change handler
 */
function InputField({
  label,
  required = false,
  type = 'text',
  placeholder = '',
  name,
  value,
  onChange,
}) {
  return (
    <div className="input-field">
      {label && (
        <label htmlFor={name} className="input-field__label">
          {label}
          {required && <span className="input-field__asterisk"> *</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field__control"
        autoComplete="off"
      />
    </div>
  );
}

export default InputField;

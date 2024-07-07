import { useState } from 'react';
import styles from './PhoneNumberInput.module.scss';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
    if (e.target.value.length !== 10) {
      setError('A 10 digit phone number is required');
    } else {
      setError('');
    }
  };

  const handleSubmit = () => {
    if (phoneNumber.length !== 10) {
      setError('A 10 digit phone number is required');
    } else {
      setError('');
    }
  };

  return (
    <div className={styles.phoneNumberInputSection}>
      <div className={styles.inputContainer}>
        <span className={styles.countryCode}>+1</span>
        <input
          type="text"
          value={phoneNumber}
          onChange={handleChange}
          placeholder="10 digit phone number"
        />
      </div>
      <button className={styles.proceedButton} onClick={handleSubmit}>
        Proceed securely
      </button>
      {error && <div className={styles.errorMessage}>{error}</div>}
      <div className={styles.separator}>or</div>
      <button className={styles.googleSignIn}>
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" />
        Sign in with Google
      </button>
      <div className={styles.terms}>
        By proceeding, you agree to our <a href="/terms">Terms of Use</a> & <a href="/privacy">Privacy Policy</a>
      </div>
    </div>
  );
};

export default PhoneNumberInput;

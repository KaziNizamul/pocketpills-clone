import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <img src="/path/to/logo.png" alt="Pocketpills Logo" />
      </div>
      <div className={styles.menu}>
        <a href="#for-you">For you</a>
        <a href="#for-employers">For Employers</a>
      </div>
      <div className={styles.actions}>
        <div className={styles.languageSelector}>
          <span>EN</span>
          <span className={styles.dropdownArrow}>▼</span>
        </div>
        <button className={styles.login}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;

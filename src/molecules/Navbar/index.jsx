/* eslint-disable react/prop-types */
import styles from './Navbar.module.scss';

const Navbar = ({ children }) => {
  return (
    <div className={styles.navbar}>
      {children}
    </div>
  );
};

export default Navbar;

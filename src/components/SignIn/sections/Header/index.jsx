import styles from '../../SignIn.module.scss';

const Header = () => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.tagLine}>
        <div className={styles.mainLine}> Your Online Pharmacy </div>
        <div className={styles.subLine}> Free medication delivery. Easy access to pharmacists. Anywhere in Canada. </div>
      </div>
    </div>
  );
}
 
export default Header;
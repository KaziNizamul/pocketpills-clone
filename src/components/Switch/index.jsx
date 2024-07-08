import styles from './Switch.module.scss';

const Switch = () => {
  return (
    <div className={styles.switchSection}>
      <div className={styles.content}>
        <h2>Make the switch to Pocketpills</h2>
        <button className={styles.button}>
          Become a Member
          <br />
          <span>{`(It's free)`}</span>
        </button>
        <p>Prefer to sign up over the phone?</p>
        <p>{`Our care team can't wait to take your call!`}</p>
        <div className={styles.phone}>
          <span className={styles.phoneIcon}>📞</span>
          <span>+1 855-950-7225</span>
        </div>
      </div>
    </div>
  );
};

export default Switch;
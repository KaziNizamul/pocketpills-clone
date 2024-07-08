import styles from './GettingStarted.module.scss';

const GettingStarted = () => {
  return (
    <div className={styles.gettingStartedSection}>
      <h2>Getting started is as easy as 1 - 2</h2>
      <p>{`(it's so simple we don't need the 3)`}</p>
      <div className={styles.steps}>
        <div className={styles.step}>
          <img src="https://static.pocketpills.com/webapp/rebrand/landing/hiw-1.webp" alt="Step 1" />
          <h3>Step 1</h3>
          <h4>Sign up online with your phone, tablet, or computer.</h4>
          <p>{`It only takes a few seconds to become a member. A couple clicks, a little typing, and you're done!`}</p>
        </div>
        <div className={styles.step}>
          <img src="https://static.pocketpills.com/webapp/rebrand/landing/hiw-2.webp" alt="Step 2" />
          <h3>Step 2</h3>
          <h4>Kick back and relax while we sort out the details.</h4>
          <p>{`We'll reach out to your old pharmacy to get your prescriptions and prepare your medications for next-day delivery* (oh, delivery is free by the way).`}</p>
        </div>
        <div className={styles.step}>
          <img src="https://static.pocketpills.com/webapp/rebrand/landing/hiw-3.webp" alt="Step 3" />
          <h3>Step 3</h3>
          <h4>{`Do whatever you like. Seriously, you're already done.`}</h4>
          <p>Get back to your life with the peace of mind that your medications are on the way.</p>
        </div>
      </div>
      <p className={styles.restriction}>*Some restrictions may apply</p>
    </div>
  );
};

export default GettingStarted;

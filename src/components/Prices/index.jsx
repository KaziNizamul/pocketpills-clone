import styles from './Prices.module.scss';

const Prices = () => {
  return (
    <div className={styles.container}>
      <div className={styles.roundedContainer}>
        <h1 className={styles.header}>Think our prices are too good to be true?</h1>
        <p className={styles.subHeader}>We think nothing is too good for you.</p>
        <p className={styles.description}>
          Shop for prescription (Rx) and over-the-counter (OTC) medications online with transparent pricing and calculate your copay with no hidden fees.
        </p>
        <input type="text" placeholder="Search medications" className={styles.searchInput} />
        <div className={styles.popularSearches}>
          <span className={styles.popularSearchesTitle}>Popular Searches:</span>
          <div className={styles.tags}>
            <span>Ozempic</span>
            <span>Finasteride</span>
            <span>Jardiance</span>
            <span>Escitalopram</span>
            <span>Sertraline</span>
            <span>Trintellix</span>
            <span>Janumet</span>
            <span>Alysena</span>
            <span>Bupropion</span>
            <span>Fluoxetine</span>
            <span>Alesse</span>
            <span>Duloxetine</span>
            <span>Symbicort</span>
            <span>Eliquis</span>
            <span>Pantoprazole</span>
            <span>Desvenlafaxine</span>
            <span>Dutasteride</span>
            <span>Synthroid</span>
            <span>Januvia</span>
            <span>View more drugs</span>
          </div>
        </div>
        <p className={styles.note}>Cost may be subsidized by your provincial or private health plan.</p>
      </div>
      <button className={styles.getStartedButton}>
        <span className={styles.getStartedText}>Get Started</span>
        <br />
        <span className={styles.getStartedSubText}>It only takes a few seconds</span>
      </button>
    </div>
  );
};

export default Prices;
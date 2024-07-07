/* eslint-disable react/prop-types */
import { useState } from 'react';
import Navbar from '../Navbar';
import withScroll from '../../hoc/withScroll';
import styles from '../Navbar/Navbar.module.scss';

// eslint-disable-next-line react-refresh/only-export-components
const EnhancedNavbar = (props) => {
  const [activeDropdown, setActiveDropdown] = useState('forEmployers');

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown('forEmployers');
  };

  return (
    <Navbar>
      <div className={`${styles.container} ${props.scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>
          <img src="https://static.pocketpills.com/webapp/images/logo/logo-full.webp" alt="Pocketpills Logo" />
        </div>
        <div className={styles.menu}>
          <div 
            className={styles.menuItem} 
            onMouseEnter={() => handleMouseEnter('forYou')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#for-you">For you</a>
            {activeDropdown === 'forYou' && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownContent}>
                  <div className={styles.dropdownItem}>
                    <img src="https://static.pocketpills.com/webapp/images/enterprise/navbar_how_it_works.webp" alt="How it works" />
                    <span>How it works</span>
                  </div>
                  <div className={styles.dropdownItem}>
                    <img src="https://static.pocketpills.com/webapp/images/enterprise/navbar_drugs.webp" alt="Drugs" />
                    <div className={styles.dropdownItemDrugs}>
                      <span className={styles.drugSpan}>Drugs</span>
                      <div className={styles.drugsList}>
                        <span className={styles.drugItem}>Ozempic</span>
                        <span className={styles.drugItem}>Escitalopram</span>
                        <span className={styles.drugItem}>Janumet</span>
                        <span className={styles.drugItem}>Finasteride</span>
                        <span className={styles.drugItem}>Sertraline</span>
                        <span className={styles.drugItem}>Alysena</span>
                        <span className={styles.drugItem}>Jardiance</span>
                        <span className={styles.drugItem}>Trintellix</span>
                        <span className={styles.drugItem}>Bupropion</span>
                        <a className={styles.seeMore} href="#see-more">See More Drugs</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div 
            className={styles.menuItem} 
            onMouseEnter={() => handleMouseEnter('forEmployers')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#for-employers">For Employers</a>
            {activeDropdown === 'forEmployers' && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownContent}>
                  <div className={styles.dropdownItem}>
                    <div className={styles.dropdownItemText}>
                      <span className={styles.benefitTitle}>Your prescription for savings!</span>
                      <p className={styles.benefitText}>Partner with Canada online pharmacy to reduce plan costs and enhance employee health.</p>
                      <span className={styles.connectText}>Connect with us</span>
                    </div>
                    <div className={styles.dropdownItemImage}>
                      <span className={styles.offeringTitle}>Our offerings</span>
                      <div className={styles.offeringList}>
                        <img src="https://static.pocketpills.com/webapp/images/enterprise/lower_benefit_costs.webp" alt="Lower group benefit costs" />
                        <span>Lower group benefit costs</span>
                      </div>
                      <div className={styles.offeringList}>
                        <img src="https://static.pocketpills.com/webapp/images/enterprise/savings_calculator.webp" alt="Free savings estimate" />
                        <span>Free savings estimate</span>
                      </div>
                      <a className={styles.learnMore} href="#learn-more">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.languageSelector}>
            <span>EN</span>
            <span className={styles.dropdownArrow}>▼</span>
          </div>
          <button className={styles.login}>Login</button>
        </div>
      </div>
    </Navbar>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default withScroll(EnhancedNavbar);

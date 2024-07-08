import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img
        src="https://static.pocketpills.com/webapp/images/logo/logo-full-vertical.webp"
        alt="image-logo"
        height={52}
        width={52}
        style={{
          margin: '2.5rem 0 2rem'
        }}
      />
      <div className={styles.navigation}>
        <div className={styles.navColumn}>
          <h3>Explore</h3>
          <ul>
            <li>Our services</li>
            <li>How it works</li>
            <li>Search Drug prices</li>
            <li>Health articles</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>What are over the counter medications?</li>
          </ul>
        </div>
        <div className={styles.navColumn}>
          <h3>Drugs</h3>
          <ul>
            <li>Ozempic</li>
            <li>Finasteride</li>
            <li>Escitalopram</li>
            <li>Jardiance</li>
            <li>Sertraline</li>
            <li>Trintellix</li>
            <li>Janumet</li>
            <li>Alysena</li>
            <li>See More Drugs</li>
          </ul>
        </div>
        <div className={styles.navColumn}>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Info for caregivers</li>
            <li>Sitemap</li>
            <li>Security</li>
            
            <img src="https://static.pocketpills.com/webapp/rebrand/landing/logo_soc2.webp" height={130} width={130} alt="App Store" />
          </ul>
        </div>
        <div className={styles.navColumn}>
          <h3>Get The App</h3>
          <ul>
            <li>
              <img src="https://static.pocketpills.com/webapp/img/new-ui/employer-landing/app-store-download@2x.webp" height={40} width={134} alt="App Store" />
            </li>
            <li>
              <img src="https://static.pocketpills.com/webapp/img/new-ui/employer-landing/play-store-download@2x.webp" height={40} width={134} alt="Google Play" />
            </li>
          </ul>
          <div>
            <img src="https://static.legitscript.com/seals/365974.png" height={120} width={140} alt="Accreditation" />
          </div>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerColumn}>
          <h3>Some areas we serve are:</h3>
          <table>
            <thead>
              <tr>
                <th>Province</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ontario</td>
                <td>Toronto</td>
              </tr>
              <tr>
                <td>British Columbia</td>
                <td>Vancouver</td>
              </tr>
              <tr>
                <td>Alberta</td>
                <td>Calgary</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        <div className={styles.footerColumn}>
          <h3>Drug comparisons</h3>
          <ul>
            <li>Saxenda vs Ozempic</li>
            <li>Cialis vs generic Tadalafil</li>
            <li>Victoza vs Ozempic</li>
            {/* Add more items as needed */}
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Popular Articles</h3>
          <ul>
            <li>What foods to avoid when taking Ozempic?</li>
            <li>How to reduce the side effects of Finasteride?</li>
            <li>What are the most common side effects of Ozempic?</li>
            {/* Add more items as needed */}
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Recent Articles</h3>
          <ul>
            <li>Ozempic Vs. Mounjaro: What is the difference?</li>
            <li>{`Past TikTok hype: It's time to take GLP-1 medications seriously.`}</li>
            <li>Ozempic is the latest weight loss trend among celebrities.</li>
            {/* Add more items as needed */}
          </ul>
        </div>
      </div>
      <div className={styles.contactSection}>
        <h3>Pocketpills Care Team</h3>
        <p>+1 855-950-7225</p>
        <p>care@pocketpills.com</p>
        <p>Fax: 1-855-950-7226</p>
        <p>Mon-Sat: 9:00 AM - 7:00 PM, EST</p>
        <div className={styles.pharmacyLocations}>
          <div className={styles.pharmacy}>
            <h4>Pocketpills - Canada Pharmacy (West)</h4>
            <p>Delivering to: British Columbia (BC), Alberta (AB), Northwest Territories (NT), Yukon (YT)</p>
            <p>108 - 5433 152 St, Surrey BC, V3S 5A5</p>
          </div>
          <div className={styles.pharmacy}>
            <h4>Pocketpills - Canada Pharmacy (Atlantic)</h4>
            <p>Delivering to: Nova Scotia (NS), New Brunswick (NB), Newfoundland and Labrador (NL), Prince Edward Island (PEI)</p>
            <p>Unit 2 - 170 Joseph Zatzman Drive Dartmouth NS, B3B 1L9</p>
          </div>
          <div className={styles.pharmacy}>
            <h4>Pocketpills - Canada Pharmacy (East)</h4>
            <p>Delivering to: Ontario (ON)</p>
            <p>Unit 6 - 6375 Dixie Rd, Mississauga, ON, L5T 2E7</p>
          </div>
        </div>
        <div className={styles.accreditation}>
          <h4>Member of:</h4>
          <img src="https://static.pocketpills.com/webapp/rebrand/landing/pharmacy-association.png" alt="Pharmacy Association" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

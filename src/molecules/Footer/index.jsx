import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div className={styles.backgroundImage}>
      </div>
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
                  <td>Montreal</td>
                </tr>
                <tr>
                  <td>Columbia</td>
                  <td>Calgary</td>
                </tr>
                <tr>
                  <td>Quebec</td>
                  <td>Vancouver</td>
                </tr>
                <tr>
                  <td>Alberta</td>
                  <td>Winnipeg</td>
                </tr>
                <tr>
                  <td>Nova Scotia</td>
                  <td>Ottawa</td>
                </tr>
              </tbody>
            </table>
            <h3>And Many More</h3>
          </div>
          <div className={styles.footerColumn}>
            <h3>Drug comparisons</h3>
            <ul>
              <li>Saxenda vs Ozempic</li>
              <li>Cialis vs generic Tadalafil</li>
              <li>Victoza vs Ozempic</li>
              <li>Viagra vs Cialis</li>
              <li>Victoza vs Saxenda</li>
              <li>See More Drugs Comparisons</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Popular Articles</h3>
            <ul>
              <li>What foods to avoid when taking Ozempic? Metformin, Vitamins. Weight Loss</li>
              <li>How to reduce the side effects of Finasteride? EXPLAINED</li>
              <li>What are the most common side effects of Ozempic & how to manage them?</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Recent Articles</h3>
            <ul>
              <li>Ozempic Vs. Mounjaro: What is the difference?</li>
              <li>{`Past TikTok hype: It's time to take GLP-1 medications seriously. This market is expected to reach $6 billion by 2031.`}</li>
              <li>Ozempic is the latest weight loss trend among celebrities, but is it healthy?</li>
              <li>Sertraline (Zoloft) Weight gain or loss: What side effects to expect when stopping treatment?</li>
              <li>Ozempic vs. Trulicity: Side effects, results, price, and ease of use</li>
            </ul>
          </div>
        </div>
        <div className={styles.contactSection}>
          <h3>Pocketpills Care Team</h3>
          <div className={styles.details}>
            <div className={styles.phoneDate}>
              <p className={styles.phone}>+1 855-950-7225</p>
              <p className={styles.date}>Mon-Sat: 9:00 AM - 7:00 PM, EST</p>
            </div>
            <div className={styles.emailFax}>
              <p className={styles.email}>care@pocketpills.com</p>
              <p className={styles.fax}>Fax: 1-855-950-7226</p>
            </div>
            <div className={styles.intro}>
              Pocketpills is helping Canadians stay healthy by making medication easier to access and manage.
            </div>
          </div>
          <div className={styles.pharmacyLocations}>
            <div className={styles.pharmacy}>
              <h4>Pocketpills - Canada Pharmacy (West)</h4>
              <p className={styles.deliveringTo}>Online Pharmacy Delivering to: </p>
              <p className={styles.places}> British Columbia (BC) | Alberta (AB) | Northwest Territories (NT) | Yukon (YT)</p>
              <p className={styles.address}>108 - 5433 152 St, Surrey BC, V3S 5A5</p>
              <p>Pocketpills is licensed by College of Pharmacists of British Columbia</p>
              <p>Accreditation #: 10333</p>
              <p>Pharmacy Manager: Min Woo Kim</p>
            </div>
            <div className={styles.pharmacy}>
              <h4>Pocketpills - Canada Pharmacy (Atlantic)</h4>
              <p className={styles.deliveringTo}>Online Pharmacy Delivering to: </p>
              <p className={styles.places}>Nova Scotia (NS) | New Brunswick (NB) | Newfoundland and Labrador (NL) |  Prince Edward Island (PEI)</p>
              <p className={styles.address}>Unit 2 - 170 Joseph Zatzman Drive Dartmouth NS, B3B 1L9</p>
              <p>Pocketpills is licensed by Nova Scotia College of Pharmacists</p>
              <p>Accreditation #: 10333</p>
              <p>Pharmacy Manager: Matt Parker</p>
            </div>
            <div className={styles.pharmacy}>
              <h4>Pocketpills - Canada Pharmacy (East)</h4>
              <p className={styles.deliveringTo}>Online Pharmacy Delivering to: </p>
              <p className={styles.places}>Ontario (ON)</p>
              <p className={styles.address}>Unit 6 - 6375 Dixie Rd, Mississauga, ON, L5T 2E7</p>
              <p>Pocketpills is licensed by Ontario College of Pharmacists</p>
              <p>Accreditation #: 10333</p>
              <p>Pharmacy Manager: Jasneet Dulai</p>
            </div>
          </div>
          <div className={styles.accreditation}>
            <div className={styles.memberOf}>
              <h4>Member of:</h4>
              <div className={styles.memberOfImg}>
                <img src="https://static.pocketpills.com/landingpage/img/footer-logo-nabp-2018.webp" width={120} height={34} alt="Pharmacy Association" />
                <img src="https://static.pocketpills.com/landingpage/img/bc_assoc.webp" width={150} height={39} alt="Pharmacy Association" />
                <img src="https://static.pocketpills.com/landingpage/img/opa.webp" width={140} height={52} alt="Pharmacy Association" />
              </div>
            </div>
            <div className={styles.licensedBy}>
              <h4>Licensed by:</h4>
              <div className={styles.licensedByImg}>
                <img src="https://static.pocketpills.com/landingpage/img/bc_coll.webp" width={60} height={64} alt="Pharmacy Association" />
                <img src="https://static.pocketpills.com/landingpage/img/ON_college.webp" width={75} height={68} alt="Pharmacy Association" />
                <img src="https://static.pocketpills.com/landingpage/img/nccp.webp" width={120} height={58} alt="Pharmacy Association" />
              </div>
            </div>
          </div>
          <div className={styles.bottomFooter}>
            Required in all British Columbia Pharmacies. Pharmacy practice issues may be reported to the College of Pharmacists of BC
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

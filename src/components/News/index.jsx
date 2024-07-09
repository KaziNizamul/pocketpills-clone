/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import styles from './News.module.scss';
import vancouverSunLogo from '../../../public/assets/vancouver_sun.png';
import winnipegFreePressLogo from '../../../public/assets/winnipeg-free-press-logo.webp';
import ctvNewsLogo from '../../../public/assets/ctv-news-logo.webp';
import mobileSyrupLogo from '../../../public/assets/mobile-syrup-logo.webp';
import financialPostLogo from '../../../public/assets/financial-post-logo.webp';

const newsPhrases = {
  "Vancouver Sun": '"Reinvent the pharmacy experience"',
  "Winnipeg Free Press": '"Pocketpills aims to be the Uber of pharmacies"',
  "CTV News": '"Pocketpills makes medication management easy"',
  "mobilesyrup": '"Pocketpills takes the hassle out of going to the pharmacy"',
  "Financial Post": '"Pocketpills has established itself as Canada’s leading online pharmacy"',
};

const News = () => {
  const [selectedPhrase, setSelectedPhrase] = useState('"Pocketpills takes the hassle out of going to the pharmacy"');
  const [clickedLogos, setClickedLogos] = useState({});

  const handleClick = (newsOutlet) => {
    setSelectedPhrase(newsPhrases[newsOutlet]);
    setClickedLogos(prevState => ({ ...prevState, [newsOutlet]: true }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <p className={styles.phrase}>{selectedPhrase}</p>
        <div className={styles.newsOutlets}>
          <img src={vancouverSunLogo} alt="Vancouver Sun" className={`${styles.logo} ${clickedLogos["Vancouver Sun"] ? 'clicked' : ''}`} onClick={() => handleClick("Vancouver Sun")} />
          <img src={winnipegFreePressLogo} alt="Winnipeg Free Press" className={`${styles.logo} ${clickedLogos["Winnipeg Free Press"] ? 'clicked' : ''}`} onClick={() => handleClick("Winnipeg Free Press")} />
          <img src={ctvNewsLogo} alt="CTV News" className={`${styles.logo} ${clickedLogos["CTV News"] ? 'clicked' : ''}`} onClick={() => handleClick("CTV News")} />
          <img src={mobileSyrupLogo} alt="mobilesyrup" className={`${styles.logo} ${clickedLogos["mobilesyrup"] ? 'clicked' : ''}`} onClick={() => handleClick("mobilesyrup")} />
          <img src={financialPostLogo} alt="Financial Post" className={`${styles.logo} ${clickedLogos["Financial Post"] ? 'clicked' : ''}`} onClick={() => handleClick("Financial Post")} />
        </div>
      </div>
    </div>
  );
};

export default News;
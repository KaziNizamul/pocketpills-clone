import styles from './CareYouDeserve.module.scss';

const CareYouDeserve = () => {
  const features = [
    {
      img: "https://static.pocketpills.com/webapp/rebrand/landing/usp-delivery.webp",
      title: "Free Delivery",
      description: "Your medication is delivered directly to you at no added cost. We even offer same-day delivery in select locations."
    },
    {
      img: "https://static.pocketpills.com/webapp/rebrand/landing/usp-packaging.webp",
      title: "Discreet Packaging",
      description: "Your privacy is important. That's why we send your medication inside a plain delivery box so no one will know what's inside."
    },
    {
      img: "https://static.pocketpills.com/webapp/rebrand/landing/usp-support.webp",
      title: "We're Here for You",
      description: "Our pharmacists are happy to answer your questions. Get in touch by phone, text or email."
    },
    {
      img: "https://static.pocketpills.com/webapp/rebrand/landing/usp-refills.webp",
      title: "Automatic Refills",
      description: "We manage your refills and get in touch with your doctors for prescription renewals, so that you always have the medication you need."
    },
    {
      img: "https://static.pocketpills.com/webapp/rebrand/landing/usp-pocketpacks.webp",
      title: "Personalized PocketPacks",
      description: "We sort your medication into clearly labeled, individual packs so you can be sure you're taking the right dose at the right time."
    },
    {
      img: "https://static.pocketpills.com/webapp/rebrand/landing/usp-caregiver.webp",
      title: "Caregiver Support",
      description: "It can be challenging to take care of your loved one's prescriptions. We provide the tools to help manage medications for the whole family."
    }
  ];

  return (
    <div className={styles.careSection}>
      <h2>This is the kind of care you deserve</h2>
      <div className={styles.featuresList}>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <img src={feature.img} alt={feature.title} height={200} width={250} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CareYouDeserve;

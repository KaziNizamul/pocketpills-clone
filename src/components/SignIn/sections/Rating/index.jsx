import styles from './RatingSection.module.scss';
import stars from '../../../../../public/assets/rating.png'; // Adjust the path as needed

const RatingSection = () => {
  return (
    <div className={styles.ratingSection}>
      <img src={stars} alt="Stars" className={styles.stars} />
      <div className={styles.ratingText}>
        <div className={styles.ratingValue}>4.9 Rating</div>
        <div className={styles.ratingSource}>Google & Facebook</div>
        <div className={styles.ratingNote}>(and we are always striving for that 0.1)</div>
      </div>
    </div>
  );
};

export default RatingSection;

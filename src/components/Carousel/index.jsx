import Slider from 'react-slick';
import styles from './Carousel.module.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <div className={`${styles.arrow} ${styles.next}`}>▶</div>,
    prevArrow: <div className={`${styles.arrow} ${styles.prev}`}>◀</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className={styles.carouselSection}>
      <h2>Reading is good for you...</h2>
      <p>{`Reading about what's good for you is even better.`}</p>
      <Slider {...settings} className={styles.carousel}>
        <div className={styles.carouselItem}>
          <img src="https://static.pocketpills.com/webapp/rebrand/landing/blog/ozempic-weight-loss.webp" alt="Image 1" />
          <div className={styles.title}>GLP-1 Market Surge 2031</div>
          <div className={styles.date}>December 14, 2023</div>
        </div>
        <div className={styles.carouselItem}>
          <img src="https://static.pocketpills.com/webapp/rebrand/landing/blog/diabetes-canada-foods-ozempic.webp" alt="Image 2" />
          <div className={styles.title}>All about Ozempic</div>
          <div className={styles.date}>August 8, 2022</div>
        </div>
        <div className={styles.carouselItem}>
          <img src="https://static.pocketpills.com/webapp/rebrand/landing/blog/does-iud-make-you-gain-weight.webp" alt="Image 3" />
          <div className={styles.title}>Kyleena vs. Mirena IUDs</div>
          <div className={styles.date}>August 2, 2022</div>
        </div>
        <div className={styles.carouselItem}>
          <img src="https://static.pocketpills.com/webapp/rebrand/landing/blog/finasteride-and-shedding-why-it-happens.webp" alt="Image 3" />
          <div className={styles.title}>Finasteride and shedding</div>
          <div className={styles.date}>August 10, 2022</div>
        </div>
        <div className={styles.carouselItem}>
          <img src="https://static.pocketpills.com/webapp/rebrand/landing/blog/when-to-start-birth-control-pills.webp" alt="Image 3" />
          <div className={styles.title}>When to start birth control pills</div>
          <div className={styles.date}>August 10, 2022</div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

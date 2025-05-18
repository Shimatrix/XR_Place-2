import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Cover.module.scss';
import vector30 from '/src/assets/images/vector_30.svg';
import arrow from '/src/assets/images/arrow.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';

gsap.registerPlugin(ScrollTrigger);

interface CoverProps {
  openModal: () => void;
}

const Cover: React.FC<CoverProps> = ({ openModal }) => {
  const { t } = useTranslation();
  const figureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Круг исчезает через 700 мс
      document.body.classList.add(styles.hideCircle);
    }, 700);

    if (figureRef.current) {
      gsap.to(figureRef.current, {
        y: -200,
        ease: 'none',
        scrollTrigger: {
          trigger: figureRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.animatedCircle} />
        <div className={`${styles.gridItem} ${styles.item1}`}>
          <h1 className={`${styles.cover_title} ${styles.cover_title_mask}`}>XR PLACE</h1>
        </div>

        <div className={`${styles.gridItem} ${styles.item2}`}>
          <div className={styles.image_circle_mobile} />
          <div className={styles.image_square} />
          <div className={styles.arrow}>
            <img className={styles.arrowhead} src={vector30} alt="Arrow icon" />
          </div>
        </div>

        <div className={`${styles.gridItem} ${styles.item7}`}>
          <div className={styles.item7_text}>place for business</div>
        </div>

        <div className={`${styles.gridItem} ${styles.item4}`}>
          <div className={styles.contentWrapper}>
            <div className={styles.cover_text}>{t('cover.text')}</div>
            <button className={styles.button} onClick={openModal}>
              {t('cover.buttonDemo')}
              <img className={styles.button_arrow} src={arrow} alt="arrow" />
            </button>
          </div>
        </div>

        <div className={`${styles.gridItem} ${styles.item5}`}>
          <div className={styles.image_circle} />
        </div>

        <div className={`${styles.gridItem} ${styles.item6}`}>
          <div className={styles.container_main_shape} />
          <div ref={figureRef} className={styles.container_main_figure} />
        </div>

        <div className={styles.verticalDivider} />
        <div className={styles.horizontalDivider1} />
        <div className={styles.horizontalDivider2} />
        <div className={styles.intersectionMarker} />
      </div>

      <div className={styles.contentWrapper_mobile}>
        <div className={styles.cover_text}>{t('cover.text')}</div>
        <button className={styles.button} onClick={openModal}>
          {t('cover.buttonDemo')}
          <img className={styles.button_arrow} src={arrow} alt="arrow" />
        </button>
      </div>
    </>
  );
};

Cover.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Cover;

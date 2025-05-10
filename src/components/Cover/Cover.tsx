import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Cover.module.scss';
import vector30 from '/src/assets/images/vector_30.svg';
import arrow from '/src/assets/images/arrow.svg';

const Cover = () => {
  const [showCircle, setShowCircle] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    // Круг исчезнет через 0.5s (0.2s задержка + 0.3s анимация)
    const timer = setTimeout(() => {
      setShowCircle(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.gridContainer}>
      {showCircle && <div className={styles.animatedCircle} />}

      <div className={`${styles.gridItem} ${styles.item1}`}>
        <h1 className={`${styles.cover_title} ${styles.cover_title_mask}`}>HR PLACE</h1>
        {/* <h1 className={styles.cover_title}>
          <span className={styles.title_mask}>
            {'HR PLACE'.split('').map((letter, index) => (
              <span key={index} className={letter === ' ' ? styles.spaceChar : ''}>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </span>
        </h1> */}
      </div>

      <div className={`${styles.gridItem} ${styles.item2}`}>
        <div className={styles.image_square} />
        <div className={styles.arrow}>
          <img className={styles.arrowhead} src={vector30} alt="Arrow icon" />
        </div>
      </div>

      <div className={`${styles.gridItem} ${styles.item3}`}>
        <div className={styles.item3_text}>place for business</div>
      </div>

      <div className={`${styles.gridItem} ${styles.item4}`}>
        <div className={styles.contentWrapper}>
          <div className={styles.cover_text}>{t('cover.text')}</div>
          <button className={styles.button}>
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
      </div>

      {/* Разделительные линии как часть grid-структуры */}
      <div className={styles.verticalDivider} />
      <div className={styles.horizontalDivider1} />
      <div className={styles.horizontalDivider2} />
      <div className={styles.intersectionMarker} />
    </div>
  );
};

export default Cover;

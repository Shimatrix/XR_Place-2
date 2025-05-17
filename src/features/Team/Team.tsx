import { useTranslation } from 'react-i18next';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './team.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Refs для элементов
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textBlocksRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Анимация лейбла
      gsap.from(labelRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
      });

      // Анимация заголовка
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
      });

      // Анимация карточек
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          duration: 1,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        });
      });

      // Анимация текстовых блоков
      textBlocksRef.current.forEach((block, index) => {
        gsap.from(block, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: block,
            start: 'top 85%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.teamSection} ref={sectionRef}>
      <div className={styles.header}>
        <span ref={labelRef} className={styles.sectionLabel}>
          {t('aboutUs.label')}
        </span>
        <h2 ref={titleRef} className={styles.title}>
          {t('aboutUs.titlePartOne')} <span>{t('aboutUs.titlePartTwo')}</span>
        </h2>
      </div>

      <div className={styles.row}>
        <div
          ref={(el) => {
            cardsRef.current[0] = el;
          }}
          className={styles.card}
        >
          <div className={styles.dotsPattern}>
            <img src="/mockImg/Team/dotsPattern.svg" alt="" />
          </div>
          <div className={styles.linesPattern}>
            <picture>
              <source media="(max-width: 360px)" srcSet="/mockImg/Team/linesPattern-mobile.svg" />
              <img src="/mockImg/Team/linesPattern.svg" alt="" />
            </picture>
          </div>
          <img
            src="/mockImg/Team/artem-tarkhanov.jpg"
            alt="Артём Тарханов"
            className={styles.avatar}
          />
          <div className={styles.cardInfo}>
            <h3>АРТЁМ ТАРХАНОВ</h3>
            <p>Co-founder & CEO</p>
          </div>
        </div>

        <div
          ref={(el) => {
            textBlocksRef.current[0] = el;
          }}
          className={`${styles.textBlock} ${styles.textBlockRight}`}
        >
          <div className={styles.mobileAboutApproach}>
            <p>{t('aboutUs.description1')}</p>
          </div>
          <div className={styles.mobileAboutSupport}>
            <p>{t('aboutUs.description2')}</p>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div
          ref={(el) => {
            textBlocksRef.current[1] = el;
          }}
          className={`${styles.textBlock} ${styles.textBlockLeft} ${styles.mobileAboutPartnership}`}
        >
          <p>{t('aboutUs.description3')}</p>
        </div>

        <div
          ref={(el) => {
            cardsRef.current[1] = el;
          }}
          className={`${styles.card} ${styles.cardRightAligned} ${styles.mobileAboutDirector}`}
        >
          <div className={styles.linesPatternBottom}>
            <picture>
              <source
                media="(max-width: 360px)"
                srcSet="/mockImg/Team/linesPatternBottom-mobile.svg"
              />
              <img src="/mockImg/Team/linesPatternBottom.svg" alt="" />
            </picture>
          </div>
          <div className={styles.circleLines}>
            <img src="/mockImg/Team/circleLines.svg" alt="" />
          </div>
          <img
            src="/mockImg/Team/victor-karneev.jpg"
            alt="Виктор Карнеев"
            className={`${styles.avatar} ${styles.avatarRight}`}
          />
          <div className={`${styles.cardInfo} ${styles.cardInfoRight}`}>
            <h3>ВИКТОР КАРНЕЕВ</h3>
            <p>Co-founder & Production Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

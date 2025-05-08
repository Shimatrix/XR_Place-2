/* карточки участников + последовательная анимация */
import React from 'react';
import styles from './team.module.scss';

const Team = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.header}>
        <span className={styles.sectionLabel}>КТО МЫ</span>
        <h2 className={styles.title}>
          БИЗНЕС <span>КОМАНДА</span>
        </h2>
      </div>

      <div className={styles.row}>
        <div className={styles.card}>
          <div className={styles.dotsPattern}>
            <img src="/mockImg/Team/dotsPattern.svg" />
          </div>

          {/* Полоски в нижней части */}
          <div className={styles.linesPattern}>
            <img src="/mockImg/Team/linesPattern.svg" />
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

        {/* <div className={`${styles.textBlock} ${styles.textBlockRight}`}> */}
        <div className={`${styles.paragraph1} ${styles.textBlock} ${styles.textBlockRight}`}>
          <p>
            Мы понимаем, что каждая компания уникальна, поэтому мы работаем в тесном сотрудничестве
            с нашими клиентами, чтобы создавать индивидуальные решения, которые отвечают их
            потребностям
          </p>
        </div>
        <div className={`${styles.paragraph2} ${styles.textBlock} ${styles.textBlockRight}`}>
          <p>
            Наша команда не только разрабатывает технологии, но и обеспечивает поддержку на каждом
            этапе сотрудничества
          </p>
        </div>
        {/* </div> */}
      </div>

      <div className={styles.row}>
        <div className={`${styles.textBlock} ${styles.textBlockLeft}`}>
          <p>
            С нами вы получите не только продукт, но и партнёрство, основанное на доверии и
            взаимопонимании.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardRightAligned}`}>
          <div className={styles.linesPatternBottom}>
            <img src="/mockImg/Team/linesPatternBottom.svg" />
          </div>
          <div className={styles.circleLines}>
            <img src="/mockImg/Team/circleLines.svg" />
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

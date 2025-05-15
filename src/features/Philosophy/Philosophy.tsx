import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './philosophy.module.scss';
import { BlockLabel } from '@/components/BlockLabel/BlockLabel';
import BlockTitle from '@/components/BlockTitle/BlockTitle';
import Typography from '@/components/Typography/Typography';
import illustration from '@/assets/img/xrp2.png';

const Philosophy: React.FC = () => {
  const { t } = useTranslation();

  // определяем, мобильная ли сейчас ширина
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <div className={styles.blockContainer}>
      <div className={styles.blockContent}>
        {/* Хэдер с лейблом и заголовком */}
        <div className={styles.headerGroup}>
          <BlockLabel className={styles.label}>{t('philosophy.label')}</BlockLabel>
          <div className={styles.titleGroup}>
            <BlockTitle className={styles.titlePart}>{t('philosophy.titlePartOne')}</BlockTitle>
            <BlockTitle
              className={styles.titlePart}
              highlightedPhrase={t('philosophy.highlightedPhrase')}
            >
              {t('philosophy.titlePartTwo')}
            </BlockTitle>
          </div>
        </div>

        {/* Основной flex-контейнер: картинка, описание и подзаголовки */}
        <div className={styles.mediaContainer}>
          {/* 1) Картинка */}
          <div className={styles.imageWrapper}>
            <img src={illustration} width={399} height={247} alt="Иллюстрация объекта" />
          </div>

          {/* 2) Описание */}
          <div className={styles.descriptionWrapper}>
            <Typography variant="p" className={styles.description}>
              {t('philosophy.description')}
            </Typography>
          </div>

          {/* 3) Подзаголовки */}
          {isMobile ? (
            <div className={styles.combinedSubtitle}>
              <Typography variant="h3" className={styles.subtitleLine}>
                {t('philosophy.slogan1Mobile')}
                <br />
                {t('philosophy.slogan2Mobile')}
              </Typography>
              <Typography variant="h3" className={styles.subtitleLine}>
                {t('philosophy.slogan3Mobile')}
                <br />
                {t('philosophy.slogan4Mobile')}
              </Typography>
            </div>
          ) : (
            <>
              <div className={styles.subtitleGroup}>
                <Typography variant="h3" className={styles.subtitleFirst}>
                  {t('philosophy.slogan1')}
                  <br />
                  {t('philosophy.slogan2')}
                </Typography>
              </div>
              <div className={styles.subtitleGroupTwo}>
                <Typography variant="h3" className={styles.subtitleSecond}>
                  {t('philosophy.slogan3')}
                </Typography>
                <Typography variant="h3" className={styles.subtitleThird}>
                  {t('philosophy.slogan4')}
                </Typography>
              </div>
            </>
          )}

          {/* 4) Декоративная точечная сетка */}
          <div className={styles.dotsPattern} />
        </div>
      </div>
    </div>
  );
};

export default Philosophy;

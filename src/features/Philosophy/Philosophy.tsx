import React, { useState, useEffect } from 'react';
import styles from './philosophy.module.scss';
import { BlockLabel } from '@/components/BlockLabel/BlockLabel';
import BlockTitle from '@/components/BlockTitle/BlockTitle';
import Typography from '@/components/Typography/Typography';
import illustration from '@/assets/img/xrp2.png';

const Philosophy: React.FC = () => {
  const labelText = 'Наша философия';
  const titleTextPartOne = 'надёжный партнёр';
  const highlightedPhrase = 'успех';
  const descriptionText =
    'Мы предлагаем уникальный виджет для создания виртуальных туров, которые позволяют вашим клиентам исследовать объекты недвижимости в интерактивном формате.';

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
          <BlockLabel className={styles.label}>{labelText}</BlockLabel>
          <div className={styles.titleGroup}>
            <BlockTitle className={styles.titlePart}>{titleTextPartOne}</BlockTitle>
            <BlockTitle className={styles.titlePart} highlightedPhrase={highlightedPhrase}>
              успех бизнеса
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
              {descriptionText}
            </Typography>
          </div>

          {/* 3) Подзаголовки */}
          {isMobile ? (
            <div className={styles.combinedSubtitle}>
              <Typography variant="h3" className={styles.subtitleLine}>
                Преобразуйте свою
                <br />
                реальность
              </Typography>
              <Typography variant="h3" className={styles.subtitleLine}>
                С интерактивными
                <br />
                Виртуальными 3d Турами
              </Typography>
            </div>
          ) : (
            <>
              <div className={styles.subtitleGroup}>
                <Typography variant="h3" className={styles.subtitleFirst}>
                  ПРЕОБРАЗУЙТЕ СВОЁ
                  <br />
                  ПРЕДСТАВЛЕНИЕ О ПОКУПКЕ НЕДВИЖИМОСТИ
                </Typography>
              </div>
              <div className={styles.subtitleGroupTwo}>
                <Typography variant="h3" className={styles.subtitleSecond}>
                  С ИНТЕРАКТИВНЫМИ ВИРТУАЛЬНЫМИ
                </Typography>
                <Typography variant="h3" className={styles.subtitleThird}>
                  3D ТУРАМИ
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

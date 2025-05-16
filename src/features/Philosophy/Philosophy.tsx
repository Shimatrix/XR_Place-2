import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './philosophy.module.scss';
import { BlockLabel } from '@/components/BlockLabel/BlockLabel';
import BlockTitle from '@/components/BlockTitle/BlockTitle';
import Typography from '@/components/Typography/Typography';
import illustration from '@/assets/img/xrp2.png';

import { gsap } from 'gsap'; //Анимация
import { ScrollTrigger } from 'gsap/ScrollTrigger'; //Анимация

// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Philosophy: React.FC = () => {
  const { t } = useTranslation();

  //Анимация
  const line1Ref = useRef<HTMLDivElement>(null); // Первая вертикальная линия
  const line2Ref = useRef<HTMLDivElement>(null); // Горизонтальная линия
  const line3Ref = useRef<HTMLDivElement>(null); // Вторая вертикальная линия
  const dot1Ref = useRef<HTMLDivElement>(null); // Первая точка
  const dot2Ref = useRef<HTMLDivElement>(null); // Вторая точка
  const animationRef = useRef<GSAPTimeline | null>(null);

  //Анимция для текста
  const blockContainerRef = useRef<HTMLDivElement>(null);
  const [isBlockVisible, setIsBlockVisible] = useState(false);

  // Функция для расчета позиций
  const setupLines = () => {
    if (!line1Ref.current || !line2Ref.current || !line3Ref.current) return;

    const startLeft = 0; // Базовый отступ
    const containerWidth = line1Ref.current.parentElement?.offsetWidth || window.innerWidth;

    // Мобильные значения
    const line1Height = isMobile ? '168px' : '168px';
    const line2Top = isMobile ? 'calc(50vh + 308px)' : 'calc(576px + 168px)';
    const line3Height = isMobile ? '556px' : '330px';

    // Рассчитываем максимальную ширину для анимации
    const maxLineWidth = Math.min(containerWidth, window.innerWidth - 40); // -40px для отступов

    // Полная высота для позиционирования второй точки
    const totalHeight = isMobile ? 'calc(50vh + 308px + 556px)' : 'calc(576px + 168px + 330px)';

    // Настройка точек
    gsap.set([dot1Ref.current, dot2Ref.current], {
      position: 'absolute',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#0BB696',
      zIndex: 2,
      opacity: 0 // Начинаем с прозрачности 0
    });

    // Позиционирование точек
    gsap.set(dot1Ref.current, {
      top: isMobile ? '490px' : '576px',
      left: `${startLeft}px`,
      transform: 'translate(-50%, -50%)' // Центрирование точки
    });
    
    gsap.set(dot2Ref.current, {
      top: totalHeight,
      left: `${startLeft + containerWidth}px`,
      transform: 'translate(-50%, -50%)' // Центрирование точки
    });

    // Позиционирование линий
    gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], {
      position: 'absolute',
      backgroundColor: '#0BB696',
      zIndex: 1,
    });
    
    gsap.set(line1Ref.current, {
      width: '1px',
      height: 0,
      top: isMobile ? '490px' : '576px',
      left: `${startLeft}px`
    });
    
    gsap.set(line2Ref.current, {
      width: 0,
      height: '1px',
      top: line2Top,
      left: `${startLeft}px`,
      maxWidth: maxLineWidth // Добавляем ограничение
    });
    
    gsap.set(line3Ref.current, {
      width: '1px',
      height: 0,
      top: line2Top,
      left: `${startLeft + containerWidth}px`
    });

    // Убиваем старую анимацию и триггеры
    if (animationRef.current) {
    animationRef.current.kill();
    animationRef.current.scrollTrigger?.kill();
  }

    // Создаем новую анимацию
    animationRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: line1Ref.current,
        start: "top bottom",
        end: "+=1000",
        scrub: 0.5,
      }
    });

    animationRef.current
      // Первая точка появляется сразу
      .to(dot1Ref.current, { opacity: 1, duration: 0.1 })
      // Анимация линий
      .to(line1Ref.current, { height: line1Height, duration: 0.5 })
      .to(line2Ref.current, { width: containerWidth, duration: 0.5 }, ">")
      .to(line3Ref.current, { height: line3Height, duration: 0.5 }, ">")
      // Вторая точка появляется в самом конце
      .to(dot2Ref.current, { opacity: 1, duration: 0.1 }, ">"); // Ждём немного после завершения всех анимаций
  };

  // определяем, мобильная ли сейчас ширина
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      setupLines(); // Пересчитываем анимацию при изменении размера
    };
    setIsMobile(mq.matches);
    mq.addEventListener('change', onChange);

    setupLines();

    // Обработчик ресайза
    const resizeHandler = () => setupLines();
    window.addEventListener('resize', resizeHandler);

    return () => {
      mq.removeEventListener('change', onChange);
      window.removeEventListener('resize', resizeHandler);
      if (animationRef.current) animationRef.current.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  // Настройка Intersection Observer для блока Анимаций текста
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBlockVisible(true);
          observer.unobserve(entry.target); // Отключаем после появления
        }
      },
      { threshold: 0.4 } // Срабатывает при 40% видимости блока
    );

    if (blockContainerRef.current) {
      observer.observe(blockContainerRef.current);
    }

    return () => {
      if (blockContainerRef.current) {
        observer.unobserve(blockContainerRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.blockContainer} ref={blockContainerRef}>
      {/* Три линии для анимации */}
      <div className={styles.verticalLine1} ref={line1Ref} />
      <div className={styles.horizontalLine} ref={line2Ref} />
      <div className={styles.verticalLine2} ref={line3Ref} />

      {/* Точки */}
      <div className={styles.lineDot} ref={dot1Ref} />
      <div className={styles.lineDot} ref={dot2Ref} />

      <div className={styles.blockContent}>
        {/* Хэдер с лейблом и заголовком */}
        <div className={styles.headerGroup}>
            <BlockLabel className={`${styles.label} ${isBlockVisible ? styles.visible : ''}`}>{t('philosophy.label')}</BlockLabel>
          <div className={`${styles.titleGroup} ${isBlockVisible ? styles.visible : ''}`}>
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
          <div className={`${styles.imageWrapper} ${isBlockVisible ? styles.visible : ''}`}>
            <img src={illustration} width={399} height={247} alt="Иллюстрация объекта" />
          </div>

          {/* 2) Описание */}
          <div className={`${styles.descriptionWrapper} ${isBlockVisible ? styles.visible : ''}`}>
            <Typography variant="p" className={styles.description}>
              {t('philosophy.description')}
            </Typography>
          </div>

          {/* 3) Подзаголовки */}
          {isMobile ? (
            <div className={`${styles.combinedSubtitle} ${isBlockVisible ? styles.visible : ''}`}>
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
              <div className={`${styles.subtitleGroup} ${isBlockVisible ? styles.visible : ''}`}>
                <Typography variant="h3" className={styles.subtitleFirst}>
                  преобразуйте своё
                  <br />
                  представление о покупке недвижимости
                </Typography>
              </div>
              <div className={`${styles.subtitleGroupTwo} ${isBlockVisible ? styles.visible : ''}`}>
                <Typography variant="h3" className={styles.subtitleSecond}>
                  с интерактивными виртуальными
                </Typography>
                <Typography variant="h3" className={styles.subtitleThird}>
                  3d турами
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

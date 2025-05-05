import React, { useState, useEffect, useRef } from 'react';
import styles from './Loader.module.scss';

const Loader: React.FC = () => {
  const [currentNumber, setCurrentNumber] = useState<number>(1);
  const [numberOpacity, setNumberOpacity] = useState<number>(1);
  const circleRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(null);

  useEffect(() => {
    // Устанавливаем начальный размер круга (диагональ экрана)
    const updateCircleSize = () => {
      if (circleRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const diagonal = Math.sqrt(width * width + height * height);
        circleRef.current.style.width = `${diagonal}px`;
        circleRef.current.style.height = `${diagonal}px`;
      }
    };

    updateCircleSize();
    window.addEventListener('resize', updateCircleSize);

    // Анимация чисел от 1 до 100
    if (currentNumber > 100) return;

    const totalDuration = 1000; // 1 секунда
    const intervalTime = totalDuration / 100;

    const intervalId = setInterval(() => {
      setCurrentNumber((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);

          // После достижения 100 ждем 0.1 сек и начинаем уменьшать круг
          setTimeout(() => {
            startShrinkingAnimation();
          }, 100);

          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', updateCircleSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [currentNumber]);

  const startShrinkingAnimation = () => {
    if (!circleRef.current) return;

    const startSize = parseFloat(circleRef.current.style.width);
    const targetSize = 70;
    const duration = 500; // 0.5 секунды
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Интерполяция размера
      const newSize = startSize + (targetSize - startSize) * progress;
      circleRef.current!.style.width = `${newSize}px`;
      circleRef.current!.style.height = `${newSize}px`;

      // // Плавное исчезновение числа при достижении 200px
      if (newSize <= 300) {
        const opacityProgress = 1 - (300 - newSize) / (300 - 150);
        setNumberOpacity(Math.max(0, opacityProgress));
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>

      <div ref={circleRef} className={styles.circle}>
        <div className={styles.number} style={{ opacity: numberOpacity }}>
          {currentNumber}
        </div>
      </div>
    </div>
  );
};

export default Loader;

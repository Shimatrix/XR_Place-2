import React, { useEffect, useRef, useState } from 'react';
import styles from './cursor.module.scss';

const Cursor: React.FC = () => {
  const smallRef = useRef<HTMLDivElement>(null);
  const bigRef = useRef<HTMLDivElement>(null);
  const [isHoverTarget, setIsHoverTarget] = useState(false);

  useEffect(() => {
    const small = smallRef.current!;
    const big = bigRef.current!;

    let mouseX = 0,
      mouseY = 0;
    let bigX = 0,
      bigY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      small.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      bigX += (mouseX - bigX) * 0.15;
      bigY += (mouseY - bigY) * 0.15;
      big.style.transform = `translate(${bigX}px, ${bigY}px)`;
      requestAnimationFrame(animate);
    };

    // При наведении на любой элемент смотрим, интерактивен ли он
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // критерий кликабельности: тэг <a>, <button>, элементы с role="button",
      // input[type=button|submit], а также любой с обработчиком onclick
      if (
        target.closest(
          'a, button, [role="button"], input[type="button"], input[type="submit"], [onclick]',
        )
      ) {
        setIsHoverTarget(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest(
          'a, button, [role="button"], input[type="button"], input[type="submit"], [onclick]',
        )
      ) {
        setIsHoverTarget(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={smallRef}
        className={`${styles.cursorSmall} ${isHoverTarget ? styles.cursorSmallHover : ''}`}
      />
      <div
        ref={bigRef}
        className={`${styles.cursorBig} ${isHoverTarget ? styles.cursorBigHover : ''}`}
      />
    </>
  );
};

export default Cursor;

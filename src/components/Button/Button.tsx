/* Компонент с props: variant, size, loading */

import React from 'react';
import styles from './Button.module.scss';

import arrow from '/src/assets/images/arrow.svg';

interface ButtonProps {
  variant?: 'green' | 'white';
  size?: 'mobile' | 'desktop';
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'green',
  size = 'desktop',
  loading = false,
  className = '',
  onClick,
  title,
  disabled = false,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    loading ? styles['button--loading'] : '',
    disabled ? styles['button--disabled'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  title = title.split(' ').join('\xa0');

  return (
    <button className={buttonClasses} onClick={onClick} disabled={loading || disabled} {...props}>
      <span className={styles.title}>{title}</span>
      {!loading && <img src={arrow} alt="arrow" className={styles.arrow} />}
      {loading && <div className={styles.loader} />}
    </button>
  );
};

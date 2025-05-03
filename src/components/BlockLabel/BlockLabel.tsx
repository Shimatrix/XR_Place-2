import React from 'react';
import styles from './BlockLabel.module.scss';

interface BlockLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const BlockLabel: React.FC<BlockLabelProps> = ({ children, className = '' }) => {
  return <span className={`${styles.blockLabel} ${className}`}>{children}</span>;
};

import React, { JSX } from 'react';
import styles from './Typography.module.scss';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Typography: React.FC<TypographyProps> = ({ variant, children, className = '', style }) => {
  const tagMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    p: 'p',
    span: 'span',
  };
  const Tag = tagMap[variant] as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${styles[variant]} ${className}`} style={style}>
      {children}
    </Tag>
  );
};

export default Typography;

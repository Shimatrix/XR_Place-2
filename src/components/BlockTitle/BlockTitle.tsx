import React from 'react';
import styles from './BlockTitle.module.scss';
import Typography from '../Typography/Typography';

type BlockTitleProps = {
  children: string; //пока убрал React.ReactNode
  highlightedPhrase?: string;
  className?: string;
  style?: React.CSSProperties;
};

const BlockTitle: React.FC<BlockTitleProps> = ({
  children,
  highlightedPhrase,
  className,
  style,
}) => {
  // Если нет фразы (или даже одного слова) для выделения
  if (!highlightedPhrase) {
    return (
      <Typography
        variant="h2"
        className={className} // На всякий случай, но пока в .h2 все прописано
        style={style} // главным образом для указания максимального размера, например style={{ maxWidth: '500px' }}
      >
        {children}
      </Typography>
    );
  }
  // Если есть фраза (или слово) для выделения
  const parts = children.split(new RegExp(`(${highlightedPhrase})`));

  return (
    <Typography variant="h2" className={className} style={{ display: 'inline-block', ...style }}>
      {parts.map((part, i) =>
        part === highlightedPhrase ? (
          <span key={i} className={styles.highlighted}>
            {part}
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </Typography>
  );
};

export default BlockTitle;

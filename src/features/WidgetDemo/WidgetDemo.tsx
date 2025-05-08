/* iFrame + видео кнопка + loading state */
import React from 'react';
import styles from './widget-demo.module.scss';
import { BlockLabel } from '@/components/BlockLabel/BlockLabel';
import Typography from '@/components/Typography/Typography';
import BlockTitle from '@/components/BlockTitle/BlockTitle';

// todo: для перевода на английский
interface TextContent {
  titleParts: [string, string, string];
  descriptions: [string, string];
  label?: string;
}

interface Props {
  content?: Partial<TextContent>;
  highlightedTitleIndex?: 0 | 1 | 2;
}

export const WidgetDemo: React.FC<Props> = ({ content, highlightedTitleIndex = 1 }) => {
  const defaultContent: TextContent = {
    titleParts: ['что', 'умеет', 'виджет'],
    descriptions: [
      'Наш виджет позволяет создавать захватывающее и\xa0реалистичное представление об\xa0объекте недвижимости',
      'Это помогает вашим клиентам принимать обоснованные решения. Мы\xa0предлагаем простые в\xa0использовании решения, которые легко интегрируются в\xa0ваши бизнес-процессы',
    ],
    label: 'виджет',
  };

  const { titleParts, descriptions, label } = { ...defaultContent, ...content };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <BlockLabel>{label}</BlockLabel>
        <BlockTitle highlightedPhrase={titleParts[highlightedTitleIndex]}>
          {titleParts.join(' ')}
        </BlockTitle>
      </div>
      <div className={styles.descriptionWrapper}>
        {descriptions.map((text, index) => (
          <Typography key={index} className={styles.descriptionParagraph} variant="p">
            {text}
          </Typography>
        ))}
      </div>
    </div>
  );
};

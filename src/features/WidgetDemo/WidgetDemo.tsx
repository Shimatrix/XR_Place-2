/* iFrame + видео кнопка + loading state */
import React, { useState } from 'react';
import styles from './widget-demo.module.scss';
import { BlockLabel } from '@/components/BlockLabel/BlockLabel';
import Typography from '@/components/Typography/Typography';
import BlockTitle from '@/components/BlockTitle/BlockTitle';

import emptyStateImg from '@/assets/images/whatDoesTheWidgetDoImg/preview-mock-img.png';

// todo: для перевода на английский
interface TextContent {
  titleParts: [string, string, string];
  descriptions: [string, string];
  label?: string;
  listItems: string[];
}

interface Props {
  content?: Partial<TextContent>;
  images?: {
    emptyState: string;
    items: string[];
  };
  highlightedTitleIndex?: 0 | 1 | 2;
}

export const WidgetDemo: React.FC<Props> = ({ content, images, highlightedTitleIndex = 1 }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const emptyState = {
    img: emptyStateImg,
  };
  const defaultContent: TextContent = {
    titleParts: ['что', 'умеет', 'виджет'],
    descriptions: [
      'Наш виджет позволяет создавать захватывающее и\xa0реалистичное представление об\xa0объекте недвижимости',
      'Это помогает вашим клиентам принимать обоснованные решения. Мы\xa0предлагаем простые в\xa0использовании решения, которые легко интегрируются в\xa0ваши бизнес-процессы',
    ],
    label: 'виджет',
    listItems: [
      'панорамный обзор здания',
      'планировка и интерьер',
      'свобода перемещения',
      'Точность планировки',
      'Интерактивность',
      'кроссплатформенность',
    ],
  };

  const { titleParts, descriptions, label, listItems } = {
    ...defaultContent,
    ...content,
  };

  const getCurrentImage = () => {
    if (selectedItem !== null && images?.items?.[selectedItem]) {
      return images.items[selectedItem];
    }
    return images?.emptyState || emptyStateImg;
  };

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
      <div className={styles.previewWrapper}>
        <div className={styles.listWrapper}>
          <div className={styles.listDecoration}>
            {/* Вертикальная линия */}
            <div className={styles.verticalLine} />
            {/* Горизонтальные линии для каждого пункта */}
            {listItems?.map((_, index) => (
              <div
                key={index}
                className={`${styles.horizontalLine} ${
                  selectedItem === index ? styles.activeLine : ''
                }`}
              />
            ))}
          </div>
          <ul className={styles.itemsList}>
            {listItems?.map((item, index) => (
              <li
                key={index}
                className={`${styles.listItem} ${selectedItem === index ? styles.active : ''}`}
                onClick={() => setSelectedItem(index)}
              >
                <Typography variant="span">{item}</Typography>
              </li>
            ))}
          </ul>
          <div className={styles.previewImg}>
            <img src={getCurrentImage()} alt="preview-mock-img" />
          </div>
          {/* вот тут описания для каждого индекса */}
        </div>
      </div>
    </div>
  );
};

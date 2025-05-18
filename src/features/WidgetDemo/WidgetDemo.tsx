/* iFrame + видео кнопка + loading state */
import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './widget-demo.module.scss';
import { BlockLabel } from '@/components/BlockLabel/BlockLabel';
import Typography from '@/components/Typography/Typography';
import BlockTitle from '@/components/BlockTitle/BlockTitle';

import emptyStateImg from '@/assets/images/whatDoesTheWidgetDoImg/preview-mock-img.png';

interface TextContent {
  titleParts: string[];
  descriptions: string[];
  label?: string;
  listItems: string[];
  imageDescriptions?: string[];
}

interface Props {
  content?: Partial<TextContent>;
  images?: {
    emptyState: string;
    items: string[];
  };
  highlightedTitleIndex?: 0 | 1 | 2;
}

// Типизированные ключи переводов
type WidgetKeys =
  | 'widget.titleParts'
  | 'widget.descriptions'
  | 'widget.label'
  | 'widget.listItems'
  | 'widget.imageDescriptions';

export const WidgetDemo: React.FC<Props> = ({ content, images, highlightedTitleIndex = 1 }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  // Безопасное получение массива
  const getSafeArray = (key: WidgetKeys, fallback: string[]): string[] => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result : fallback;
  };

  //Анимция для текста
    const blockContainerRef = useRef<HTMLDivElement>(null);
    const [isBlockVisible, setIsBlockVisible] = useState(false);

  // Безопасное получение строки
  // const getSafeString = (key: WidgetKeys, fallback: string): string => {
  //   const result = t(key);
  //   return typeof result === 'string' ? result : fallback;
  // };

  const defaultContent: TextContent = {
    titleParts: getSafeArray('widget.titleParts', ['what', 'can', 'widget']),
    descriptions: getSafeArray('widget.descriptions', ['Desc 1', 'Desc 2']),
    label: t('widget.label') || 'widget',
    listItems: getSafeArray('widget.listItems', [
      'Items 1',
      'Items 2',
      'Items 3',
      'Items 4',
      'Items 5',
      'Items 6',
    ]),
    imageDescriptions: getSafeArray('widget.imageDescriptions', [
      'Img 1',
      'Img 2',
      'Img 3',
      'Img 4',
      'Img 5',
      'Img 6',
    ]),
  };

  const { titleParts, descriptions, label, listItems, imageDescriptions } = {
    ...defaultContent,
    ...content,
  };

  const getCurrentImage = () => {
    if (selectedItem !== null && images?.items?.[selectedItem]) {
      return images.items[selectedItem];
    }
    return images?.emptyState || emptyStateImg;
  };

  const getCurrentDescription = () => {
    if (selectedItem !== null && imageDescriptions?.[selectedItem]) {
      return imageDescriptions[selectedItem];
    }
    return null;
  };

  const prepareIndex = (index: number) => {
    return `0${index + 1}.`;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className={styles.wrapper} ref={blockContainerRef}>
      <div className={styles.header}>
        <BlockLabel className={`${styles.label} ${isBlockVisible ? styles.visible : ''}`}>{label}</BlockLabel>
        <BlockTitle 
          highlightedPhrase={titleParts[highlightedTitleIndex]} 
          className={`${styles.title} ${isBlockVisible ? styles.visible : ''}`}
          >
            {titleParts.join(' ')}
        </BlockTitle>
      </div>
      <div className={`${styles.descriptionWrapper} ${isBlockVisible ? styles.visible : ''}`}>
        {descriptions.map((text, index) => (
          <Typography key={index} className={styles.descriptionParagraph} variant="p">
            {text}
          </Typography>
        ))}
      </div>
      <div className={styles.previewWrapper}>
        <div className={styles.listWrapper}>
          <div className={`${styles.listDecoration} ${isBlockVisible ? styles.visible : ''}`}>
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
          <ul className={`${styles.itemsList} ${isBlockVisible ? styles.visible : ''}`}>
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
          {!isMobile && (
            <div className={styles.imgWrapper}>
              <div className={`${styles.previewImg} ${isBlockVisible ? styles.visible : ''}`}>
                <img src={getCurrentImage()} alt="preview-mock-img" />
              </div>
              {selectedItem !== null && (
                <div className={styles.imageDescription}>
                  <Typography variant="span" className={styles.descriptionIndex}>
                    {prepareIndex(selectedItem)}
                  </Typography>
                  <Typography variant="p">{getCurrentDescription()}</Typography>
                </div>
              )}
            </div>
          )}
        </div>
        {isMobile && (
          <div className={styles.imgWrapper}>
            <div className={`${styles.previewImg} ${isBlockVisible ? styles.visible : ''}`}>
              <img src={getCurrentImage()} alt="preview-mock-img" />
            </div>
            {selectedItem !== null && (
              <div className={styles.imageDescription}>
                <Typography variant="span" className={styles.descriptionIndex}>
                  {prepareIndex(selectedItem)}
                </Typography>
                <Typography variant="p">{getCurrentDescription()}</Typography>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

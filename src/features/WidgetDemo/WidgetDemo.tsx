/* iFrame + видео кнопка + loading state */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './widget-demo.module.scss';
import { BlockLabel } from '@/components/BlockLabel/BlockLabel';
import Typography from '@/components/Typography/Typography';
import BlockTitle from '@/components/BlockTitle/BlockTitle';

import emptyStateImg from '@/assets/images/whatDoesTheWidgetDoImg/preview-mock-img.png';

// todo: для перевода на английский
// interface TextContent {
//   titleParts: [string, string, string];
//   descriptions: [string, string];
//   label?: string;
//   listItems: string[];
//   imageDescriptions?: string[];
// }

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
          {!isMobile && (
            <div className={styles.imgWrapper}>
              <div className={styles.previewImg}>
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
            <div className={styles.previewImg}>
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

//   const defaultContent: TextContent = {
//     titleParts: ['что', 'умеет', 'виджет'],
//     descriptions: [
//       'Наш виджет позволяет создавать захватывающее и\xa0реалистичное представление об\xa0объекте недвижимости',
//       'Это помогает вашим клиентам принимать обоснованные решения. Мы\xa0предлагаем простые в\xa0использовании решения, которые легко интегрируются в\xa0ваши бизнес-процессы',
//     ],
//     label: 'виджет',
//     listItems: [
//       'панорамный обзор здания',
//       'планировка и интерьер',
//       'свобода перемещения',
//       'Точность планировки',
//       'Интерактивность',
//       'кроссплатформенность',
//     ],
//     imageDescriptions: [
//       'Полный круговой обзор здания с возможностью приближения деталей',
//       'Точные планировки помещений с вариантами отделки и мебели',
//       'Свободное перемещение по объекту в любом направлении',
//       'Точные размеры и пропорции, соответствующие реальности',
//       'Возможность взаимодействия с элементами интерьера',
//       'Работает на всех устройствах и платформах без ограничений',
//     ],
//   };

//   const { titleParts, descriptions, label, listItems, imageDescriptions } = {
//     ...defaultContent,
//     ...content,
//   };

//   const getCurrentImage = () => {
//     if (selectedItem !== null && images?.items?.[selectedItem]) {
//       return images.items[selectedItem];
//     }
//     return images?.emptyState || emptyStateImg;
//   };

//   const getCurrentDescription = () => {
//     if (selectedItem !== null && imageDescriptions?.[selectedItem]) {
//       return imageDescriptions[selectedItem];
//     }
//     return null;
//   };

//   const prepareIndex = (index: number) => {
//     return `0${index + 1}.`;
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 769);
//     };

//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.header}>
//         <BlockLabel>{label}</BlockLabel>
//         <BlockTitle highlightedPhrase={titleParts[highlightedTitleIndex]}>
//           {titleParts.join(' ')}
//         </BlockTitle>
//       </div>
//       <div className={styles.descriptionWrapper}>
//         {descriptions.map((text, index) => (
//           <Typography key={index} className={styles.descriptionParagraph} variant="p">
//             {text}
//           </Typography>
//         ))}
//       </div>
//       <div className={styles.previewWrapper}>
//         <div className={styles.listWrapper}>
//           <div className={styles.listDecoration}>
//             {/* Вертикальная линия */}
//             <div className={styles.verticalLine} />
//             {/* Горизонтальные линии для каждого пункта */}
//             {listItems?.map((_, index) => (
//               <div
//                 key={index}
//                 className={`${styles.horizontalLine} ${
//                   selectedItem === index ? styles.activeLine : ''
//                 }`}
//               />
//             ))}
//           </div>
//           <ul className={styles.itemsList}>
//             {listItems?.map((item, index) => (
//               <li
//                 key={index}
//                 className={`${styles.listItem} ${selectedItem === index ? styles.active : ''}`}
//                 onClick={() => setSelectedItem(index)}
//               >
//                 <Typography variant="span">{item}</Typography>
//               </li>
//             ))}
//           </ul>
//           {!isMobile && (
//             <div className={styles.imgWrapper}>
//               <div className={styles.previewImg}>
//                 <img src={getCurrentImage()} alt="preview-mock-img" />
//               </div>
//               {selectedItem !== null && (
//                 <div className={styles.imageDescription}>
//                   <Typography variant="span" className={styles.descriptionIndex}>
//                     {prepareIndex(selectedItem)}
//                   </Typography>
//                   <Typography variant="p">{getCurrentDescription()}</Typography>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//         {isMobile && (
//           <div className={styles.imgWrapper}>
//             <div className={styles.previewImg}>
//               <img src={getCurrentImage()} alt="preview-mock-img" />
//             </div>
//             {selectedItem !== null && (
//               <div className={styles.imageDescription}>
//                 <Typography variant="span" className={styles.descriptionIndex}>
//                   {prepareIndex(selectedItem)}
//                 </Typography>
//                 <Typography variant="p">{getCurrentDescription()}</Typography>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

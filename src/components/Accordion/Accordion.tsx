import { useState } from 'react';
import styles from './Accordion.module.scss';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion = ({ items }: AccordionProps) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndices((prevOpenIndices) =>
      prevOpenIndices.includes(index)
        ? prevOpenIndices.filter((i) => i !== index)
        : [...prevOpenIndices, index],
    );
  };

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);

        return (
          <div
            key={index}
            className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
            onClick={() => toggle(index)}
          >
            <div className={styles.textWrapper}>
              <div className={styles.accordionQuestion}>
                <span className={styles.questionText}>{item.question}</span>
              </div>
              <div className={styles.accordionAnswer}>{item.answer}</div>
            </div>
            <div className={`${styles.plusIcon}`}>
              <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1817_319)">
                  <circle cx="25" cy="25" r="24.5" stroke="#5E5E5E" strokeOpacity="0.9" />
                  <rect
                    x="11.6641"
                    y="23.334"
                    width="26.6667"
                    height="2"
                    transform="rotate(0.170432 11.6641 23.334)"
                    fill="#5E5E5E"
                    fillOpacity="0.8"
                  />
                  {!isOpen && (
                    <rect
                      x="23.9941"
                      y="37.7061"
                      width="26.6667"
                      height="2"
                      transform="rotate(-90 23.9941 37.7061)"
                      fill="#5E5E5E"
                      fillOpacity="0.8"
                    />
                  )}
                </g>
                <defs>
                  <clipPath id="clip0_1817_319">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

import { useEffect, useRef, useState } from 'react';
import styles from './Accordion.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion = ({ items }: AccordionProps) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const answerRefs = useRef<HTMLDivElement[]>([]);
  const questionRefs = useRef<HTMLSpanElement[]>([]);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const iconRefs = useRef<HTMLDivElement[]>([]);
  const verticalRefs = useRef<SVGRectElement[]>([]);

  const toggle = (index: number) => {
    const isOpen = openIndices.includes(index);
    const answerEl = answerRefs.current[index];
    const questionText = questionRefs.current[index];
    const iconEl = iconRefs.current[index];
    const vertEl = verticalRefs.current[index];

    if (!answerEl || !questionText || !iconEl || !vertEl) return;

    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    if (!isOpen) {
      tl.to(answerEl, { maxHeight: 500, opacity: 1, padding: '15px 0', duration: 0.4 })
        .to(questionText, { y: 0, color: '#055042', duration: 0.4 }, '<')
        .to(iconEl, { rotation: 180, duration: 0.5 }, '<')
        .to(vertEl, { opacity: 0, duration: 0.2 }, '<0.1');
    } else {
      tl.to(answerEl, { maxHeight: 0, opacity: 0, padding: '0px', duration: 0.3 })
        .to(questionText, { y: 17, color: '#191919', duration: 0.3 }, '<')
        .to(iconEl, { rotation: 0, duration: 0.5 }, '<')
        .to(vertEl, { opacity: 1, duration: 0.2 }, '<0.1');
    }

    setOpenIndices((prev) => (isOpen ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  useEffect(() => {
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        },
      );
    });
  }, []);

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);

        return (
          <div
            key={index}
            className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
            onClick={() => toggle(index)}
            ref={(el) => {
              itemRefs.current[index] = el!;
            }}
          >
            <div className={styles.textWrapper}>
              <div className={styles.accordionQuestion}>
                <span
                  className={styles.questionText}
                  ref={(el) => {
                    questionRefs.current[index] = el!;
                  }}
                >
                  {item.question}
                </span>
              </div>
              <div
                className={styles.accordionAnswer}
                ref={(el) => {
                  answerRefs.current[index] = el!;
                }}
              >
                {item.answer}
              </div>
            </div>
            <div
              className={styles.plusIcon}
              ref={(el) => {
                iconRefs.current[index] = el!;
              }}
            >
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
                  <rect
                    x="23.9941"
                    y="37.7061"
                    width="26.6667"
                    height="2"
                    transform="rotate(-90 23.9941 37.7061)"
                    fill="#5E5E5E"
                    fillOpacity="0.8"
                    ref={(el) => {
                      verticalRefs.current[index] = el!;
                    }}
                  />
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

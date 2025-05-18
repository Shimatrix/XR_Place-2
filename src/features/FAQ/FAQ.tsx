// src/features/FAQ/FAQ.tsx
import React, { useRef, useEffect } from 'react';
import { Accordion } from '@/components/Accordion/Accordion';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './faq.module.scss';

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleMaskRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const faqData = t('faq.items', { returnObjects: true }) as FAQItem[];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        scrollTrigger: {
          trigger: labelRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(titleRef.current, {
        yPercent: 100,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: titleMaskRef.current,
          start: 'top 80%',
        },
      });

      return () => ctx.revert();
    });
  }, []);

  return (
    <section ref={sectionRef} className={styles.faqSection} id={styles.faqSection}>
      <div className={styles.header}>
        <span ref={labelRef} className={styles.sectionLabel}>
          {t('faq.label')}
        </span>
        <div ref={titleMaskRef} className={styles.titleMask}>
          <h2 ref={titleRef} className={styles.title}>
            <span>{t('faq.title.part1')}</span> {t('faq.title.part2')}
          </h2>
        </div>
      </div>
      <Accordion items={faqData} />
    </section>
  );
};

import { Accordion } from '@/components/Accordion/Accordion';
import { useTranslation } from 'react-i18next';
import styles from './faq.module.scss';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ = () => {
  const { t } = useTranslation();

  const faqData = t('faq.items', { returnObjects: true }) as FAQItem[];

  return (
    <section className={styles.faqSection}>
      <div className={styles.header}>
        <span className={styles.sectionLabel}>{t('faq.label')}</span>
        <h2 className={styles.title}>
          <span>{t('faq.title.part1')}</span> {t('faq.title.part2')}
        </h2>
      </div>
      <Accordion items={faqData} />
    </section>
  );
};

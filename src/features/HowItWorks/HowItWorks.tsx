/* Блок "как это работает" с кнопкой CTA */
import { useTranslation } from 'react-i18next';
import styles from './HowItWorks.module.scss';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '@/components/Button/Button';
import { useEffect, useRef, useState } from 'react';
import { addAnimation } from '../../utils/addAnimation';
import ContactFormModal from '../ContactFormModal/ContactFormModal';

interface HowItWorksProps {
  //openModal?: () => void;
  //closeModal?: () => void;
  children?: React.ReactNode;
}

export const HowItWorksBlock: React.FC<HowItWorksProps> = ({
  //openModal,
  //closeModal,
  children,
  ...props
}: HowItWorksProps) => {
  const { t } = useTranslation();

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const howItWorksRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingTextRef = useRef<HTMLDivElement>(null);
  const headingUnderscoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addAnimation([
      { element: headingTextRef.current, styleToAdd: `${styles.animation}` },
      {
        element: headingRef.current,
        child: headingUnderscoreRef.current,
        styleToAdd: `${styles.animation}`,
      },
      {
        element: howItWorksRef.current,
        child: circleRef.current,
        styleToAdd: `${styles.animation}`,
      },
      { element: titleRef.current, child: titleTextRef.current, styleToAdd: `${styles.animation}` },
    ]);
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div ref={howItWorksRef} className={`${styles.howItWorksBlock}`}>
      <div ref={circleRef} className={`${styles.circle}`} />
      <h1 ref={titleRef} className={`${styles.title}`}>
        <div ref={titleTextRef} className={`${styles.titleText}`}>
          <div>{t('how.titlePartOne')}</div>
          <div>
            <svg viewBox="0 0 211 106" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="52.6816" cy="53.125" r="52.5" fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M105.182 0.625L105.182 105.625C134.177 105.625 157.682 82.1199 157.682 53.125C157.682 24.1301 134.177 0.625 105.182 0.625Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M157.682 0.625L157.682 105.625C186.677 105.625 210.182 82.1199 210.182 53.125C210.182 24.1301 186.677 0.625 157.682 0.625Z"
                fill="white"
              />
            </svg>
          </div>
          <div>{t('how.titlePartTwo')}</div>
          <div className={`${styles.textForMobile}`}>{t('how.titlePartThreeMobile')}</div>
          <div className={`${styles.textForDesctop}`}>{t('how.titlePartThree')}</div>
        </div>
      </h1>
      <h3 ref={headingRef} className={`${styles.heading}`}>
        <div ref={headingTextRef} className={`${styles.headingText}`}>
          {t('how.smallText')}
        </div>
        <div ref={headingUnderscoreRef} className={`${styles.headingUnderscore}`} />
      </h3>
      <p className={`${styles.mainText}`}>{t('how.description1')}</p>
      <p className={`${styles.mainText}`}>{t('how.description2')}</p>
      <Button
        variant="white"
        title={t('how.buttonDemo')}
        className={`${styles.button}`}
        onClick={openModal}
      />

      {modalIsOpen && (
        <Modal onClose={closeModal}>
          <ContactFormModal
            onClose={closeModal}
            title="Готовы поднять ваш бизнес на новый уровень?"
          />
        </Modal>
      )}
    </div>
  );
};

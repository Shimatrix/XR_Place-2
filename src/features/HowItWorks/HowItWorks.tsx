/* Блок "как это работает" с кнопкой CTA */
//import { Button } from '../../components/Button';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './HowItWorks.module.scss';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '@/components/Button/Button';
import { useEffect } from 'react';
import { addAnimation } from '../../utils/addAnimation';

interface HowItWorksProps {
  openModal: () => void;
  closeModal: () => void;
  children?: React.ReactNode;
}

export const HowItWorksBlock: React.FC<HowItWorksProps> = ({
  openModal,
  closeModal,
  children,
  ...props
}: HowItWorksProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const background = location.state?.background;

  useEffect(() => {
    const howItWorksBlock = document.querySelector(`.${styles.howItWorksBlock}`);
    const width = howItWorksBlock?.clientWidth;
    const circle = document.querySelector(`.${styles.circle}`);
    const heading = document.querySelector(`.${styles.heading}`);
    const headingText = document.querySelector(`.${styles.headingText}`);
    const headingUnderscore = document.querySelector(`.${styles.headingUnderscore}`);
    const title = document.querySelector(`.${styles.title}`);
    const titleText = document.querySelector(`.${styles.titleText}`);

    if (width && width >= 574) {
      addAnimation([
        { element: headingText, styleToAdd: `${styles.animation}` },
        { element: circle, styleToAdd: `${styles.animation}` },
        { element: heading, child: headingUnderscore, styleToAdd: `${styles.animation}` },
        { element: title, child: titleText, styleToAdd: `${styles.animation}` },
      ]);
    } else {
      addAnimation([
        { element: headingText, styleToAdd: `${styles.animation}` },
        { element: heading, child: headingUnderscore, styleToAdd: `${styles.animation}` },
        { element: howItWorksBlock, child: circle, styleToAdd: `${styles.animation}` },
        { element: title, child: titleText, styleToAdd: `${styles.animation}` },
      ]);
    }
  }, []);

  return (
    <div className={`${styles.howItWorksBlock}`}>
      <div className={`${styles.circle}`} />
      <h1 className={`${styles.title}`}>
        <div className={`${styles.titleText}`}>
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
      <h3 className={`${styles.heading}`}>
        <div className={`${styles.headingText}`}>{t('how.smallText')}</div>
        <div className={`${styles.headingUnderscore}`} />
      </h3>
      <p className={`${styles.mainText}`}>{t('how.description1')}</p>
      <p className={`${styles.mainText}`}>{t('how.description2')}</p>
      <Button
        variant="white"
        title={t('how.buttonDemo')}
        className={`${styles.button}`}
        onClick={openModal}
      />

      {background && (
        <Modal onClick={closeModal} title="Готовы поднять ваш бизнес на новый уровень?">
          {children}
        </Modal>
      )}
    </div>
  );
};

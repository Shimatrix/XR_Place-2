'use strict';
/* Блок "как это работает" с кнопкой CTA */
//import { Button } from '../../components/Button';
import { useLocation } from 'react-router-dom';
import styles from './HowItWorks.module.scss';

interface Props {
  openModal?: () => void;
  closeModal?: () => void;
  children?: React.ReactNode;
}

export const HowItWorksBlock: React.FC = ({}) => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <div className={`${styles.howItWorksBlock}`}>
      <div className={`${styles.circle}`} />
      <h1 className={`${styles.title}`}>
        <div>как</div>
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
        <div>это</div>
        <div className={`${styles.textForMobile}`}>будет</div>
        <div className={`${styles.textForDesctop}`}>работает</div>
      </h1>
      <h3 className={`${styles.heading}`}>узнайте, как это работает</h3>
      <p className={`${styles.mainText}`}>
        Наши интерактивные решения помогут вашим клиентам с выбором недвижимости
      </p>
      <p className={`${styles.mainText}`}>
        Создайте незабываемый опыт для своих клиентов с помощью наших виртуальных туров
      </p>
      <button className={`${styles.button}`} type="button" onClick={openModal}>
        <div className={`${styles.buttonContent}`}>
          <p className={`${styles.textForMobile}`}>Заказать демо</p>
          <p className={`${styles.textForDesctop}`}>Назначить демо</p>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="11.0001"
              cy="11.0001"
              r="10.1708"
              fill="white"
              stroke="#2D2D2D"
              strokeWidth="0.462311"
            />
            <path
              d="M5.68311 16.0857L16.3163 6.146M16.3163 6.146H5.68311M16.3163 6.146V16.0857"
              stroke="#2D2D2D"
              strokeWidth="0.693466"
            />
          </svg>
        </div>
      </button>
    </div>
  );

  /* 
    {background && (
      <Modal onClose={closeModal}>
        {children}
      </Modal>
     )}
   */
};

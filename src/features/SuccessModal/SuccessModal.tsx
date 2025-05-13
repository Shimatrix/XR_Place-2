import React from 'react';
import styles from './success-modal.module.css';

type TModalSuccessProps = {
  buttonText: string;
  title: string;
  onClose: () => void;
};

const SuccessModalUI: React.FC<TModalSuccessProps> = ({ buttonText, title, onClose }) => (
  <>
    <img className={styles.icon} src="/src/images/success_icon.svg" alt="success icon" />
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.text}>
      <p className={styles.paragraph}>Контактные данные успешно отправлены.</p>
      <p className={styles.paragraph}>
        Мы свяжемся с вами в ближайшее время, чтобы обсудить все детали и ответить на вопросы.
      </p>
    </div>
    <button className={styles.button} onClick={onClose}>
      {buttonText}
      <img src="/src/images/arrow.svg" alt="arrow" />
    </button>
  </>
);

SuccessModalUI.displayName = 'SuccessModalUI';
export default SuccessModalUI;

import React from 'react';
import styles from './contact-form.module.css';

type TModalSuccessProps = {
  buttonText: string;
  title: string;
  onClose: () => void;
};

const ContactFormModal: React.FC<TModalSuccessProps> = ({ buttonText, title, onClose }) => (
  <>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.inputs_list}>
      <div className={styles.inputs_row}>
        <input className={styles.input} placeholder="Имя" type="phone" />
        <input className={styles.input} placeholder="Имя" />
      </div>
      <input className={styles.input} placeholder="Имя" />
      <input className={styles.input} placeholder="Имя" />
    </div>
    <button className={styles.button} onClick={onClose}>
      {buttonText}
      <img src="/src/assets/images/arrow.svg" alt="arrow" />
    </button>
    <button className={styles.close_button}>
      <img src="/src/assets/images/close_button.svg" alt="close" />
    </button>
  </>
);

ContactFormModal.displayName = 'ContactFormModal';
export default ContactFormModal;

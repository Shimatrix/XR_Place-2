import React from 'react';
import styles from './contactform.module.scss';

type TModalSuccessProps = {
  buttonText: string;
  title: string;
  onClose: () => void;
};

const ContactFormModal: React.FC<TModalSuccessProps> = ({ buttonText, title, onClose }) => (
  <div className={styles.content}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.paragraph}>
      Используйте наш инновационный виджет для создания захватывающих виртуальных туров и увеличьте
      интерес к вашим объектам.{' '}
    </p>
    <form className={styles.form}>
      <div className={styles.inputs_list}>
        <div className={styles.inputs_row}>
          <div className={styles.phone}>
            <div className={styles.country_select}>
              <select name="country" className={styles.select}>
                <option className={styles.option_ru} value="ru">
                  Россия
                </option>
                <option className={styles.option_ru} value="eng">
                  English
                </option>
              </select>
            </div>
            <input
              className={styles.phone_input}
              placeholder="+ _ ( __ ) ___ __ - __"
              type="phone"
            />
          </div>
          <input
            className={styles.input}
            placeholder="https://t.me/____________________"
            type="url"
          />
        </div>
        <input
          className={styles.input}
          placeholder="email___________________________________________________________________"
          type="email"
        />
        <input
          className={styles.input}
          placeholder="Как вас зовут__________________________________________________________"
        />
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" />
        <label className={styles.label} htmlFor="checkbox">
          Я принимаю условия{' '}
          <a className={styles.label_link} href="#">
            Политики обработки персональных данных
          </a>
        </label>
      </div>
      <input type="submit" className={styles.submit_button} onClick={onClose} value={buttonText} />
    </form>
    <button className={styles.close_button}>
      <img src="/src/assets/images/close_button.svg" alt="close button" />
    </button>
  </div>
);

ContactFormModal.displayName = 'ContactFormModal';
export default ContactFormModal;

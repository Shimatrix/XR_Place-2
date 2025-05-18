import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './contactform.module.scss';

type TModalSuccessProps = {
  buttonText: string;
  title: string;
  onClose?: () => void;
  onSubmit?: () => void;
};

const ContactFormModal: React.FC<TModalSuccessProps> = ({
  buttonText,
  title,
  onClose,
  onSubmit,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.paragraph}>{t('contact.description')}</p>
      <form className={styles.form}>
        <div className={styles.inputs_list}>
          <div className={styles.inputs_row}>
            <div className={styles.phone}>
              <div className={styles.country_select}>
                <select name="country" className={styles.select}>
                  <option value="ru">{t('contact.country.ru')}</option>
                  <option value="en">{t('contact.country.en')}</option>
                </select>
              </div>
              <input
                className={styles.phone_input}
                placeholder={t('contact.placeholder.phone')}
                type="tel"
              />
            </div>
            <input
              className={styles.input}
              placeholder={t('contact.placeholder.telegram')}
              type="url"
            />
          </div>
          <input
            className={styles.input}
            placeholder={t('contact.placeholder.email')}
            type="email"
          />
          <input className={styles.input} placeholder={t('contact.placeholder.name')} type="text" />
        </div>
        <div className={styles.checkbox}>
          <input id="privacy" type="checkbox" />
          <label className={styles.label} htmlFor="privacy">
            {t('contact.checkboxPrefix')}{' '}
            <a className={styles.label_link} href="#">
              {t('contact.checkboxLink')}
            </a>
          </label>
        </div>
        <input
          type="submit"
          className={styles.submit_button}
          onClick={onSubmit}
          value={buttonText}
        />
      </form>
      <button className={styles.close_button} onClick={onClose}>
        <img src="/src/assets/images/close_button.svg" alt={t('contact.closeAlt')} />
      </button>
    </div>
  );
};

ContactFormModal.displayName = 'ContactFormModal';
export default ContactFormModal;

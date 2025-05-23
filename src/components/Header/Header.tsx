import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import vector from '/src/assets/images/frame_49.svg';
import ellips from '/src/assets/images/ellips_ 497.svg';
import burger_menu from '/src/assets/images/burger_menu.svg';

const Header = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const menuItems = [
    { id: 1, titleKey: 'header.about', link: '#about' },
    { id: 2, titleKey: 'header.how_it_works', link: '#how-it-works' },
    { id: 3, titleKey: 'header.features', link: '#features' },
  ];

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLanguage);
  };

  const handleLanguageChange = (language: 'ru' | 'en') => {
    i18n.changeLanguage(language);
  };

  return (
    <header className={styles.header}>
      {/* <div className={styles.container}> */}

      {/* SVG логотип слева */}
      <div className={styles.logo}>
        <img className={styles.vector} src={vector} alt="vector" />
      </div>

      {/* Основное меню с разделителями */}
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.id}>
              {index > 0 && (
                <li className={styles.menu_divider}>
                  <div className={styles.divider} />
                </li>
              )}
              <li>
                <a href={item.link} className={styles.menu_link}>
                  {t(item.titleKey)} {/* Используем t() для перевода */}
                </a>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>

      {/* Правая часть (кнопка и язык) */}
      <div className={styles.right_section}>
        {/* Зелёная круглая кнопка */}
        <button
          className={styles.round_button}
          onClick={toggleLanguage} // Добавляем обработчик клика
        >
          <img className={styles.ellips} src={ellips} alt="ellips" />
        </button>

        {/* Переключатель языка */}
        <div className={styles.language_switcher}>
          <span
            className={currentLanguage === 'en' ? styles.language_active : styles.language_inactive}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </span>
          <div className={styles.language_divider} />
          <span
            className={currentLanguage === 'ru' ? styles.language_active : styles.language_inactive}
            onClick={() => handleLanguageChange('ru')}
          >
            RU
          </span>
        </div>
        <button className={styles.burger_menu}>
          <img className={styles.burger_menu} src={burger_menu} alt="burger_menu" />
        </button>
      </div>

      {/* </div> */}
    </header>
  );
};

export default Header;

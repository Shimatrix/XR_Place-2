import React from "react";
import styles from "./Header.module.scss";
import vector from "/src/images/vector.svg";
import ellips from "/src/images/ellips_ 497.svg";

const Header = () => {
  const menuItems = [
    { id: 1, title: "О КОМПАНИИ", link: "#about" },
    { id: 2, title: "КАК ЭТО РАБОТАЕТ", link: "#how-it-works" },
    { id: 3, title: "ВОЗМОЖНОСТИ", link: "#features" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {/* SVG логотип слева */}
          <div className={styles.logo}>
            <img className={styles.vector} src={vector} alt="vector" />
          </div>

          {/* Основное меню с разделителями */}
          <ul className={styles.menu}>
            {menuItems.map((item, index) => (
              <React.Fragment key={item.id}>
                {index > 0 && (
                  <li className={styles.menu_divider}>
                    <div className={styles.divider}></div>
                  </li>
                )}
                <li>
                  <a href={item.link} className={styles.menu_link}>
                    {item.title}
                  </a>
                </li>
              </React.Fragment>
            ))}
          </ul>

          {/* Правая часть (кнопка и язык) */}
          <div className={styles.right_section}>
            {/* Зелёная круглая кнопка */}
            <button className={styles.round_button}>
              <img className={styles.ellips} src={ellips} alt="ellips" />
            </button>

            {/* Переключатель языка */}
            <div className={styles.language_switcher}>
              <span className={styles.language_inactive}>EN</span>
              <div className={styles.language_divider}></div>
              <span className={styles.language_active}>RU</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

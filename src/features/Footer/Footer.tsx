// /* Подвал сайта
import React from 'react';
import styles from './footer.module.scss';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.desktopFooter}>
        <div className={styles.container}>
          <div className={styles.containerColumn}>
            <div className={styles.column}>
              <h4 className={styles.contacts}>контакты</h4>
              <p className={styles.contactText}>
                Melikishvili str. 92/16
                <br />
                6004 Batumi, Georgia
              </p>
              <p className={styles.contactText}>Copyright ©2024 XR Place</p>
            </div>

            <div className={styles.column}>
              <h4 className={styles.menu}>меню</h4>
              <ul className={styles.menuList}>
                <li>О компании</li>
                <li>Как это работает</li>
                <li>Возможности</li>
                <li>Назначить ДЕМО</li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.social}>соцсети</h4>
              <ul className={styles.socialList}>
                <li>
                  <a href="mailto:hello@xrlace.io">hello@xrlace.io</a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <a href="#top" className={styles.toTop}>
            В НАЧАЛО↗
          </a>
        </div>
      </div>

      <div className={styles.mobileFooter}>
        <div className={styles.logoBlock}>
          <div className={styles.logoIcon}>
            <svg
              width="40"
              height="27"
              viewBox="0 0 40 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0599 11.7346L21.5444 3.8024M14.5104 15.4232L23.0885 6.00879M15.3039 18.061L24.673 8.1533M16.8265 20.6558L25.5344 11.22M18.392 22.4392L25.5344 14.7799M38.6577 12.9999C38.6577 19.8101 33.1369 25.3309 26.3267 25.3309C19.5165 25.3309 13.9958 19.8101 13.9958 12.9999C13.9958 6.1897 19.5165 0.668945 26.3267 0.668945C33.1369 0.668945 38.6577 6.1897 38.6577 12.9999ZM25.6619 12.9999C25.6619 19.8101 20.1412 25.3309 13.331 25.3309C6.52076 25.3309 1 19.8101 1 12.9999C1 6.1897 6.52076 0.668945 13.331 0.668945C20.1412 0.668945 25.6619 6.1897 25.6619 12.9999Z"
                stroke="white"
                strokeWidth="1.28671"
              />
            </svg>

            <span className={styles.logoText}>xr place</span>
          </div>
          <a href="#top" className={styles.toTop}>
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.657227" width="30" height="30" rx="15" fill="white" />
              <path
                d="M15.8496 24.3848V5.99999M15.8496 5.99999L6.65723 15.1924M15.8496 5.99999L25.042 15.1924"
                stroke="#4D4D4D"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>
        <div className={styles.address}>
          <p>Melikishvili str. 92/16</p>
          <p>6004 Batumi, Georgia</p>
          <p>Copyright ©2024 XR Place</p>
        </div>

        <nav className={styles.menu}>
          <ul>
            <li>о компании</li>
            <li>как это работает</li>
            <li>возможности</li>
            <li>назначить демо</li>
          </ul>
        </nav>

        <div className={styles.social}>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

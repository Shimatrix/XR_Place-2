import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ClientsCards.module.scss';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

interface ClientsCardProps {
  title?: string;
  percent?: string;
  description?: string;
  svg: string;
  className?: string;
}

const ClientsCard: React.FC<ClientsCardProps> = ({ title, svg, className = '' }) => {
  return (
    <div className={`${styles.clientCard} ${className}`}>
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      <div className={styles.cardImage} dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
};

const ClientBlockCards: React.FC = () => {
  const [modalData, setModalData] = useState<ClientsCardProps | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  const cards: ClientsCardProps[] = [
    {
      title: t('clientsCards.titleCardConversion'),
      percent: '18%',
      description: t('clientsCards.descriptionCardConversion'),
      svg: '<svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0v32c8.837 0 16-7.163 16-16S8.837 0 0 0ZM64 32V0c-8.837 0-16 7.163-16 16s7.163 16 16 16Z" fill="inherit"/><circle cx="32" cy="16" r="16" fill="inherit"/></svg>',
    },
    {
      title: t('clientsCards.titleCardEmbedding'),
      percent: '100%',
      description: t('clientsCards.descriptionCardEmbedding'),
      svg: '<svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9.667" cy="9.667" r="9.667" fill="inherit"/><circle cx="9.667" cy="29" r="9.667" fill="inherit"/><circle cx="9.667" cy="48.333" r="9.667" fill="inherit"/><circle cx="29.003" cy="9.667" r="9.667" fill="inherit"/><circle cx="29.003" cy="29" r="9.667" fill="inherit"/><circle cx="29.003" cy="48.334" r="9.667" fill="inherit"/><circle cx="48.331" cy="9.667" r="9.667" fill="inherit"/><circle cx="48.331" cy="29" r="9.667" fill="inherit"/><circle cx="48.331" cy="48.334" r="9.667" fill="inherit"/></svg>',
    },
    {
      title: t('clientsCards.titleCardTrust'),
      percent: '88%',
      description: t('clientsCards.descriptionCardTrust'),
      svg: '<svg width="65" height="62" viewBox="0 0 65 62" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="48.852" cy="16.146" r="16.146" fill="#7C7C7C"/><circle cx="48.852" cy="45.854" r="16.146" fill="#7C7C7C"/><circle cx="16.563" cy="16.146" r="16.146" fill="#7C7C7C"/><circle cx="16.563" cy="45.854" r="16.146" fill="#7C7C7C"/><path fill="currentColor" d="M16.565 14.209h32.291V46.5H16.565z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.711 14.617c-.216 8.728-7.36 15.737-16.14 15.737h-.006.005c8.781 0 15.925 7.01 16.141 15.738.217-8.729 7.36-15.738 16.14-15.738h.006-.005c-8.78 0-15.924-7.01-16.14-15.737Z" fill="#7C7C7C"/></svg>',
    },
    {
      title: t('clientsCards.titleCardSales'),
      percent: '15%',
      description: t('clientsCards.descriptionCardSales'),
      svg: '<svg width="68" height="34" viewBox="0 0 68 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34 17H0c0 9.389 7.611 17 17 17s17-7.611 17-17ZM34 17h34c0-9.389-7.611-17-17-17S34 7.611 34 17Z" fill="inherit"/></svg>',
    },
    {
      title: t('clientsCards.titleCardAccuracy'),
      percent: '100%',
      description: t('clientsCards.descriptionCardAccuracy'),
      svg: '<svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.867 22.754a23.166 23.166 0 0 1 1.827-.103c12.61-.22 23.014 9.796 23.273 22.386-.603.058-1.212.093-1.827.104-12.61.22-23.014-9.796-23.273-22.387ZM.867 2.18a23.21 23.21 0 0 1 1.827-.105c12.61-.22 23.014 9.797 23.273 22.387-.603.058-1.212.093-1.827.104-12.61.22-23.014-9.797-23.273-22.387Z" fill="inherit"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.981 44.997a22.79 22.79 0 0 0 16.658-5.136c5.376-4.44 8.203-10.82 8.303-17.284a22.79 22.79 0 0 0-16.658 5.137c-5.375 4.439-8.202 10.82-8.303 17.283ZM22.981 24.422a22.79 22.79 0 0 0 16.658-5.136c5.376-4.44 8.203-10.82 8.303-17.284A22.79 22.79 0 0 0 31.284 7.14c-5.375 4.439-8.202 10.82-8.303 17.283Z" fill="inherit"/></svg>',
    },
    {
      title: t('clientsCards.titleCardInteractivity'),
      percent: '25%',
      description: t('clientsCards.descriptionCardInteractivity'),
      svg: '<svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="inherit"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 0v40c11.046 0 20-8.954 20-20S51.046 0 40 0ZM60 0v40c11.046 0 20-8.954 20-20S71.046 0 60 0Z" fill="inherit"/></svg>',
    },
  ];

  const openModal = (card: ClientsCardProps) => {
    setModalData(card);
  };
  const closeModal = () => {
    setModalData(null);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    // находим все .clientCard внутри контейнера
    const elems = Array.from(
      containerRef.current.querySelectorAll<HTMLDivElement>(`.${styles.clientCard}`),
    );
    // задаём каждой задержку через CSS-переменную
    elems.forEach((el, i) => {
      el.style.setProperty('--delay', `${i * 150}ms`);
    });
    // создаём триггер: при скролле добавляем класс .is-visible
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        elems.forEach((el) => el.classList.add(styles.isVisible || 'is-visible'));
      },
    });
  }, []);

  return (
    <div>
      <div ref={containerRef} className={styles.clientBlockCards}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.cardWrapper} ${styles[`card-${index + 1}`]}`}
            onClick={() => openModal(card)}
          >
            <ClientsCard {...card} />
          </div>
        ))}

        {modalData && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent}>
              <div
                className={styles.modalImage}
                dangerouslySetInnerHTML={{ __html: modalData.svg }}
              />
              <span className={styles.percent}>{modalData.percent}</span>
              <p className={styles.description}>{modalData.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientBlockCards;

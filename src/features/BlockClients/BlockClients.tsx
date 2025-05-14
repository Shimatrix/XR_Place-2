import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './BlockClients.module.scss';
import { BlockLabel } from '@/components/BlockLabel/BlockLabel';
import BlockTitle from '@/components/BlockTitle/BlockTitle';
import Typography from '@/components/Typography/Typography';
import ClientBlockCards from './ClientsCards';

const BlockClients = () => {
  const { t } = useTranslation();

  // const labelText = 'Сотрудничество';
  // const titleTextPartOne = 'клиенты';
  // const titleTextPartTwo = 'нам доверяют';
  // const highlightedPhrase = 'доверяют';
  // const descriptionText =
  //   'Наши клиенты — это часть нашей команды. С нами вы всегда можете рассчитывать на поддержку \nи экспертизу, ведь мы стремимся к тому, чтобы наше партнёрство не оставило вас равнодушными';

  return (
    <div className={styles.blockContainer}>
      <div className={styles.blockContent}>
        <div className={styles.headerGroup}>
          <BlockLabel className={styles.label}>{t('clients.label')}</BlockLabel>

          <div className={styles.titleGroup}>
            <BlockTitle className={styles.titlePart}>{t('clients.titlePartOne')}</BlockTitle>
            <BlockTitle
              className={styles.titlePart}
              highlightedPhrase={t('clients.highlightedPhrase')}
            >
              {t('clients.titlePartTwo')}
            </BlockTitle>
          </div>
        </div>

        <div className={styles.descriptionWrapper}>
          <Typography variant="p" className={styles.description}>
            {t('clients.description')}
          </Typography>
        </div>

        <div className={styles.clientBlockCards}>
          <ClientBlockCards />
        </div>
      </div>
    </div>
  );
};

export default BlockClients;

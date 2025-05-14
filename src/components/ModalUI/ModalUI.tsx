import { FC } from 'react';

import styles from './modal.module.scss';
import { TModalUIProps } from './type';

const ModalUI: FC<TModalUIProps> = ({ children }) => (
  <div className={styles.overlay}>
    <div className={styles.modal}>{children}</div>
  </div>
);

ModalUI.displayName = 'ModalUI';
export default ModalUI;

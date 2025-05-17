import { FC } from 'react';

import styles from './modal.module.scss';
import { TModalUIProps } from './type';

const ModalUI: FC<TModalUIProps> = ({ isOpen, children, onClick }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClick}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

ModalUI.displayName = 'ModalUI';
export default ModalUI;

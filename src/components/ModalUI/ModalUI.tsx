import { FC } from 'react';

import styles from './modal.module.scss';
import { TModalUIProps } from './type';

const ModalUI: FC<TModalUIProps> = ({ onClick, children }) => (
  <>
    <div className={styles.modal}>{children}</div>
    <div className={styles.overlay} onClick={onClick} />
  </>
);

ModalUI.displayName = 'ModalUI';
export default ModalUI;

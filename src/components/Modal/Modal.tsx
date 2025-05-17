/* Компонент с props: closeModal */

import React from 'react';
import ModalUI from '../ModalUI/ModalUI';

interface ModalProps {
  children?: React.ReactNode;
  onClick?: () => void;
  title?: string;
  isOpen?: boolean;
}

export const Modal: React.FC<ModalProps> = ({ onClick, isOpen, children }) => {
  return (
    <div>
      <ModalUI isOpen={isOpen} onClick={onClick}>
        {children}
      </ModalUI>
    </div>
  );
};

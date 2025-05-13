/* Компонент с props: closeModal */

import React from 'react';

interface ModalProps {
  children?: React.ReactNode;
  onClick?: () => void;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({}) => {
  return <></>;
};

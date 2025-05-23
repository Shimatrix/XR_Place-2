import { ReactNode } from 'react';

export type TModalUIProps = {
  children?: ReactNode;
  onClick?: () => void;
  isOpen?: boolean;
};

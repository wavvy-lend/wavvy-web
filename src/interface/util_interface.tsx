import { ReactNode } from 'react';

export interface ImageProps {
  nftLoan?: string;
}

export interface IParentModal {
  title: string;
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

export interface IDetailedList {
  info: string;
  price: string;
}

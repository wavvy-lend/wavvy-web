import { MutableRefObject, PropsWithChildren, Ref } from 'react';

export interface ModalContainerProps extends PropsWithChildren {
  label: string;
  open: boolean;
  ref?: any;
  close: () => void;
}

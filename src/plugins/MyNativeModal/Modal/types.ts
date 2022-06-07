import { Dispatch, SetStateAction } from 'react';

export type Modal = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

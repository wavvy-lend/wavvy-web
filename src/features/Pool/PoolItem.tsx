'use client';

import { useState } from 'react';
import OpenDapp from './BorrowModal';
import ModalContainer from '@/ui/Modal/Modal';
import BorrowModal from './BorrowModal';

const PoolDetails = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <dt className="text-[12px]/[14px] font-semibold text-alt-200">{name}</dt>
      <dd className="font-rube text-[14px]/[16px] font-bold text-white">{value}</dd>
    </div>
  );
};

export const PoolItem = () => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  return (
    <div className="group flex w-full items-center justify-between gap-4 rounded-[10px] bg-grey-200 p-4 hover:bg-prime-200">
      <div className="flex items-center gap-2">
        <span className="text-[14px]/[16px] text-grey-100">1</span>
        <button className="font-rube text-[20px]/[24px] text-[#999999] group-hover:underline" onClick={openModal}>
          0x569...5582c
        </button>
      </div>

      <PoolDetails name="Loans" value="2" />
      <PoolDetails name="Avg APY" value="14.32%" />
      <PoolDetails name="Volume" value="$941.86K" />
      <ModalContainer label="Create Pool" open={open} close={closeModal}>
        <BorrowModal />
      </ModalContainer>
    </div>
  );
};

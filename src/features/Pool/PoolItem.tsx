import { PropsWithChildren, useState } from 'react';
import ModalContainer from '@/ui/Modal/Modal';
import BorrowModal from './BorrowModal';
import { shortenAddress } from '@/util/util';

const PoolDetails = ({ name, value }: { name: string; value: string | number }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <dt className="text-[12px]/[14px] font-semibold text-alt-200 group-hover:text-grey-100">{name}</dt>
      <dd className="font-rube text-[14px]/[16px] font-bold text-white">{value}</dd>
    </div>
  );
};

export interface IPoolItems extends PropsWithChildren {
  id?: number;
  unique_id: string;
  contract_pool_id: string;
  network: string;
  creator_id: string;
  payment_cycle: string;
  apr: number;
  noOfLoans: number;
  duration_in_secs: number;
  duration_in_months: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  volume: number;
}

export const PoolItem = ({ pool }: { pool: IPoolItems }) => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }

  console.log(pool);
  return (
    <div className="group flex w-full items-center justify-between gap-4 rounded-[10px] bg-grey-200 p-4 hover:bg-prime-200">
      <div className="flex items-center gap-2">
        <span className="text-[14px]/[16px] text-grey-100">{pool.contract_pool_id}</span>
        <button className="font-rube text-[20px]/[24px] text-[#999999] group-hover:underline" onClick={openModal}>
          {shortenAddress(pool.creator_id)}
        </button>
      </div>

      <PoolDetails name="Loans" value={pool.noOfLoans} />
      <PoolDetails name="Avg APY" value={`${pool.apr}%`} />
      <PoolDetails name="Volume" value={`$ ${pool.volume}`} />
      <ModalContainer label="Buy with Wavvy" open={open} close={closeModal}>
        <BorrowModal />
      </ModalContainer>
    </div>
  );
};

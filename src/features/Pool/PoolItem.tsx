import { PropsWithChildren, useEffect, useState } from 'react';
import ModalContainer from '@/ui/Modal/Modal';
import { BorrowModal } from './BorrowModal';
import { fetcher, shortenAddress } from '@/util/util';
import useSWR from 'swr';
import { useParams } from 'next/navigation';

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
  duration_in_secs: number;
  duration_in_months: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  volume: number;
  noOfLoans: number;
}

export interface IPurchaseItems {
  borrower: string;
  collectionName: string;
  contract_loan_id: string;
  contract_pool_id: string;
  created_at: string;
  debt: number;
  id: number;
  network: string;
  nextDueDate: string;
  principal: string;
  status: string;
  tokenAvatar: string;
  tokenId: string;
  unique_id: string;
  updated_at: string;
  purchaseStatus: string;
  collectionAddress: string;
  contractPurchaseId: string;
}

export const PoolItem = ({ pool }: { pool: IPoolItems }) => {
  const [open, setOpen] = useState(false);
  let [loanTerm, setLoanTerm] = useState(null);
  let [selectedPoolId, setSelectedPoolId] = useState('0');
  const { collectionId, tokenId } = useParams();

  const { data: tokenDetails } = useSWR('tokens/get/' + collectionId + '/' + tokenId, fetcher, { suspense: true });
  const { data: collection } = useSWR('collections/' + collectionId, fetcher, { suspense: true });

  async function openModal(e: React.MouseEvent) {
    let element = e.target as HTMLButtonElement;
    let poolId = element.getAttribute('data-poolid');
    poolId !== null && (await fetchPoolDetails(poolId));
    await fetchLoanTerm(poolId);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }
  async function fetchPoolDetails(poolId: string) {
    let data = await fetcher('pools/' + poolId);
    setSelectedPoolId(data.data[0].contract_pool_id);
  }

  async function fetchLoanTerm(poolId: string | null) {
    let data = await fetcher('loan/terms/' + poolId + '/' + collectionId + '/' + tokenId);
    setLoanTerm(data.data);
  }

  return (
    <div className="group flex w-full items-center justify-between gap-4 rounded-[10px] bg-grey-200 p-4 hover:bg-prime-200">
      <div className="flex items-center gap-2">
        <span className="text-[14px]/[16px] text-grey-100">{pool.contract_pool_id}</span>
        <button
          data-poolid={pool.unique_id}
          className="font-rube text-[20px]/[24px] text-[#999999] group-hover:underline"
          onClick={openModal}
        >
          {shortenAddress(pool.creator_id)}
        </button>
      </div>

      <PoolDetails name="Loans" value={pool.noOfLoans} />
      <PoolDetails name="Avg APY" value={`${pool.apr}%`} />
      <PoolDetails name="Volume" value={`$ ${pool.volume}`} />
      <ModalContainer label="Buy with Wavvy" open={open} close={closeModal}>
        {loanTerm && tokenDetails && (
          <BorrowModal
            tokenDetails={tokenDetails?.data}
            loanTerm={loanTerm}
            collectionAddress={collection.data[0].address}
            poolContractId={selectedPoolId}
          />
        )}
      </ModalContainer>
    </div>
  );
};

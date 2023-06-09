'use client';
import { useContractContext } from '@/context/contract-context';
import LoanCard from '@/features/dashboard/components/LoanCard';
import { toast } from 'react-hot-toast';
import NoContent from '@/components/no-content';
import { IPurchaseItems } from '@/features/Pool/PoolItem';
import { useGetUserPurchaseQuery } from '@/redux/services/userApi';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

const Card = () => {
  const [userId, setUserId] = useState('');
  const { data: purchases } = useGetUserPurchaseQuery(userId, { skip: userId === '' });

  const {
    account: { isAuthenticated }
  } = useContractContext();

  if (!isAuthenticated) {
    toast.error('Please connect your wallet to view your pools');
    redirect('/');
  }
  console.log({purchases})

  useEffect(() => {
    if (typeof window !== undefined) {
      const id = localStorage.getItem('user_id');
      if (id) {
        setUserId(id);
      }
    }
  }, []);

  return (
    <section className="grid w-full grid-cols-1 gap-4">
      {purchases?.length > 0 ? (
        <>
          {purchases?.map((purchase: IPurchaseItems, key: any) => (
            <LoanCard
              key={key}
              name={purchase.collectionName}
              amount={purchase.debt}
              dueDate={purchase.nextDueDate}
              avatar={purchase.tokenAvatar}
              tokenId={purchase.tokenId}
              loanId={purchase.unique_id}
              purchaseStatus={purchase.purchaseStatus}
              collectionAddress={purchase.collectionAddress}
              contractPurchaseId={purchase.contractPurchaseId}
            />
          ))}
        </>
      ) : (
        <NoContent label="You've not made a purchase yet." />
      )}
      {/* <LoanCard name={'Outlaws'} amount={10} dueDate={'30'} /> */}
    </section>
  );
};

export default Card;

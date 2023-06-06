'use client';

import AuthUser from '@/components/auth-user';
import useSWR from 'swr';
import { useContractContext } from '@/context/contract-context';
import LoanCard from '@/features/dashboard/components/LoanCard';
import { toast } from 'react-hot-toast';
import { fetcher } from '@/util/util';
import NoContent from '@/components/no-content';
import { IPurchaseItems } from '@/features/Pool/PoolItem';

const Card = () => {
  let userId = window.localStorage.getItem('user_id')
  const { data: purchases } = useSWR('purchase/user/projects/' + userId, fetcher, { suspense: true });

  const {
    account: { isAuthenticated }
  } = useContractContext();

  if (!isAuthenticated) {
    if (typeof window !== 'undefined') {
      document.location.href = '/';
    }

    toast.error('Please connect your wallet to view your pools');
  }

  return (
    <section className="grid w-full grid-cols-1 gap-4">
      {purchases.data.length > 0 ? (

        <>
          {purchases.data.map((purchase: IPurchaseItems, key: any) => (
            <LoanCard
              key={key}
              name={purchase.collectionName}
              amount={purchase.debt}
              dueDate={purchase.nextDueDate}
              avatar={purchase.tokenAvatar}
              tokenId={purchase.tokenId} />
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

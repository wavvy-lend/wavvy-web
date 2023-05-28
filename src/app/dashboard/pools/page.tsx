'use client';

import AuthUser from '@/components/auth-user';
import NoContent from '@/components/no-content';
import { useContractContext } from '@/context/contract-context';
import { CreatePool } from '@/features/Pool/CreatePool';
import { PoolItem } from '@/features/Pool/PoolItem';
import PoolItems from '@/features/Pool/PoolItems';
import { PoolsStats } from '@/features/Pool/PoolStats';
import { PoolStatsLoader } from '@/features/Pool/loader';
import { useGetUserPoolsQuery } from '@/redux/services/userApi';
import { Button } from '@/ui/Button';
import { ButtonOrLink } from '@/ui/Button/ButtonOrLink';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Suspense } from 'react';
import { toast } from 'react-hot-toast';

const Pools = () => {
  const router = useRouter();
  const {
    account: { isAuthenticated, address },
    connectWallet
  } = useContractContext();

  const user = isAuthenticated && address;

  const { data: pools, error, isLoading } = useGetUserPoolsQuery(user);

  // if (!isAuthenticated) return <AuthUser label="Connect your wallet to View your pools." onClick={connectWallet} />;

  if (!isAuthenticated) {
    router.push('/');

    toast.error('Connect your wallet to View your pools');
  }

  return (
    <>
      <section className="flex w-full items-center justify-between gap-4 rounded-lg bg-prime-200 bg-opacity-[0.19] px-8 py-5">
        <Suspense fallback={<PoolStatsLoader />}>
          <PoolsStats />
        </Suspense>
        <CreatePool />
      </section>

      <section className="h-full w-full">
        <div className="flex w-full items-center justify-between px-2 py-10">
          <h2 className="font-rob text-[45px]/[45px] font-bold text-white">Pools</h2>
        </div>
        <Suspense fallback={<PoolStatsLoader />}>
          {pools && pools.length < 1 ? (
            <NoContent label="Yo do not have any pool yet. To create a pool make use of the button above" />
          ) : (
            <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
              {pools?.map(pool => (
                <PoolItem key={pool.unique_id} pool={pool} />
              ))}
            </div>
          )}
        </Suspense>
      </section>
    </>
  );
};

export default Pools;

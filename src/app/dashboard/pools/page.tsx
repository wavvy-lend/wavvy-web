'use client';

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

import { Suspense } from 'react';

const Pools = () => {
  const {
    account: { isAuthenticated, address },
    connectWallet
  } = useContractContext();

  const { data: pools, error, isLoading } = useGetUserPoolsQuery(address);

  if (!isAuthenticated) {
    return (
      <section className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-[24px]/[24px] font-bold text-white">Connect your wallet to View your pools.</h1>
        <p className="text-[16px]/[24px] font-medium text-white">
          If you don&#39;t have a{' '}
          <ButtonOrLink href="" className="text-alt-100">
            wallet
          </ButtonOrLink>{' '}
          yet, you can select a provider and create one now.
        </p>
        <div className="flex w-full max-w-[200px] items-center justify-center py-5">
          <Button variant="filled" color="plain" fullwidth={true} onClick={connectWallet}>
            Connect Wallet
          </Button>
        </div>
      </section>
    );
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
          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
            {pools && pools.length > 1 ? (
              <NoContent label="Yo do not have any pool yet. kindly create on using the create pool butto above" />
            ) : (
              <>
                {pools?.map(pool => (
                  <PoolItem key={pool.unique_id} pool={pool} />
                ))}
              </>
            )}
          </div>
        </Suspense>
      </section>
    </>
  );
};

export default Pools;

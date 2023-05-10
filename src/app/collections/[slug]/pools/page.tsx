import { CreatePool } from '@/features/Pool/CreatePool';
import { PoolItem } from '@/features/Pool/PoolItem';
import { PoolsStats } from '@/features/Pool/PoolStats';
import PoolStatsCard from '@/features/Pool/PoolStatsCard';
import { PoolStatsLoader } from '@/features/Pool/loader';
import ClientOnly from '@/util/ClientOnly';
import { fetcher } from '@/util/util';
import { Suspense } from 'react';

const Pools = () => {
  // const { data: totalVolume } = useSWR('/pools/totalVolume', fetcher);
  // const { data: liquidityBorrowed } = useSWR('/pools/totalLiquidityBorrowed', fetcher);
  // const { data: liquidityAvailable } = useSWR('/pools/totalLiquidityAvailable', fetcher);

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

        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
          <PoolItem />
          <PoolItem />
          <PoolItem />
          <PoolItem />
        </div>
      </section>
    </>
  );
};

export default Pools;

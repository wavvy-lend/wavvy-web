import { CreatePool } from '@/features/Pool/CreatePool';
import PoolItems from '@/features/Pool/PoolItems';
import { PoolsStats } from '@/features/Pool/PoolStats';
import { PoolStatsLoader } from '@/features/Pool/loader';

import { Suspense } from 'react';

const Pools = () => {
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
        {/* <Suspense fallback={<PoolStatsLoader />}> */}
        <PoolItems />
        {/* </Suspense> */}
      </section>
    </>
  );
};

export default Pools;

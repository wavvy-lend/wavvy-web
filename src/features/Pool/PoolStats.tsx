'use client';
import useSWR from 'swr';
import { Suspense, useState } from 'react';
import { PoolStatsLoader } from './loader';
import PoolStatsCard from './PoolStatsCard';
import { fetcher } from '@/util/util';

export const PoolsStats = () => {
  const { data: totalVolume } = useSWR('/pools/totalVolume', fetcher);
  const { data: liquidityBorrowed } = useSWR('/pools/totalLiquidityBorrowed', fetcher);
  const { data: liquidityAvailable } = useSWR('/pools/totalLiquidityAvailable', fetcher);
  const { data: collections } = useSWR('/collections/active', fetcher);

  console.log(collections);

  return (
    <>
      <Suspense fallback={<PoolStatsLoader />}>
        <PoolStatsCard name="Total volume" value={totalVolume} />
      </Suspense>
      <Suspense fallback={<PoolStatsLoader />}>
        <PoolStatsCard name="Liquidity available" value={liquidityAvailable} />
      </Suspense>
      <Suspense fallback={<PoolStatsLoader />}>
        <PoolStatsCard name="Liquidity borrowed" value={liquidityBorrowed} />
      </Suspense>
    </>
  );
};

// const StatsCard = ({ name, value }: { name: string; value: string }) => (
//   <div className="flex flex-col items-start gap-2">
//     <Suspense fallback={<PoolStatsLoader />}>
//       <dd className="text-[13px]/[23px] text-white">{name}</dd>
//     </Suspense>
//     <dt className="font-rube text-[24px]/[34px] font-bold text-white">{value}</dt>
//   </div>
// );

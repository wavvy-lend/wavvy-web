'use client';
import useSWR from 'swr';
import { Suspense, useState } from 'react';
import { PoolStatsLoader } from './loader';
import PoolStatsCard from './PoolStatsCard';
import { fetcher } from '@/util/util';
import {
  useGetLiquidityAvailableQuery,
  useGetLiquidityBorrowedQuery,
  useGetVolumeQuery
} from '@/redux/services/poolApi';

export const PoolsStats = () => {
  // const { data: totalVolume } = useSWR('/pools/totalVolume', fetcher, { suspense: true });
  // const { data: liquidityBorrowed } = useSWR('/pools/totalLiquidityBorrowed', fetcher, { suspense: true });
  // const { data: liquidityAvailable } = useSWR('/pools/totalLiquidityAvailable', fetcher, { suspense: true });

  const { data: totalVolume } = useGetVolumeQuery('');
  const { data: liquidityBorrowed } = useGetLiquidityBorrowedQuery('');
  const { data: liquidityAvailable } = useGetLiquidityAvailableQuery('');

  return (
    <>
      <Suspense fallback={<PoolStatsLoader />}>
        {totalVolume ? <PoolStatsCard name="Total volume" value={totalVolume} /> : null}
        {liquidityAvailable ? <PoolStatsCard name="Liquidity available" value={liquidityAvailable} /> : ''}
        {liquidityBorrowed ? <PoolStatsCard name="Liquidity borrowed" value={liquidityBorrowed} /> : null}
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

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
import Skeleton from '@/ui/Skeleton';

export const PoolsStats = () => {
  const { data: totalVolume, isLoading: isVolumeLoading, isFetching: isVolumeFetching } = useGetVolumeQuery('');
  const { data: liquidityBorrowed, isLoading, isFetching } = useGetLiquidityBorrowedQuery('');
  const {
    data: liquidityAvailable,
    isLoading: isLiquidityLoading,
    isFetching: isLiquidtyFetching
  } = useGetLiquidityAvailableQuery('');

  return (
    <>
      <Suspense fallback={<PoolStatsLoader />}>
        {isVolumeLoading || isVolumeFetching ? (
          <Skeleton className="aspect-square h-[14px] w-[100px] animate-pulse" />
        ) : totalVolume ? (
          <PoolStatsCard name="Total volume" value={totalVolume} />
        ) : null}
        {isLoading || isFetching ? (
          <Skeleton className="aspect-square h-[14px] w-[100px] animate-pulse" />
        ) : liquidityAvailable ? (
          <PoolStatsCard name="Liquidity available" value={liquidityAvailable} />
        ) : (
          ''
        )}
        {isLiquidityLoading || isLiquidtyFetching ? (
          <Skeleton className="aspect-square h-[14px] w-[100px] animate-pulse" />
        ) : liquidityBorrowed ? (
          <PoolStatsCard name="Liquidity borrowed" value={liquidityBorrowed} />
        ) : null}
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

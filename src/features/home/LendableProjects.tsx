'use client';

import { useGetLimitPoolsQuery } from '@/redux/services/poolApi';
import { Suspense } from 'react';
import PoolCard from './components/PoolCard';
import { FectchLimitPoolSkelonton } from '@/components/skelonton';
import { toast } from 'react-hot-toast';

export default function LendableProjects() {
  const { data: pools, error, isLoading, isFetching } = useGetLimitPoolsQuery(4);

  // if (isLoading) return <FectchLimitPoolSkelonton />;

  if (error) {
    toast.error('Error while loading data, Prefecting');
    return <div />;
  }
  return (
    <section>
      <div className="my-[30px] mb-8 mt-[108px] flex w-full items-center justify-between px-2">
        <h2 className="font-rob text-[45px]/[45px] font-bold text-white">Lendable projects</h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4">
        {pools?.map(pool => (
          <PoolCard key={pool.unique_id} {...pool} />
        ))}
      </div>
      {isLoading || isFetching ? <FectchLimitPoolSkelonton /> : null}
    </section>
  );
}

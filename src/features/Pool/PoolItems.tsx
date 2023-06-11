'use client';

import { fetcher } from '@/util/util';
import useSWR from 'swr';
import { IPoolItems, PoolItem } from './PoolItem';
import NoContent from '@/components/no-content';
import { useGetPoolsQuery } from '@/redux/services/poolApi';
import { PoolSkelton } from '@/components/skelonton';

export default function PoolItems() {
  const { data: pools, isLoading, isFetching } = useGetPoolsQuery(5);
  // const { data: pools } = useSWR('/pools/active', fetcher, { suspense: true });

  return (
    <>
      {pools && pools.length < 1 ? (
        <NoContent label="Sorry, no pools to fund your loan currently." />
      ) : (
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
          {isLoading || isFetching ? (
            <PoolSkelton />
          ) : (
            pools?.map((pool: IPoolItems) => <PoolItem key={pool.unique_id} pool={pool} />)
          )}
        </div>
      )}
    </>
  );
}

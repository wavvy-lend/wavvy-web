'use client';

import { fetcher } from '@/util/util';
import useSWR from 'swr';
import { IPoolItems, PoolItem } from './PoolItem';
import NoContent from '@/components/no-content';

export default function PoolItems() {
  const { data: pools } = useSWR('/pools/active', fetcher, { suspense: true });

  return (
    <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
      {pools.data.length > 0 ? (
        <>
          {pools.data.map((pool: IPoolItems) => (
            <PoolItem key={pool.unique_id} pool={pool} />
          ))}
        </>
      ) : (
        <NoContent label="No Pools Found create one" />
      )}
    </div>
  );
}

'use client';

import { fetcher } from '@/util/util';
import useSWR from 'swr';
import { IPoolItems, PoolItem } from './PoolItem';
import { PoolStatsLoader } from './loader';
import { Suspense, useEffect, useState } from 'react';

export default function PoolItems() {
  const { data: pools } = useSWR('/pools/active', fetcher, { suspense: true });

  // const [pools, setPools] = useState([]);

  // // const pools: IPoolItems[] = data;

  // useEffect(() => {
  //   setPools(data.data);
  // });

  // console.log(pools);

  return (
    <div
      className="grid w-full grid-cols-1
     gap-5 lg:grid-cols-2"
    >
      <Suspense fallback={<PoolStatsLoader />}>
        {pools.data.length > 0 ? (
          <>
            {pools.data.map((pool: IPoolItems) => (
              <PoolItem key={pool.unique_id} pool={pool} />
            ))}
          </>
        ) : (
          ''
        )}
      </Suspense>
    </div>
  );
}

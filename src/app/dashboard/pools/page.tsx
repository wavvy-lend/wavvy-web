'use client';

import NoContent from '@/components/no-content';
import { useContractContext } from '@/context/contract-context';
import { CreatePool } from '@/features/Pool/CreatePool';
import { PoolItem } from '@/features/Pool/PoolItem';
import { PoolsStats } from '@/features/Pool/PoolStats';
import { useGetUserPoolsQuery } from '@/redux/services/userApi';
import { toast } from 'react-hot-toast';
import { redirect } from 'next/navigation';
import { shortenAddress } from '@/util/util';

export interface IPoolItems extends React.PropsWithChildren {
  id?: number;
  unique_id: string;
  contract_pool_id: string;
  network: string;
  creator_id: string;
  payment_cycle: string;
  apr: number;
  duration_in_secs: number;
  duration_in_months: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  volume: number;
  noOfLoans: number;
}

const Pools = () => {
  const {
    account: { isAuthenticated, address }
  } = useContractContext();

  const user = isAuthenticated && address;

  const { data: pools, error, isLoading } = useGetUserPoolsQuery(user);

  if (!isAuthenticated) {
    redirect('/');
  }

  return (
    <>
      <section className="flex w-full items-center justify-between gap-4 rounded-lg bg-prime-200 bg-opacity-[0.19] px-8 py-5">
        <PoolsStats />
        <CreatePool />
      </section>

      <section className="h-full w-full">
        <div className="flex w-full items-center justify-between px-2 py-10">
          <h2 className="font-rob text-[45px]/[45px] font-bold text-white">Pools</h2>
        </div>

        {pools && pools.length < 1 ? (
          <NoContent label="You've not created a pool yet. To start lending to buyers, use the button above." />
        ) : (
          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
            {pools?.map(pool => (
              <div
                key={pool.unique_id}
                className="group flex w-full items-center justify-between gap-4 rounded-[10px] bg-grey-200 p-4 hover:bg-prime-200"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[14px]/[16px] text-grey-100">{pool.contract_pool_id}</span>
                  <button
                    data-poolid={pool.unique_id}
                    className="font-rube text-[20px]/[24px] text-[#999999] group-hover:underline"
                  >
                    {shortenAddress(pool.creator_id)}
                  </button>
                </div>

                <PoolDetails name="Loans" value={pool.noOfLoans} />
                <PoolDetails name="Avg APY" value={`${pool.apr}%`} />
                <PoolDetails name="Volume" value={`$ ${pool.volume}`} />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Pools;

const PoolDetails = ({ name, value }: { name: string; value: string | number }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <dt className="text-[12px]/[14px] font-semibold text-alt-200 group-hover:text-grey-100">{name}</dt>
      <dd className="font-rube text-[14px]/[16px] font-bold text-white">{value}</dd>
    </div>
  );
};

import { shortenAddress } from '@/util/util';
import { Button } from '@/ui/Button';
import Image from 'next/image';

export interface IPool {
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
}

export default function PoolCard({ ...pool }: IPool) {
  return (
    <div className="block h-full w-full max-w-[319px] rounded-[19px] bg-grey-200 p-4 font-rob">
      <div className="flex w-full justify-between gap-4 py-4">
        <h1 className="truncate pb-2 font-rob text-[16px]/[16px] font-bold text-white">
          {shortenAddress(pool.creator_id)}
        </h1>

        <span className="text-[14px]/[14px] font-medium text-white">
          <span className="text-alt-300">{pool.apr}%</span> APR
        </span>
      </div>

      <Button href={`/pool/${pool.unique_id}`} variant="filled" color="primary" fullwidth>
        View Pool
      </Button>
    </div>
  );
}

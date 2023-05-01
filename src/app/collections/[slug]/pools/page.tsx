import { PoolItem } from '@/features/Pool/PoolItem';
import { PoolsStats } from '@/features/Pool/PoolStats';

const StatsCard = ({ name, value }: { name: string; value: string }) => (
  <div className="flex flex-col items-center gap-2">
    <span className="font-rube text-[24px]/[34px] font-bold text-white">{value}</span>
    <span className="text-[13px]/[23px] text-white">{name}</span>
  </div>
);

export default function Pools() {
  return (
    <>
      <PoolsStats />

      <section className="h-full w-full">
        <div className="flex w-full items-center justify-between px-2 py-10">
          <h2 className="font-rob text-[45px]/[45px] font-bold text-white">Pools</h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
          <PoolItem />
          <PoolItem />
          <PoolItem />
          <PoolItem />
        </div>
      </section>
    </>
  );
}

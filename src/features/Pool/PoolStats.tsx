import { Button } from '@/ui/Button';

export const PoolsStats = () => {
  return (
    <section className="flex w-full items-center justify-between gap-4 rounded-lg bg-prime-200 bg-opacity-[0.19] px-8 py-5">
      <StatsCard name="Total volume" value="$545.48K" />

      <StatsCard name="Liquidity available" value="$941.86K" />
      <StatsCard name="Liquidity borrowed" value="$123.91K" />
      <div>
        <Button variant="filled" color="primary" fullwidth>
          Create Pool
        </Button>
      </div>
    </section>
  );
};

const StatsCard = ({ name, value }: { name: string; value: string }) => (
  <div className="flex flex-col items-center gap-2">
    <span className="font-rube text-[24px]/[34px] font-bold text-white">{value}</span>
    <span className="text-[13px]/[23px] text-white">{name}</span>
  </div>
);

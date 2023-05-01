const PoolDetails = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <span className="font-rube text-[15px]/[24px] font-bold text-white">{value}</span>
      <span className="text-[13px]/[18px] text-grey-100">{name}</span>
    </div>
  );
};

export const PoolItem = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-t-md border-b border-grey-100 p-4 hover:bg-grey-200">
      <span className="font-rube text-[18px]/[24px] text-white">
        <span className="text-[14px]">1</span> wavvy lend{' '}
      </span>

      <div className="flex items-center gap-8">
        <PoolDetails name="Loans" value="2" />
        <PoolDetails name="Avg APY" value="14.32%" />
        <PoolDetails name="Volume" value="$941.86K" />
      </div>
    </div>
  );
};

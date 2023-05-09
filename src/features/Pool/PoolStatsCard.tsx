type IPoolStatas = {
  name: string;
  value: number;
};

export default function PoolStatsCard({ name, value }: IPoolStatas) {
  return (
    <div className="flex flex-col items-start gap-2">
      <dd className="text-[13px]/[23px] text-white">{name}</dd>

      <dt className="font-rube text-[24px]/[34px] font-bold text-white">{value}</dt>
    </div>
  );
}

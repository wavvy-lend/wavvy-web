import Skeleton from '@/ui/Skeleton';

export const FectchLimitPoolSkelonton = () => {
  const PoolSkel = () => (
    <div className="block h-full max-w-[319px] animate-pulse space-y-4 rounded-2xl bg-grey-300 p-4">
      <div className="flex w-full justify-between gap-4 py-4">
        <div className="h-4 w-full rounded-md bg-grey-200" />
        <div className="h-4 w-[100px] rounded-md bg-grey-200" />
      </div>

      <div className="h-8 w-full rounded-md bg-grey-200" />
    </div>
  );

  return (
    <section className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4">
      <PoolSkel />
      <PoolSkel />
      <PoolSkel />
      <PoolSkel />
    </section>
  );
};

export const TokenDetails = () => {
  return (
    <section className="flex h-full w-full animate-pulse flex-col items-start gap-4 rounded-[19px] bg-grey-300">
      <Skeleton className="aspect-video h-[200px] w-full" />

      <div className="flex w-full flex-col gap-5 p-6">
        <Skeleton className="-mt-[100px] aspect-auto h-[130px] w-[130px]" />

        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </section>
  );
};

export const TokenSkelton = ({ count = 4 }: { count?: number }) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="block h-full w-full max-w-[319px] animate-pulse rounded-[19px] bg-grey-300 p-4 font-rob"
        >
          <Skeleton className="mb-[21px] h-[138px] w-full" />
          <Skeleton className="mb-4 h-4 w-full" />

          <div className="flex w-full justify-between gap-4 py-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[100px]" />
          </div>

          <Skeleton className="mt-4 h-10 w-full" />
        </div>
      ))}
    </>
  );
};

export const CollectionLoader = () => {
  const Loader = () => (
    <div className="block h-full w-full max-w-[319px] animate-pulse rounded-[19px] bg-grey-300 p-4 font-rob">
      <div className="mb-[21px] h-[138px] w-full rounded-[16px] bg-grey-200" />

      <div className="mb-4 h-4 w-full rounded-md bg-grey-200" />

      <div className="flex w-full justify-between gap-4 py-4">
        <div className="h-4 w-full rounded-md bg-grey-200" />
        <div className="h-4 w-[100px] rounded-md bg-grey-200" />
      </div>

      <div className="mt-4 h-10 w-full rounded-md bg-grey-200" />
    </div>
  );

  return (
    <section className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4">
      <Loader />
      <Loader />
      <Loader />
      <Loader />
    </section>
  );
};

export const RecentPurchaseSkelton = ({ count = 8 }: { count?: number }) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="flex h-full min-h-[70px] w-[370px] animate-pulse items-start gap-4 rounded-[16px] bg-[#111B283B] p-2.5"
        >
          <Skeleton className="aspect-square h-[50px] w-[50px]" />
          <div className="flex w-full flex-col items-start gap-3">
            <Skeleton className="aspect-square h-[14px] w-[100px]" />
            <Skeleton className="aspect-square h-[14px] w-[150px]" />
          </div>
        </div>
      ))}
    </>
  );
};

export const LoanSkelton = ({ count = 4 }: { count?: number }) => (
  <>
    {Array.from({ length: count }, (_, i) => (
      <div key={i} className="flex w-full animate-pulse items-center gap-4 bg-grey-300 px-6 py-3">
        <Skeleton className="aspect-square h-[80px] w-[80px]" />

        <div className="flex w-full gap-3">
          <Skeleton className="aspect-square h-[14px] w-[100px]" />
          <Skeleton className="aspect-square h-[14px] w-[150px]" />
        </div>
      </div>
    ))}
  </>
);

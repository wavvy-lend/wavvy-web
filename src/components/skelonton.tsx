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

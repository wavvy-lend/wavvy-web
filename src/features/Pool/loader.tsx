export const PoolStatsLoader = () => {
  return (
    <div role="status" className=" animate-pulse">
      <div className="h-2.5 w-48 rounded-lg bg-grey-300 dark:bg-gray-700"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

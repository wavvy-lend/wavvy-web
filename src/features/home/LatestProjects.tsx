'use client';

import { useGetCollectionsQuery } from '@/redux/services/userApi';
import { CollectionCard } from './components/CollectionCard';

export default function LatestPRojects() {
  const {
    data: collections,
    error,
    isLoading
  } = useGetCollectionsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{`Error: ${error}`}</div>;
  


  return (
    <section className="h-full w-full">
      <div className="my-[30px] mb-8 flex w-full items-center justify-between px-2">
        <h2 className="font-rob text-[45px]/[45px] font-bold text-white">Latest projects</h2>
      </div>

      <div className="grid w-full grid-cols-2 justify-items-center gap-3 md:grid-cols-3 lg:grid-cols-4">
        {collections?.map(collection => (
          <CollectionCard
          key={collection.id}
            image={collection.avatar}
            name={collection.name}
            creator={collection.owner}
            floor_price={collection.floor_price}
            description={collection.description}
            status={collection.status}
          />
        ))}
      </div>
    </section>
  );
}

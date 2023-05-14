'use client';

import { useGetCollectionsQuery } from '@/redux/services/CollectionsAPI';
import { CollectionCard } from './components/CollectionCard';
import { Suspense } from 'react';

export default function LendableProjects() {
  const { data: collections, error, isLoading } = useGetCollectionsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{`Error: ${error}`}</div>;

  return (
    <section>
      <div className="my-[30px] mb-8 mt-[108px] flex w-full items-center justify-between px-2">
        <h2 className="font-rob text-[45px]/[45px] font-bold text-white">Lendable projects</h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4">
        <Suspense fallback={<div>Loading...</div>}>
          {collections?.map(collection => (
            <CollectionCard
              key={collection.id}
              collectionId={collection.id}
              uniqueId={collection.unique_id}
              image={collection.avatar}
              name={collection.name}
              creator={collection.owner}
              floor_price={collection.floor_price}
              description={collection.description}
              status={collection.status}
            />
          ))}
        </Suspense>
      </div>
    </section>
  );
}

'use client';
import ProjectDetail from '@/features/project/ProjectDetail';
import { NftCard } from '@/features/project/components/NftCard';
import { ICollection } from '@/interface/util_interface';
import { useGetCollectionQuery } from '@/redux/services/CollectionsAPI';
import { Button } from '@/ui/Button';
import { SearchField } from '@/ui/InputField';

import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';

export default function Collection({ params: { id } }: { params: { id: string } }) {
  const { data: [collection] = [], error, isLoading } = useGetCollectionQuery(id);

  return (
    <>
      <div className="mb-[50px] flex w-full justify-start">
        <Button href="/" variant="plain">
          <ArrowLongLeftIcon className="h-4 w-4" /> Back
        </Button>
      </div>

      {collection && (
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectDetail {...collection} />
        </Suspense>
      )}

      <section>
        <div className="my-[30px] mb-8 flex w-full flex-col items-center justify-between px-2 md:flex-row">
          <h2 className="font-rob text-[45px]/[45px] font-bold text-white">Items</h2>
          <form className="w-full md:max-w-[500px]">
            <SearchField id="item-search" placeholder="Search by Token ID" />
          </form>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4">
            {collection?.collections?.map(item => (
              <NftCard
                key={item.tokenId}
                {...item}
                itemsNumber={collection.no_of_items}
                floorPrice={collection.floor_price}
                network={collection.network}
              />
            ))}
          </div>
        </Suspense>
      </section>
    </>
  );
}

function ColllectionValue({ value, item }: { item: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 font-rob text-[14px]/[22px] text-white">
      <span className=" font-bold">{value}</span>
      <span className=" font-medium">{item}</span>
    </div>
  );
}

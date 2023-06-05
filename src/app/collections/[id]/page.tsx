'use client';
import ProjectDetail from '@/features/project/ProjectDetail';
import { selectSearchItem, setInputValue } from '@/redux/features/slices/searchSlice';
import { collectionsApi, useGetCollectionItemQuery, useGetCollectionQuery } from '@/redux/services/CollectionsAPI';
import { Button } from '@/ui/Button';
import { SearchField } from '@/ui/InputField';
import { debounce } from 'lodash';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, Suspense, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NftItemsCard from '@/app/components/nft-items-cards/nft-cards';

export default function Collection({ params: { id } }: { params: { id: string } }) {
  const { data: [collection] = [], error, isLoading } = useGetCollectionQuery(id);
  const { inputValue } = useSelector(selectSearchItem);
  const {
    data: isItemData,
    isSuccess,
    isFetching,
    isError
  } = useGetCollectionItemQuery({ collectionId: id, tokenId: inputValue }, { skip: inputValue === '' });
  const dispatch = useDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    debouncedChangeHandler(value);
  };

  const debouncedChangeHandler = useCallback(
    debounce((value: string) => {
      const isValidNumber = !isNaN(Number(value));
      if (isValidNumber) dispatch(setInputValue(value));
    }, 300),
    []
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  console.log({isItemData})
  return (
    <>
      <div className="mb-[50px] flex w-full justify-start">
        <Button href="/" variant="plain">
          <ArrowLongLeftIcon className="h-4 w-4" /> Back
        </Button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>{collection && <ProjectDetail {...collection} />}</Suspense>

      <section>
        <div className="my-[30px] mb-8 flex w-full flex-col items-center justify-between px-2 md:flex-row">
          <h2 className="font-rob text-[45px]/[45px] font-bold text-white">Items</h2>
          <form className="w-full md:max-w-[500px]">
            <SearchField
              id="item-search"
              onChange={handleInputChange}
              pattern="[0-9]*"
              value={inputValue}
              placeholder="Search by Token ID"
            />
          </form>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4">
          <Suspense fallback={<div>Loading...</div>}>
            <NftItemsCard
              NftItems={
                typeof Number(inputValue) === 'number' && inputValue.length > 0
                  ? isItemData ?? []
                  : collection?.collections
              }
              collection={collection}
            />
          </Suspense>
        </div>
      </section>
    </>
  );
}

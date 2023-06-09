'use client'
import { forwardRef } from 'react';
import { SearchProps } from './interface';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export const SearchField = forwardRef<HTMLInputElement, SearchProps>(function SearchField(
  { type = 'text',handleSubmit, ...props },
  ref
) {
  const handleFormSubmit = () => {
    if (handleSubmit) {
      handleSubmit();
    }
  };
  return (
    <>
      <label htmlFor="wavvy-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          className="item-input block w-full rounded-2xl border border-grey-200 bg-grey-200 bg-opacity-[0.69] py-[14px] pl-3 font-rob text-[18px]/[18px] text-grey-100 placeholder:text-[#666666] focus:border-grey-200 focus:outline-none focus:ring-grey-200"
          ref={ref}
          type={type}
          autoComplete="off"
          {...props}
        />

        <div className=" absolute inset-y-[14px] right-[22px] pl-[20px] cursor-pointer text-[#666666] border-l-2 border-[#666666]">
          <MagnifyingGlassIcon className=" h-6 w-6  text-white  hover:text-[#fff]" onClick={()=>handleFormSubmit()} />
        </div>
      </div>
    </>
  );
});

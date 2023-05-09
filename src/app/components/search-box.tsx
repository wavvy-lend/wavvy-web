"use client"
import { ChangeEvent, useState } from 'react';

const SearchBox = () => {
  const [value, setValue] = useState('');

  return (
    <div className="relative mt-3 inline-block h-[3.6rem] w-full">
      <input
        className="h-full w-full rounded-lg border border-[#666666] text-white bg-transparent pl-3 pr-[20px] outline-0 placeholder:pl-3 placeholder:text-[#666666]"
        value={value}
        placeholder="Search project"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
      <span className="absolute bottom-0 right-3 top-[50%] w-[20px] translate-y-[-50%] cursor-pointer text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-[#666]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
    </div>
  );
};

export default SearchBox;

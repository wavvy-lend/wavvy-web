/* eslint-disable @next/next/no-img-element */
// import { Dialog, Transition } from '@headlessui/react';
import images from '@/util/images';
import { FC, Fragment, useState } from 'react';
import { IDetailedList } from '@/interface/util_interface';
import { NextPage } from 'next';
import LoanPaymentDropdown from './dropDown';
// import Icon from '../shared/Icons/index';

const DetailedList: FC<IDetailedList> = ({ info, price }) => (
  <div className="flex items-center justify-between px-4 pb-5">
    <span className="text-sm font-medium capitalize leading-[22px] text-white">{info}</span>
    <span className="text-sm font-bold uppercase leading-[22px] text-white">{price}</span>
  </div>
);

export default function RepayLoanModal() {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="flex w-full  flex-col gap-y-[27px] text-white ">
        <div className="flex w-full flex-col border-b-2 border-prime-200 border-opacity-50 pb-8">
          <p className="w-fit">Amount to pay </p>
          <div className="relative" onClick={handleOpen}>
            <div className="relative mt-3 inline-block h-[3.6rem] w-full">
              <input
                className="h-full w-full rounded-lg border border-[#666666] bg-transparent pl-3 pr-[20px] outline-0 placeholder:pl-3 placeholder:text-[#666666]"
                value={value}
                disabled
                placeholder="Choose amount to pay"
              />
              <span className="absolute bottom-0 right-3 top-[50%] w-[20px] translate-y-[-50%] cursor-pointer text-center">
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                )}
              </span>
            </div>
            {isOpen && <LoanPaymentDropdown setAmount={amount => setValue(amount)} setIsOpen={setIsOpen} />}
          </div>
          <button className="border-[ #C0C0C0] mt-[19px] flex w-full flex-row items-start justify-center gap-[10px] rounded-lg border bg-white px-[155px] py-[15px]">
            <span className="text-lg font-semibold text-[#333333]">Confirm transaction</span>
          </button>
        </div>
        <div className="flex max-h-[15.4rem] flex-col gap-y-[1.5rem] overflow-auto rounded-lg bg-[#bfbfbf0c] p-5 font-normal ">
          <h1 className="self-start text-[14px]/[14px] font-medium text-white">Past payment</h1>
          <ol className="relative flex flex-col gap-[20px] border-l border-gray-200">
            <li className="ml-4">
              <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="flex flex-col items-start justify-center gap-y-[10px]">
                <p className="text-[14px] font-bold">23$</p>
                <div className="flex w-full items-center justify-between">
                  <p className=" text-gray-400 ">ref ID: 3488r478r08463974734729</p>
                  <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    24th Jan 2022 @ 4:30 pm
                  </time>
                </div>
              </div>
            </li>
            <li className="ml-4">
              <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="flex flex-col items-start justify-center gap-y-[10px]">
                <p className="text-[14px] font-bold">23$</p>
                <div className="flex w-full items-center justify-between">
                  <p className=" text-gray-400 ">ref ID: 3488r478r08463974734729</p>
                  <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    24th Jan 2022 @ 4:30 pm
                  </time>
                </div>
              </div>
            </li>
            <li className="ml-4">
              <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="flex flex-col items-start justify-center gap-y-[10px]">
                <p className="text-[14px] font-bold">23$</p>
                <div className="flex w-full items-center justify-between">
                  <p className=" text-gray-400 ">ref ID: 3488r478r08463974734729</p>
                  <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    24th Jan 2022 @ 4:30 pm
                  </time>
                </div>
              </div>
              <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
            </li>
          </ol>
        </div>
        {/* <div>
          <div className="h-[286px] w-[286px] rounded-[9px]">
            <img src={images.nftLoan} alt="" className="h-full w-full" />
          </div>
          <div className="bg-fuchsia-1000 mt-[21px] flex h-[175px] w-[286px] items-center rounded-lg"></div>
        </div> */}
      </div>

      <div className="flex flex-col justify-between gap-4">
        <div className="h-[286px] w-[286px] rounded-[9px]">
          <img src={images.nftLoan} alt="" className="h-full w-full" />
        </div>
        <div className="flex h-[175px] w-full flex-col items-center justify-center gap-[23px] rounded-lg bg-[#C8304D] bg-opacity-[0.20] px-4 py-[22px] text-center">
          <div className="flex flex-col font-rob text-white">
            <span className="text-[20px]/[31px] font-bold">0.19011 ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
}

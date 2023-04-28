/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import images from '@/util/images';
import { FC, Fragment, useState } from 'react';
import { IDetailedList } from '@/interface/util_interface';
import { NextPage } from 'next';
// import Icon from '../shared/Icons/index';

const DetailedList: FC<IDetailedList> = ({ info, price }) => (
  <div className="flex items-center justify-between px-4 pb-5">
    <span className="text-sm font-medium capitalize leading-[22px] text-white">{info}</span>
    <span className="text-sm font-bold uppercase leading-[22px] text-white">{price}</span>
  </div>
);

export default function OpenDapp() {
  return (
    <>
        <div className="flex w-full flex-col gap-x-[27px] md:flex-row">
          <div className="w-full flex-col">
            <div className="border-fuchsia-1000 h-[314px] w-[501px] border-l-[3px]">
              <div className="flex items-center justify-between px-4 py-5">
                <span className="text-sm font-medium leading-[22px] text-white">Marketplace</span>
                <span className="text-sm font-bold leading-[22px] text-white underline">Opensea</span>
              </div>
              <DetailedList info="Original Purchase Price" price="0.17400 ETH" />
              <DetailedList info="Interest Fee" price="0.01437 ETH(8.3%)" />
              <DetailedList info="Purchase Provider Fee" price="0.00174 ETH(1.0%)" />
              <DetailedList info="Down Payment Amount" price="0.04753 ETH(25.0%)" />
              <DetailedList info="Monthly Payments" price="0.04753 ETH" />
              <DetailedList info="Total Purchase Amount" price="0.19011 ETH" />
            </div>

            <button className="border-[ #C0C0C0] mt-[19px] flex flex-row items-start justify-center gap-[10px] rounded-lg border bg-white px-[155px] py-[15px]">
              <span className="text-lg font-semibold text-[#333333]">Start loan plan</span>
            </button>
          </div>

          <div>
            <div className="h-[286px] w-[286px] rounded-[9px]">
              <img src={images.nftLoan} alt="" className="h-full w-full" />
            </div>
            {/* <div className="bg-fuchsia-1000 mt-[21px] flex h-[175px] w-[286px] items-center rounded-lg"></div> */}
          </div>
        </div>
    </>
  );
}

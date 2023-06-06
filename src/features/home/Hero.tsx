
'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import useSWR from 'swr';
import Image from 'next/image';
import { Banner, LenderBanner } from './banners';
import { SearchField } from '@/ui/InputField';
import { fetcher } from '@/util/util';
import { useEffect, useState } from 'react';
import {shortenAddress} from '../../util/util'

export interface IRecentPurchaseItems {
  borrower: string;
  collectionName: string
  contract_loan_id: string
  contract_pool_id: string
  contract_purchase_id: string
  created_at: string
  doown_payment: string
  escrow_address: string
  id: number
  network: string
  principal: string
  status: string
  tokenAvatar: string
  token_address: string
  token_id: string
  unique_id: string
  updated_at: string
  user_address: string
}

export default function Hero() {
  const [purchases, setPurchases] = useState([]);


  useEffect(() => {
    (async () => {
      let data = await fetcher('purchase/recent')
      setPurchases(data.data)
    })();
  }, []);



  return (
    <>
      <section className="flex h-full w-full flex-col gap-[21px] md:flex-row">
        <div className="relative h-full w-full">
          <Banner />
          <LenderBanner />
        </div>
        <div className="h-full max-h-[328px] w-full max-w-[448px] rounded-[19px] bg-grey-300 px-[20px] py-[30px]">
          <div className="flex h-[3] w-full items-center justify-between">
            <h1 className=" text-[20px]/[20px] font-bold text-grey-100">Recent purchases</h1>
            <button className="flex items-center gap-2.5 rounded-[8px] bg-grey-200 p-2.5 text-[12px]/[12px] text-[#777777]">
              <span>last 24 hours</span>
              <i className="ri-arrow-down-s-line h-[18px] w-[18px] text-[#777777]" />
            </button>
          </div>

          <div className="grid h-full max-h-[260px] w-full grid-flow-col grid-rows-3 gap-[15px] overflow-x-auto overflow-y-hidden py-3">
            {purchases.length > 0 ? (

              <>
                {purchases.map((purchase: any, key: any) => (
                  <PurchaseItem key={key}
                    avatar={purchase.tokenAvatar}
                    collectionName={purchase.collectionName}
                    userAddress={purchase.user_address}
                    downPayment={purchase.down_payment}
                    originalPrice={Number(purchase.down_payment) * 2} />
                ))}
              </>
            ) : (
              null
            )}
            {/* <PurchaseItem />
            <PurchaseItem />
            <PurchaseItem />
            <PurchaseItem />
            <PurchaseItem />
            <PurchaseItem /> */}
          </div>
        </div>
      </section>
      <section className="my-[61px] flex w-full flex-col items-center justify-between md:flex-row">
        {/* Search */}
        <form className="w-full md:max-w-[411px]">
          <SearchField id="search" placeholder="Search" />
        </form>
        {/* end of search */}

        <div>
          <span className="font-rob text-[26px]/[16px] font-bold text-white">Sort by:</span>
        </div>
      </section>
    </>
  );
}

const PurchaseItem = ({ avatar, collectionName, userAddress, downPayment, originalPrice }:
  { avatar: string, collectionName: string, userAddress: string, downPayment: string, originalPrice: number }) => {
    // console.log({downPayment})
  return (
    <div className="flex h-full min-h-[70px] w-[370px] items-center gap-4 rounded-[16px] bg-[#111B283B] bg-opacity-[0.23] p-2.5">
      <Image src={avatar} alt="" width={50} height={50} priority className="rounded-full" />
      <div className="flex w-full flex-col items-center gap-3 text-white">
        <div className="flex w-full flex-row items-end justify-between gap-3 text-[14px]/[14px]">
          <span>{collectionName}</span>
          <span>{downPayment} ETH</span>
        </div>
        <div className="flex w-full flex-row items-end justify-between gap-3 text-[14px]/[14px] text-[#999999]">
          <button className="hover:underline"> {shortenAddress(userAddress)}  </button>
          <span>Price: {originalPrice} eth</span>
        </div>
      </div>
    </div>
  );
};

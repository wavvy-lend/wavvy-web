'use client';

import { RecentPurchaseSkelton } from '@/components/skelonton';
import { useGetRecentPurchaseQuery } from '@/redux/services/userApi';
import { shortenAddress } from '@/util/util';
import Image from 'next/image';

export interface IPurchaseItem {
  avatar: string;
  collectionName: string;
  userAddress: string;
  downPayment: string;
  originalPrice: number;
}

export default function RecentPurchase() {
  const { data: purchases, error, isLoading, isFetching } = useGetRecentPurchaseQuery();

  return (
    <div className="h-[328px] w-full max-w-[448px] rounded-[19px] bg-grey-300 px-[20px] py-[30px]">
      <div className="flex h-[3] w-full items-center justify-between">
        <h1 className=" text-[20px]/[20px] font-bold text-grey-100">Recent purchases</h1>
        <button className="flex items-center gap-2.5 rounded-[8px] bg-grey-200 p-2.5 text-[12px]/[12px] text-[#777777]">
          <span>last 24 hours</span>
          <i className="ri-arrow-down-s-line h-[18px] w-[18px] text-[#777777]" />
        </button>
      </div>

      <div className="grid h-full max-h-[260px] w-full grid-flow-col grid-rows-3 gap-[15px] overflow-x-auto overflow-y-hidden py-3">
        {isLoading || isFetching ? (
          <RecentPurchaseSkelton />
        ) : (
          purchases?.map((purchase, key: any) => (
            <PurchaseItem
              key={key}
              avatar={purchase.tokenAvatar}
              collectionName={purchase.collectionName}
              userAddress={purchase.user_address}
              downPayment={purchase.down_payment}
              originalPrice={Number(purchase.down_payment) * 2}
            />
          ))
        )}
      </div>
    </div>
  );
}

const PurchaseItem = ({ avatar, collectionName, userAddress, downPayment, originalPrice }: IPurchaseItem) => {
  // console.log({downPayment})
  return (
    <div className="flex h-full min-h-[70px] w-[370px] items-center gap-4 rounded-[16px] bg-[#111B283B] bg-opacity-[0.23] p-2.5">
      <Image src={avatar} alt="" width={50} height={50} priority className="rounded-full" />
      <div className="flex w-full flex-col items-center gap-3 text-white">
        <div className="flex w-full flex-row items-end justify-between gap-3 text-[14px]/[14px]">
          <span>{collectionName}</span>
          <span>{downPayment} MATIC</span>
        </div>
        <div className="flex w-full flex-row items-end justify-between gap-3 text-[14px]/[14px] text-[#999999]">
          <button className="hover:underline"> {shortenAddress(userAddress)} </button>
          <span>Price: {originalPrice} MATIC</span>
        </div>
      </div>
    </div>
  );
};

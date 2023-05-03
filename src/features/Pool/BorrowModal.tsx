import images from '@/util/images';
import { FC, Fragment, useState } from 'react';
import { IDetailedList } from '@/interface/util_interface';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonOrLink } from '@/ui/Button/ButtonOrLink';
import { TextBox } from '@/ui/InputField';

const DetailedList: FC<IDetailedList> = ({ info, price }) => (
  <div className="flex items-center justify-between px-4 pb-5">
    <span className="text-sm font-medium capitalize leading-[22px] text-white">{info}</span>
    <span className="text-sm font-bold uppercase leading-[22px] text-white">{price}</span>
  </div>
);

export default function BorrowModal() {
  return (
    <>
      <div className="flex w-full flex-col gap-x-[27px] md:flex-row">
        <div className="w-full flex-col">
          <div className="border-fuchsia-1000 h-[314px] w-[501px] border-l-[3px] border-prime-200">
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

          <TextBox
            id="terms"
            name="terms"
            label="  I agree to the above, and understand any missed payments will result in fortfeiture of the NFT and all
              paid amounts."
          />

          <button className="border-[ #C0C0C0] mt-[19px] flex flex-row items-start justify-center gap-[10px] rounded-lg border bg-white px-[155px] py-[15px]">
            <span className="text-lg font-semibold text-[#333333]">Start loan plan</span>
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <div className="h-[286px] w-[286px] rounded-[9px]">
            <Image src={images.nftLoan} alt="" width={286} height={286} priority />
          </div>

          <div className="flex h-[175px] w-full flex-col items-center justify-center gap-7 rounded-lg bg-prime-100 bg-opacity-[0.48] px-4 py-6 text-center">
            <div className="flex flex-col gap-1">
              <dt>Down payment due now</dt>
              <dd>0.19011 ETH</dd>
            </div>
            <ButtonOrLink href="#">Lend to this project instead</ButtonOrLink>
          </div>
        </div>
      </div>
    </>
  );
}

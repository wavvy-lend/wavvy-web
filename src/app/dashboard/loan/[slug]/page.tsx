'use client';
import OpenDapp from '@/app/components/modal/borrowLoanModal';
import { Button } from '@/ui/Button';
import { useState } from 'react';
import Modal from '@/app/components/modal';
import RepayLoan from '@/app/components/modal/repayLoanModal';

export default function Loan() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="flex w-full items-start gap-5">
      <div className="flex h-full w-full max-w-[614px] flex-col gap-[50px]">
        <div className="h-[205px] w-full rounded-t-[19px] bg-prime-100" />

        <hgroup className="flex flex-col items-start gap-5 font-rob font-bold text-white">
          <h1 className=" text-[30px]/[30px]">Sneakerheads -- NFT Project</h1>
          <p className="text-[18px]/[18px]">By RTFKT</p>
        </hgroup>
        <div className="font-rob text-[14px]/[22px] font-medium text-white">
          <p>
            Clone X Forging 2022 features exclusive apparel designed for Clone X holders.This collection contains
            pre-forged NFTs that can be redeemed for physicals at no extra cost via www.rtfkt.comForging of physical
            starts: Wednesday, 7th September via www.rtfkt.com
          </p>

          <ul>
            <li>⚒️Deadline to Forge physical: 14th September www.rtfkt.com</li>
            <li>⚒️You must forge your apparel within this window to receive the physicals.</li>
          </ul>
          <p className="pt-4">
            Please note: Sneaker Forging is not part of this Forging Event and are Digital Wearables for the time
            being.See the full collection: lookbook.rtfkt.com
          </p>
        </div>
      </div>

      <div className="flex h-full max-h-[606px] w-[317px] flex-col items-start gap-7 overflow-y-auto overflow-x-hidden rounded-t-[8px] bg-prime-200 bg-opacity-[0.19] px-4 py-[26px]">
        <div className="flex h-[175px] w-full flex-col items-center justify-center gap-[23px] rounded-lg bg-[#C8304D] bg-opacity-[0.20] px-4 py-[22px] text-center">
          <div className="flex flex-col font-rob text-white">
            <span className="text-[14px]/[22px] font-medium">Project value</span>
            <span className="text-[20px]/[31px] font-bold">0.19011 ETH</span>
          </div>
          <div className="flex flex-col font-rob text-white">
            <span className="text-[14px]/[22px] font-medium">Project value</span>
            <span className="text-[20px]/[31px] font-bold">0.19011 ETH</span>
          </div>
        </div>

        <Button variant="filled" color="alt" fullwidth onClick={openModal}>
          Pay back now
        </Button>
        {/* <Modal isOpen={isOpen} closeModal={closeModal} title="Buy With Qredos">
          <OpenDapp />
        </Modal> */}
        <Modal isOpen={isOpen} closeModal={closeModal} title="Repay part or all your loan">
          <RepayLoan />
        </Modal>

        <div className="px2.5 flex w-full items-center gap-5 border-b border-prime-100 border-opacity-[0.193] py-5">
          <h2 className="font-rob text-[16px]/[16px] font-medium text-white">Loan timeline</h2>
        </div>

        <ol className="relative border-l border-gray-200">
          <li className="ga=2.5 mb-10 ml-4">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
            <h1 className="text-[14px]/[14px] font-bold text-white">Initial payment</h1>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2022
            </time>
          </li>
        </ol>
      </div>
    </section>
  );
}

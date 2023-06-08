'use client';

import { Button } from '@/ui/Button';
import { useState } from 'react';
import ModalContainer from '@/ui/Modal/Modal';
import RepayLoanModal from '@/app/components/modal/repayLoanModal';
import { useGetLoanTimeLineQuery } from '@/redux/services/purchaseAPI';

const Loan = ({ params: { id } }: { params: { id: string } }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: timeline, error, isLoading, isFetching } = useGetLoanTimeLineQuery(id);

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
          <BorrowLoan />
        </Modal> */}
        {/* <Modal isOpen={isOpen} closeModal={closeModal} title="Repay part or all your loan">
          <RepayLoan />
        </Modal> */}

        <div className="px2.5 flex w-full items-center gap-5 border-b border-prime-100 border-opacity-[0.193] py-5">
          <h2 className="font-rob text-[16px]/[16px] font-medium text-white">Loan Schedule</h2>
        </div>

        <ol className="relative border-l-2 border-white border-opacity-[0.48]">
          {timeline?.map((text, i: any) => (
            <LoanScheduleItem key={i} label="1st tranche payment" duration={`Due ${text}`} />
          ))}
          {/* <LoanScheduleItem label="Initial payment" duration="24th Jan 2022" />
          <LoanScheduleItem label="2nd tranche payment" duration="Due 20th Jul 2022" />
          <LoanScheduleItem label="3rd tranche payment" duration="3rd tranche payment" />
          <LoanScheduleItem label="Project Release" duration="Due 20th Oct 2022" /> */}
        </ol>
      </div>

      <ModalContainer open={isOpen} close={closeModal} label="Buy With Wavvy">
        <RepayLoanModal />
      </ModalContainer>
    </section>
  );
};

export default Loan;

const LoanScheduleItem = ({ label, duration }: { label: string; duration: string }) => {
  return (
    <li className="mb-10 ml-4 flex flex-col items-start gap-2.5">
      <div className="absolute -left-2 h-[14px] w-[14px] rounded-full border border-alt-500 bg-alt-500 " />
      <h1 className="text-[14px]/[14px] font-bold text-white">{label}</h1>
      <time className="mb-1 text-[12px]/[12px] font-normal text-grey-100">{duration}</time>
    </li>
  );
};
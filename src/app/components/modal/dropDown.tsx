import { fetcher } from '@/util/util';
import { useRef, Dispatch, SetStateAction, useState, useEffect } from 'react';

interface ILoanPaymentDropdown {
  setAmount: (amount: string) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  partPayment: string;
  fullPayment: string;
}

// interface iAmountToPay {
//   partPayment: string,
//   fullPayment: string
// }

const LoanPaymentDropdown = ({ setAmount, setIsOpen, partPayment, fullPayment }: ILoanPaymentDropdown) => {
  const partPaymentRef = useRef<HTMLParagraphElement>(null);
  const fullPaymentRef = useRef<HTMLParagraphElement>(null);
  const handlePartPaymentClick = () => {
    if (partPaymentRef.current && partPaymentRef.current.textContent) {
      const amount = partPaymentRef?.current?.textContent.split(':')[1];
      setAmount(amount.slice(0, -1));
      setIsOpen(false);
    }
  };
  const handleFullPaymentClick = () => {
    if (fullPaymentRef.current && fullPaymentRef.current.textContent) {
      const amount = fullPaymentRef?.current?.textContent.split(':')[1];
      setAmount(amount.slice(0, -1));
      setIsOpen(false);
    }
    // /repayment/amount/:loanUniqueId
  };
  // console.log('daaaaa')

  return (
    // { partPayment &&
    <div className="absolute bottom-0 left-[50%] top-[4rem] z-50 flex h-fit w-full translate-x-[-50%]  flex-col rounded-lg bg-white pb-3 pl-3 pt-3 text-[#666]">
      <p
        className="w-full cursor-pointer border-b border-b-[#666] p-3 hover:rounded-md hover:bg-prime-200 hover:bg-opacity-80 hover:text-white"
        onClick={handlePartPaymentClick}
        ref={partPaymentRef}
      >
        {partPayment && `Part Payment: ${partPayment} MATIC`}
      </p>
      <p
        className="w-full cursor-pointer p-3  hover:rounded-md hover:bg-prime-200 hover:bg-opacity-80 hover:text-white"
        onClick={handleFullPaymentClick}
        ref={fullPaymentRef}
      >
        {fullPayment && `Full Payment: ${fullPayment} MATIC`}
      </p>
    </div>
    // }
  );
};

export default LoanPaymentDropdown;

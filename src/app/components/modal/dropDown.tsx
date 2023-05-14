import { useRef, Dispatch, SetStateAction } from 'react';

interface ILoanPaymentDropdown {
  setAmount: (amount: string) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const LoanPaymentDropdown = ({ setAmount, setIsOpen }: ILoanPaymentDropdown) => {
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
  };
  return (
    <div className="absolute bottom-0 left-[50%] top-[4rem] z-50 flex h-fit w-full translate-x-[-50%]  flex-col rounded-lg bg-white pb-3 pl-3 pt-3 text-[#666]">
      <p
        className="w-full cursor-pointer border-b border-b-[#666] p-3 hover:rounded-md hover:bg-prime-200 hover:bg-opacity-80 hover:text-white"
        onClick={handlePartPaymentClick}
        ref={partPaymentRef}
      >
        Part Payment: 365$
      </p>
      <p
        className="w-full cursor-pointer p-3  hover:rounded-md hover:bg-prime-200 hover:bg-opacity-80 hover:text-white"
        onClick={handleFullPaymentClick}
        ref={fullPaymentRef}
      >
        Full Payment: 500$
      </p>
    </div>
  );
};

export default LoanPaymentDropdown;

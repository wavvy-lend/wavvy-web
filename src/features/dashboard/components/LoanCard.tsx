import Image from 'next/image';
import Images from '@/util/images';
import Link from 'next/link';
import { Button } from '@/ui/Button';
import { ButtonOrLink } from '@/ui/Button/ButtonOrLink';
import { useState } from 'react';
import ModalContainer from '@/ui/Modal/Modal';
import RepayLoanModal from '@/app/components/modal/repayLoanModal';

interface ILoanCard {
  name: string;
  amount: Number;
  dueDate: string | Date;
  avatar: string;
  tokenId: string;
  loanId: string;
}

const LoanCard = ({ name, amount, dueDate, avatar, tokenId, loanId }: ILoanCard) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-between gap-4 rounded-md bg-grey-200 px-6 py-3">
      <div className="flex items-center gap-4">
        <Image
          src={avatar}
          alt="buy"
          width={80}
          height={80}
          className="flex h-[80px] w-[80px] items-center justify-center bg-none"
          priority
        />
        <div>
          <ButtonOrLink href="/" className="text-white text-opacity-80 hover:underline">
            # {tokenId}
          </ButtonOrLink>
          <p className="text-[16px]/[24px] font-bold text-grey-100">{name}</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-bold text-white">{`$ ${amount}`}</p>
        <p className="text-white text-opacity-50">Debt</p>
      </div>
      <div>
        <p className="text-sm font-bold text-white">{`${dueDate}`}</p>
        <p className="text-white text-opacity-50">Next Due Date</p>
      </div>

      <Button href={`/dashboard/loan/${loanId}`} variant="filled" color="secondary">
        Repay Loan
      </Button>
    </div>
  );
};

export default LoanCard;

import Image from 'next/image';
import Images from '@/util/images';

interface ILoanCard {
  name: string;
  amount: Number;
  dueDate: string | Date;
}

const LoanCard = ({ name, amount, dueDate }: ILoanCard) => {
  return (
    <div className="flex min-h-fit flex-col items-center justify-center rounded bg-[#333333] py-4 pr-5 text-white sm:w-full sm:justify-between">
      <div className="flex w-11/12 flex-col items-center justify-items-center gap-8 pl-9 pr-9 md:flex-row">
        <div className="flex w-full items-center gap-5">
          <div className="flex h-28 items-center justify-center">
            <Image
              src={Images.nftLoan as string}
              alt="buy"
              width={200}
              height={250}
              className="flex h-full w-full items-center justify-center bg-none"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-bold">{name}</p>
            <p>NFT</p>
          </div>
        </div>
        <div className="flex w-full justify-between sm:justify-between">
          <div>
            <p className="text-sm font-bold">{`$ ${amount}`}</p>
            <p className="opacity-50">Debt</p>
          </div>
          <div>
            <p className=" text-sm font-bold">{`${dueDate} Days`}</p>
            <p className="opacity-40">Next Due Date</p>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex w-5/12 items-center justify-center rounded-full border-none bg-black px-3 py-2 text-sm outline-none ring-1 ring-prime-100/5 hover:ring-prime-200 md:px-4 md:py-3"
        >
          Repay NFT
        </button>
      </div>
    </div>
  );
};

export default LoanCard;

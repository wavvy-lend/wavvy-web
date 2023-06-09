import Image from 'next/image';
import Images from '@/util/images';
import Link from 'next/link';
import { Button } from '@/ui/Button';
import { ButtonOrLink } from '@/ui/Button/ButtonOrLink';
import { useState } from 'react';
import ModalContainer from '@/ui/Modal/Modal';
import RepayLoanModal from '@/app/components/modal/repayLoanModal';
import { toast } from 'react-hot-toast';
import { Request } from '@/util/https';
import { completeNFTPurchase, getConnectedAddress, loadProvider } from '@/methods';

interface ILoanCard {
  name: string;
  amount: Number;
  dueDate: string | Date;
  avatar: string;
  tokenId: string;
  loanId: string;
  purchaseStatus: string;
  collectionAddress: string;
  contractPurchaseId: string;
}

const LoanCard = ({
  name,
  amount,
  dueDate,
  avatar,
  tokenId,
  loanId,
  purchaseStatus,
  collectionAddress,
  contractPurchaseId
}: ILoanCard) => {
  const [isOpen, setIsOpen] = useState(false);
  const [purchaseLoading, setPurchaseLoading] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  async function completePurchase() {
    setPurchaseLoading(true);

    let url = `${process.env.NEXT_PUBLIC_WAVVY_BASE_URL}purchase/opensea/buy/${collectionAddress}/${tokenId}`;
    let result = await Request.get(url);
    let duration = 10000;
    if (!result.ok) {
      toast.error('Purchase on OpenSea Failed!', { duration });
      setPurchaseLoading(false);
      return;
    }

    let provider = await loadProvider();
    let userAddress = await getConnectedAddress();

    let txn = await completeNFTPurchase(provider, userAddress, contractPurchaseId);
    if (!txn.ok) {
      toast.error('Completing your purchase, failed!', { duration });
      setPurchaseLoading(false);
      return;
    }

    toast.success('Your purchase is completed!', { duration });
    setPurchaseLoading(false);

    // console.log({ result: result.data.data })
  }

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
        <p className="text-sm font-bold text-white">{purchaseStatus == 'OPEN' ? 'Pending' : 'Completed'}</p>
        <p className="text-white text-opacity-50">Purchase Status</p>
      </div>
      <div>
        <p className="text-sm font-bold text-white">{`$ ${amount}`}</p>
        <p className="text-white text-opacity-50">Debt</p>
      </div>
      <div>
        <p className="text-sm font-bold text-white">{`${dueDate}`}</p>
        <p className="text-white text-opacity-50">Next Due Date</p>
      </div>
      {purchaseStatus === 'CLOSED' && (
        <Button href={`/dashboard/loan/${loanId}`} variant="filled" color="plain">
          View Loan
        </Button>
      )}
      {purchaseStatus === 'OPEN' && (
        <Button variant="filled" color="secondary">
          {/* Complete Purchase */}
          {purchaseLoading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <span onClick={completePurchase}>Complete Purchase</span>
          )}
        </Button>
      )}
    </div>
  );
};

export default LoanCard;

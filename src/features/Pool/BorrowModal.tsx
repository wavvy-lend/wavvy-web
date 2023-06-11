import images from '@/util/images';
import { FC, Fragment, useState } from 'react';
import { IDetailedList, iLoanTerm, iTokenDetails } from '@/interface/util_interface';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonOrLink } from '@/ui/Button/ButtonOrLink';
import { TextBox } from '@/ui/InputField';
import { getConnectedAddress, loadProvider, purchaseNFT } from '@/methods';
import { Request } from '@/util/https';
import { toast } from 'react-hot-toast';

const DetailedList: FC<IDetailedList> = ({ info, price }) => (
  <div className="flex items-center justify-between px-4 pb-5">
    <span className="text-sm font-medium capitalize leading-[22px] text-white">{info}</span>
    <span className="text-sm font-bold uppercase leading-[22px] text-white">{price}</span>
  </div>
);

export const BorrowModal = ({
  tokenDetails,
  loanTerm,
  collectionAddress,
  poolContractId
}: {
  tokenDetails: iTokenDetails;
  loanTerm: iLoanTerm;
  collectionAddress: string;
  poolContractId: string;
}) => {
  const [purchaseLoading, setPurchaseLoading] = useState(false);

  let { downPaymentAmount, interestFee, monthlyPayments, originalPurchasePrice, totalPurchaseAmount } = loanTerm;
  let { tokenAvatar, loanPrice, floorPriceCurrency, tokenId } = tokenDetails;

  function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setPurchaseLoading(true);
    let provider = await loadProvider();
    let userAddress = await getConnectedAddress();
    let duration = 10000;

    let txn = await purchaseNFT(
      provider,
      userAddress,
      collectionAddress,
      Number(tokenId),
      downPaymentAmount,
      downPaymentAmount,
      Number(poolContractId)
    );

    if (!txn.ok) {
      toast.error('Loan Approval Failed!', { duration });
      setPurchaseLoading(false);
      return;
    }
    toast.success('Loan Approved! Now purchasing from OpenSea...', { duration });

    await delay(10000);

    let url = `${process.env.NEXT_PUBLIC_WAVVY_BASE_URL}purchase/opensea/buy/${collectionAddress}/${tokenId}`;
    let result = await Request.get(url);
    if (!result.ok) {
      toast.error('Purchase on OpenSea Failed!', { duration });
      setPurchaseLoading(false);
      return;
    }
    // toast.success('OpenSea Purchase Successfull! Now, click button to complete purchase.', { duration });
    toast.success('OpenSea Purchase Successfull! Now, click dashboard to view purchase.', { duration });
    setPurchaseLoading(false);

    console.log({ result: result.data.data });
  };

  return (
    <>
      <div className="flex w-full flex-col gap-x-[27px] md:flex-row">
        <div className="w-full flex-col">
          <div className="border-fuchsia-1000 h-[314px] w-[501px] border-l-[3px] border-prime-200">
            <div className="flex items-center justify-between px-4 py-5">
              <span className="text-sm font-medium leading-[22px] text-white">Marketplace</span>
              <span className="text-sm font-bold leading-[22px] text-white underline">
                <a href={'https://opensea.io/assets/matic/' + collectionAddress + '/' + tokenId}>Opensea</a>
              </span>
            </div>
            <DetailedList info="Original Purchase Price" price={originalPurchasePrice + ' ' + floorPriceCurrency} />
            <DetailedList info="Transaction Fee" price={interestFee + ' ' + floorPriceCurrency + '(2.1%)'} />
            <DetailedList info="Down Payment Amount" price={downPaymentAmount + ' ' + floorPriceCurrency + '(50%)'} />
            <DetailedList info="Monthly Payments" price={monthlyPayments + ' ' + floorPriceCurrency} />
            <DetailedList info="Total Purchase Amount" price={totalPurchaseAmount + ' ' + floorPriceCurrency} />
          </div>

          <TextBox
            id="terms"
            name="terms"
            label="  I agree to the above, and understand any missed payment will result in forfeiture of the NFT and all
              previous payments."
          />

          <button className="border-[ #C0C0C0] mt-[19px] flex flex-row items-start justify-center gap-[10px] rounded-lg border bg-white px-[155px] py-[15px]">
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
              <span onClick={handleSubmit} className="text-lg font-semibold text-[#333333]">
                Start loan plan
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <div className="h-[286px] w-[286px] rounded-[9px]">
            <Image src={tokenAvatar} alt="" width={286} height={286} priority />
          </div>

          <div className="flex h-[175px] w-full flex-col items-center justify-center gap-7 rounded-lg bg-prime-100 bg-opacity-[0.48] px-4 py-6 text-center">
            <div className="flex flex-col gap-1 text-white">
              <dt>Down payment due now</dt>
              <dd>{loanPrice} MATIC</dd>
            </div>
            {/* <ButtonOrLink href="#">Lend to this project instead</ButtonOrLink> */}
          </div>
        </div>
      </div>
    </>
  );
};

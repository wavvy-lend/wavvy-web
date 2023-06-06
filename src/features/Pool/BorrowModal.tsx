import images from '@/util/images';
import { FC, Fragment, useState } from 'react';
import { IDetailedList, iLoanTerm, iTokenDetails } from '@/interface/util_interface';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonOrLink } from '@/ui/Button/ButtonOrLink';
import { TextBox } from '@/ui/InputField';
import { getConnectedAddress, loadProvider, purchaseNFT } from '@/methods';
import { Request } from '@/util/https';

const DetailedList: FC<IDetailedList> = ({ info, price }) => (
  <div className="flex items-center justify-between px-4 pb-5">
    <span className="text-sm font-medium capitalize leading-[22px] text-white">{info}</span>
    <span className="text-sm font-bold uppercase leading-[22px] text-white">{price}</span>
  </div>
);

export const BorrowModal = ({ tokenDetails, loanTerm, collectionAddress, poolContractId }:
  { tokenDetails: iTokenDetails; loanTerm: iLoanTerm; collectionAddress: string, poolContractId: string }) => {

  let { downPaymentAmount, interestFee, monthlyPayments, originalPurchasePrice, totalPurchaseAmount } = loanTerm;
  let { tokenAvatar, loanPrice, floorPriceCurrency, tokenId } = tokenDetails;

  function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let provider = await loadProvider()
    let userAddress = await getConnectedAddress()

    let txn = await purchaseNFT(provider, userAddress, collectionAddress, Number(tokenId), downPaymentAmount, downPaymentAmount, Number(poolContractId))

    await delay(10000);

    if (txn.ok) {
      let url = `${process.env.NEXT_PUBLIC_WAVVY_BASE_URL}purchase/opensea/buy/${collectionAddress}/${tokenId}`;
      let result = await Request.get(url)

      console.log({ result: result.data.data })
    }

  }

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
            <span onClick={handleSubmit} className="text-lg font-semibold text-[#333333]">Start loan plan</span>
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <div className="h-[286px] w-[286px] rounded-[9px]">
            <Image src={tokenAvatar} alt="" width={286} height={286} priority />
          </div>

          <div className="flex h-[175px] w-full flex-col items-center justify-center gap-7 rounded-lg bg-prime-100 bg-opacity-[0.48] px-4 py-6 text-center">
            <div className="flex flex-col gap-1 text-white">
              <dt>Down payment due now</dt>
              <dd>{loanPrice} ETH</dd>
            </div>
            {/* <ButtonOrLink href="#">Lend to this project instead</ButtonOrLink> */}
          </div>
        </div>
      </div>
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
import { INFTCard } from '@/interface/util_interface';
import { Button } from '@/ui/Button';
import { ArrowsRightLeftIcon, ScaleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

type INftStatus = {
  label: string;
};

const CardPrice = ({ item, value }: { item: string; value: string }) => (
  <div className="flex flex-col items-start gap-1 font-rob text-white">
    <span className="text-[14px]/[22px] font-semibold capitalize">{item}</span>
    <span className="text-[18x]/[18px] font-bold">{value}</span>
  </div>
);

export const NftItemCard: React.FC<INFTCard> = ({
  collectionId,
  tokenId,
  tokenAvatar,
  network,
  floorPrice,
  loanPrice,
  floorPriceCurrency,
  saleStatus
}) => {
  // console.log({ floorPrice, loanPrice })
  return (
    <div className="relative block h-full max-h-[411px] w-full max-w-[319px] rounded-[19px] bg-prime-200 p-2 font-rob">
      <NftStatus label={saleStatus} />
      <img
        src={`${tokenAvatar}`}
        alt="project"
        width={301}
        height={441}
        className="mb-[21px] h-[268px] w-full rounded-[16px]"
      />
      {/* <Image
        src={`${tokenAvatar}`}
        alt="project"
        width={301}
        height={441}
        className="mb-[21px] rounded-[16px]"
        priority
      /> */}

      <div className="-mt-[100px] flex h-[100px] w-full flex-col items-start  rounded-b-[16px] bg-grey-200 bg-opacity-[0.48] px-2 py-4 backdrop-blur-[14.5px]">
        <span className="text-[14px]/[22px] font-semibold capitalize text-white">{`#${tokenId}`}</span>

        <div className="flex w-full items-center justify-between">
          <CardPrice item="Floor price" value={`${floorPrice} ${floorPriceCurrency}`} />
          <ScaleIcon className="h-10 w-10 text-white" />
          <CardPrice item="Loan Price" value={`~ ${loanPrice} ${floorPriceCurrency}`} />
        </div>
      </div>
      <div className="mb-2 mt-4 w-full px-2">
        {saleStatus == 'AVAILABLE' && (
          <Button href={'/pools/' + collectionId + '/' + tokenId} variant="filled" color="plain">
            Buy Now
          </Button>
        )}
      </div>
    </div>
  );
};

const NftStatus = ({ label }: INftStatus) => {
  const bgColor = label === 'AVAILABLE' ? 'bg-alt-300' : label === 'UNAVAILABLE' ? 'bg-alt-100' : 'bg-alt-500';
  return (
    <div className={`absolute right-0 my-[13px] flex items-center  px-[18px] py-[10px] shadow-badge ${bgColor}`}>
      <span className="font-rob text-[12px]/[18px] font-bold uppercase text-white">{label}</span>
    </div>
  );
};

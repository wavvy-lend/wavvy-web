import { Button } from '@/ui/Button';
import Image from 'next/image';

export interface ICollections {
  name: string;
  description?: string;
  image: string;
  creator: string;
  floor_price: string;
  status: string;
}


export const CollectionCard = ({ name, creator, description, status, floor_price, image }: ICollections) => (
  <div className="block h-full w-full rounded-[19px] bg-grey-200 p-4 font-rob">
    <Image src={image} alt="project" width={293} height={156} className="mb-[21px] w-full rounded-[16px]" />

    <h1 className="truncate pb-2 font-rob text-base/[16px] font-bold text-white">{name}</h1>

    <p className="font-rob text-[14px]/[14px] font-bold text-white text-opacity-60">{creator}</p>

    <div>
      <div>
        {/* <span className="text-[12px]/[12px] font-normal text-white">{description}</span> */}
        <span className="text-[14px]/[14px] font-bold text-white">{status}</span>
      </div>
      <div className="flex w-full justify-end gap-4 py-[28px]">
        <span className="text-[12px]/[12px] font-normal text-white">Floor Price:</span>
        <span className="text-[14px]/[14px] font-bold text-white">{`${floor_price} ETH`}</span>
      </div>
    </div>

    {/* <button className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-prime-200 px-[29px] py-[15px] font-rob text-[14px]/[14px] font-bold text-white">
      Buy Now
    </button> */}
    <Button href="/collections/1" variant="filled" color="primary" fullwidth>
      view more
    </Button>
  </div>
);

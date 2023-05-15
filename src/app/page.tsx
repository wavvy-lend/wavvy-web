import Hero from '@/features/home/Hero';
import LatestPRojects from '@/features/home/LatestProjects';
import LendableProjects from '@/features/home/LendableProjects';
import { Button } from '@/ui/Button';
import Image from 'next/image';
import SearchBox from './components/search-box';

const CollectionCard = ({ image }: { image: string }) => (
  <div className="block h-full w-full max-w-[319px] rounded-[19px] bg-grey-200 p-4 font-rob">
    <Image src={image} alt="project" width={293} height={156} className="mb-[21px] rounded-[16px]" />

    <h1 className="truncate pb-2 font-rob text-base/[16px] font-bold text-white">Chromie Squiggle by Snowfro</h1>

    <p className="font-rob text-[14px]/[14px] font-bold text-white text-opacity-60">By Art_Blocks</p>

    <span className="flex w-full justify-end gap-4 py-[28px]">
      <span className="text-[12px]/[12px] font-normal text-white">Floor Price:</span>
      <span className="text-[14px]/[14px] font-bold text-white">0.08 ETH</span>
    </span>

    {/* <button className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-prime-200 px-[29px] py-[15px] font-rob text-[14px]/[14px] font-bold text-white">
      Buy Now
    </button> */}
    <Button href="/collections/1" variant="filled" color="primary" fullwidth>
      Buy Now
    </Button>
  </div>
);

export default function Home() {
  return (
    <>
      <Hero />
      {/* <SearchBox /> */}
      <LatestPRojects />
      <LendableProjects />
    </>
  );
}

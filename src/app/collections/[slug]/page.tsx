import ProjectDetail from '@/features/project/ProjectDetail';
import { NftCard } from '@/features/project/components/NftCard';
import { Button } from '@/ui/Button';

import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Collection() {
  return (
    <>
      <div className="mb-[50px] flex w-full justify-start">
        <Button href="/" variant="plain">
          <ArrowLongLeftIcon className="h-4 w-4" /> Back
        </Button>
      </div>

      <ProjectDetail />

      <section>
        <div className="my-[30px] mb-8 flex w-full items-center justify-between px-2">
          <h2 className="font-rob text-[45px]/[45px] font-bold text-white">Items</h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4">
          <NftCard image="/assets/nfts/nft-2.png" />
          <NftCard image="/assets/nfts/nft-2.png" />
          <NftCard image="/assets/nfts/nft-2.png" />
          <NftCard image="/assets/nfts/nft-2.png" />
        </div>
      </section>
      <section>
        <div className="my-[30px] mb-8 flex w-full items-center justify-between px-2">
          <h2 className="font-rob text-[45px]/[45px] font-bold text-white">Items</h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4">
          <div className="items flex w-[370px] items-center justify-between rounded-md bg-prime-200 p-2.5">
            <div className="flex items-center gap-4">
              <Image
                src={'/assets/project-sell.png'}
                alt="buy"
                width={70}
                height={70}
                className="rounded-lg bg-prime-100"
                priority
              />
              <div className="flex w-full gap-[14px]">
                <h1 className="font-rub text-[14px]/[14px] font-bold text-white">wavvy lend</h1>
                <Link href="text-[12px]/[12px] text-[ #999999] underline">opensea</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ColllectionValue({ value, item }: { item: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 font-rob text-[14px]/[22px] text-white">
      <span className=" font-bold">{value}</span>
      <span className=" font-medium">{item}</span>
    </div>
  );
}

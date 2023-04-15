import { ButtonOrLink } from '@/ui/Button/ButtonOrLink';
import { GlobeAltIcon, HeartIcon, LinkIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export const ProjectHeader = () => (
  <div className="flex w-full items-start justify-between px-[27px]">
    <Image
      src="/assets/nfts/nft-1.png"
      alt=""
      width={130}
      height={130}
      className="-mt-[130px] rounded-[10px] border-[4px] border-grey-300 object-cover"
      priority
    />

    <ul className="flex w-full items-center justify-end gap-10">
      <li>
        <Link href="/" className="text-grey-100 hover:text-opacity-80">
          <PresentationChartBarIcon className="h-[25px] w-[25px]" />
        </Link>
      </li>
      <li>
        <Link href="/" className="text-grey-100 hover:text-opacity-80">
          <HeartIcon className="h-[25px] w-[25px]" />
        </Link>
      </li>
      <li>
        <Link href="/" className="text-grey-100 hover:text-opacity-80">
          <GlobeAltIcon className="h-[25px] w-[25px]" />
        </Link>
      </li>
    </ul>
  </div>
);

export const ProjectTitle = () => (
  <div className="flex w-full items-center justify-between py-[40px] text-white">
    <hgroup className=" flex flex-col items-start gap-5 font-rob font-bold">
      <h1 className=" text-[30px]/[30px]">Sneakerheads -- NFT Project</h1>
      <p className="text-[18px]/[18px]">By RTFKT</p>
    </hgroup>

    <ButtonOrLink
      href="/"
      className="flex items-center gap-2.5 rounded-lg bg-prime-200 bg-opacity-[0.44] px-4 py-2 font-rob text-[16px]/[25px] font-medium text-white"
    >
      vist site <LinkIcon className="h-5 w-5" />
    </ButtonOrLink>
  </div>
);

export const ProjectDescription = () => (
  <div className="font-rob text-[14px]/[22px] font-medium text-white">
    <p>
      Clone X Forging 2022 features exclusive apparel designed for Clone X holders.This collection contains pre-forged
      NFTs that can be redeemed for physicals at no extra cost via www.rtfkt.comForging of physical starts: Wednesday,
      7th September via www.rtfkt.com
    </p>

    <ul>
      <li>⚒️Deadline to Forge physical: 14th September www.rtfkt.com</li>
      <li>⚒️You must forge your apparel within this window to receive the physicals.</li>
    </ul>
    <p className="pt-4">
      Please note: Sneaker Forging is not part of this Forging Event and are Digital Wearables for the time being.See
      the full collection: lookbook.rtfkt.com
    </p>
  </div>
);

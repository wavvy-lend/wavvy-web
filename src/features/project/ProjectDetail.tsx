import { ButtonOrLink } from '@/ui/Button/ButtonOrLink';
import { GlobeAltIcon, HeartIcon, LinkIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectDescription, ProjectHeader, ProjectTitle } from './components/ProjectHeader';

export default function ProjectDetail() {
  return (
    <section className="flex h-full w-full flex-col items-start gap-4 rounded-[19px] bg-grey-200">
      <Image
        src="/assets/projects/project-1.png"
        alt=""
        width={1233}
        height={60}
        className="rounded-t-[19px]"
        priority
      />

      <ProjectHeader />

      {/* <div className="flex w-full items-start justify-between px-[27px]">
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
      </div> */}
      <div className="w-full px-[27px]">
        <ProjectTitle />
        <ProjectDescription />
        {/* <div className="flex w-full items-center justify-between py-[40px] text-white">
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
        </div> */}

        {/* <div className="font-rob text-[14px]/[22px] font-medium text-white">
          <p>
            Clone X Forging 2022 features exclusive apparel designed for Clone X holders.This collection contains
            pre-forged NFTs that can be redeemed for physicals at no extra cost via www.rtfkt.comForging of physical
            starts: Wednesday, 7th September via www.rtfkt.com
          </p>

          <ul>
            <li>⚒️Deadline to Forge physical: 14th September www.rtfkt.com</li>
            <li>⚒️You must forge your apparel within this window to receive the physicals.</li>
          </ul>
          <p className="pt-4">
            Please note: Sneaker Forging is not part of this Forging Event and are Digital Wearables for the time
            being.See the full collection: lookbook.rtfkt.com
          </p>
        </div> */}

        <hr className="mb-5 mt-10 border-grey-100" />

        <div className="grid w-full grid-cols-2 gap-10 px-5 py-5 lg:grid-cols-5">
          <ColllectionValue value="30K" item=" owners" />
          <ColllectionValue value="74" item="items" />
          <ColllectionValue value="754" item="tital volume" />
          <ColllectionValue value="0.03" item="floor price" />
        </div>
      </div>
    </section>
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

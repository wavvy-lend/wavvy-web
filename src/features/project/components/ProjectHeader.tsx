import { ButtonOrLink } from '@/ui/Button/ButtonOrLink';
import { GlobeAltIcon, HeartIcon, LinkIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export const ProjectHeader = ({ collectionImage}: { collectionImage: string }) => (
  <div className="flex w-full items-start justify-between px-[27px]">
    <Image
      src={`${collectionImage}`}
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

export const ProjectTitle = ({ name, creator,website }: { name: string; creator: string, website:string }) => (
  <div className="flex w-full items-center justify-between py-[40px] text-white">
    <hgroup className=" flex flex-col items-start gap-5 font-rob font-bold">
      <h1 className=" text-[30px]/[30px]">{`${name} -- NFT Project`}</h1>
      <p className="text-[18px]/[18px]">{`By ${creator}`}</p>
    </hgroup>

    <ButtonOrLink
      href={`${website}`} target='blank'
      className="flex items-center gap-2.5 rounded-lg bg-prime-200 bg-opacity-[0.44] px-4 py-2 font-rob text-[16px]/[25px] font-medium text-white"
    >
      Visit site <LinkIcon className="h-5 w-5" />
    </ButtonOrLink>
  </div>
);

export const ProjectDescription = ({ description } :{description:string}) => (
  <div className="font-rob text-[14px]/[22px] font-medium text-white">
    <p>{description}</p>

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

import { XMarkIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

export default function NetWorkBanner() {
  return (
    <div className="fixed bottom-0 z-30 w-full px-8 pb-6">
      <div className="relative isolate flex w-full items-center justify-center gap-x-6 rounded-xl bg-alt-500 px-6 py-2.5  sm:px-3.5">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <p className="text-sm leading-6 text-grey-300">
            You are connected to an unsupported chain
            <strong className="font-semibold"> Switch Network.</strong>
          </p>
          <div className="flex flex-1 justify-end gap-4">
            <button className="flex items-center justify-center gap-2 rounded-full bg-grey-400 px-3.5 py-1 text-sm font-semibold text-white shadow-sm outline-none hover:bg-grey-300">
              <Image src="/assets/icons/matic.svg" alt="" width={20} height={20} />
            </button>
            <button className="flex items-center justify-center gap-2 rounded-full bg-grey-400 px-3.5 py-1 text-sm font-semibold text-white shadow-sm outline-none hover:bg-grey-300">
              <Image src="/assets/icons/bnb.svg" alt="" width={20} height={20} />
            </button>
            <button className="flex items-center justify-center gap-2 rounded-full bg-grey-400 px-3.5 py-1 text-sm font-semibold text-white shadow-sm outline-none hover:bg-grey-300">
              <Image src="/assets/icons/eth.svg" alt="" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { Popover, Transition } from '@headlessui/react';
import {
  ArrowUturnRightIcon,
  ChevronDownIcon,
  ArrowRightOnRectangleIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { Button } from '@/ui/Button';
import { shortenAddress } from '@/util/util';

import { useContractContext } from '@/context/contract-context';
// import { connectWallet } from '@/redux/services/account.servie';

export default function ConnectWalletButton() {
  const { account, connectWallet, disconnect } = useContractContext();

  const { address, isAuthenticated } = account;

  // TODO handle disconnect
  // TODO register user
  // TODO add network logo to button
  //  create dropdown

  return (
    <>
      {!isAuthenticated && !address ? (
        <button
          onClick={connectWallet}
          className="flex flex-row items-center gap-[10px] rounded-lg bg-alt-100 px-[29px] py-[15px] font-rob text-[14px]/[19px] text-white"
        >
          Connect wallet
        </button>
      ) : (
        <>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="flex items-center justify-center gap-2.5 rounded-lg bg-alt-300 px-[29px] py-[15px] font-rob text-[14px]/[14px] font-bold text-white outline-none">
                  <ArrowUturnRightIcon className="h-5 w-5 stroke-alt-500" />
                  {shortenAddress(address)}
                  <ChevronDownIcon className="h-[14px] w-[14px] stroke-grey-100" />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 mt-3 flex w-[200px] flex-col items-center gap-4 overflow-hidden rounded-lg bg-grey-200 bg-opacity-10 shadow-lg backdrop-blur-[10px]  backdrop-filter  transition-opacity">
                    <div className="relative flex w-full flex-col gap-4 px-2 py-4">
                      <button className="flex w-full items-center justify-center gap-4 rounded-lg bg-alt-500 bg-opacity-20 p-2 text-[14px]/[14px] font-bold text-grey-100 hover:bg-opacity-50">
                        <span> {shortenAddress(address)}</span>
                        <DocumentDuplicateIcon className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="w-full flex-col gap-4 px-2 py-4 first-letter:flex">
                      <button
                        className="flex w-full items-center justify-center gap-4 rounded-lg bg-alt-200 bg-opacity-20 p-2 text-[14px]/[14px] font-bold text-grey-100 hover:bg-opacity-50"
                        onClick={disconnect}
                      >
                        <span>Logout</span>
                        <ArrowRightOnRectangleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </>
      )}
    </>
  );
}

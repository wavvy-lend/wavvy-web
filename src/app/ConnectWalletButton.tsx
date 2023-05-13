'use client';

import { ArrowUturnRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Button } from '@/ui/Button';
import { shortenAddress } from '@/util/util';

import { useContractContext } from '@/context/contract-context';
// import { connectWallet } from '@/redux/services/account.servie';

export default function ConnectWalletButton() {
  const { account, connectWallet } = useContractContext();

  const { address, isAuthenticated } = account;

  // TODO handle disconnect
  // TODO register user
  // TODO add network logo to button
  //  create dropdown

  return (
    <>
      {isAuthenticated && address ? (
        <Button variant="filled" color="alt">
          <ArrowUturnRightIcon className="h-5 w-5 stroke-alt-500" />
          {shortenAddress(address)}
          <ChevronDownIcon className="h-[14px] w-[14px] stroke-grey-100" />
        </Button>
      ) : (
        <button
          onClick={connectWallet}
          className="flex flex-row items-center gap-[10px] rounded-lg bg-alt-100 px-[29px] py-[15px] font-rob text-[14px]/[19px] text-white"
        >
          Connect wallet
        </button>
      )}
    </>
  );
}

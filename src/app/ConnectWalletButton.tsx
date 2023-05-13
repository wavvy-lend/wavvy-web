'use client';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/redux/hooks';

import { ArrowUturnRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Button } from '@/ui/Button';
import { shortenAddress } from '@/util/util';
import { useEffect } from 'react';
import { IAccountContext, useAccountContext } from '@/context/AccountContex';
import { useContractContext } from '@/context/contract-context';
// import { connectWallet } from '@/redux/services/account.servie';

export default function ConnectWalletButton() {
  const { account, connectWallet } = useContractContext();

  const { address, isAuthenticated } = account;
  // const {
  //   connectWallet,
  //   disconnect,
  //   checkIfWalletIsConnected,
  //   state: { isAuthenticated, address }
  // } = useAccountContext() as IAccountContext;

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

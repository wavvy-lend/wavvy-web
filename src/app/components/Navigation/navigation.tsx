'use client';
import { ArrowUturnRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Button } from '@/ui/Button';
import Link from 'next/link';
import { useAppDispatch } from '@/redux/hooks';
import { useSelector } from 'react-redux';

import { connect } from '@/redux/features/walletConnectSlice';
import { connectWallet } from '@/redux/services/asyncThunkAction';
import { NavBarLink } from '@/app/NavBarLink';
import { shortenAddress } from '@/util/util';
import { useEffect } from 'react';

const Navigation = () => {
  const { userWallet, isLoading, isError, isSuccess, message } = useSelector(connect);

  const dispatch = useAppDispatch();

  const onConnect = () => {
    dispatch(connectWallet());
  };

  useEffect(() => {
    if (window == null) return;

    if (localStorage.getItem('isAuthenticated') === 'connected') {
      dispatch(connectWallet());
    }
  }, [dispatch]);

  console.log(userWallet);

  return (
    <nav className="flex h-full w-full items-center justify-between px-4 py-[22px] lg:px-[100px]">
      <Link href="/" className="font-ava text-lg/[18px] text-white md:text-[25px]/[25px]">
        wavvy
      </Link>
      <div className="hidden w-full items-center justify-end gap-8 md:flex lg:flex">
        <ul className="flex items-center justify-end gap-4">
          <NavBarLink href="/dashboard" label="Dashboard" />
          {/* <li>
              <Link href="/dashboard" className="pb-1 font-rob text-base/4 font-medium text-white hover:border-b">
                Dashboard
              </Link>
            </li> */}
        </ul>
        {userWallet?.isAuthenticated === 'connected' ? (
          <Button variant="filled" color="alt">
            <ArrowUturnRightIcon className="h-5 w-5 stroke-alt-500" />
            {shortenAddress(userWallet?.address)}
            <ChevronDownIcon className="h-[14px] w-[14px] stroke-grey-100" />
          </Button>
        ) : (
          <button
            onClick={onConnect}
            className="flex flex-row items-center gap-[10px] rounded-lg bg-alt-100 px-[29px] py-[15px] font-rob text-[14px]/[19px] text-white"
          >
            Connect wallet
          </button>
        )}
        {/* <button
          onClick={onConnect}
          className="flex flex-row items-center gap-[10px] rounded-lg bg-alt-100 px-[29px] py-[15px] font-rob text-[14px]/[19px] text-white"
        >
          Connect wallet
        </button>
        <Button variant="filled" color="alt">
          <ArrowUturnRightIcon className="h-5 w-5 stroke-alt-500" />
          {userWallet?.address}
          <ChevronDownIcon className="h-[14px] w-[14px] stroke-grey-100" />
        </Button> */}
      </div>
    </nav>
  );
};

export default Navigation;

'use client';

import Link from 'next/link';
import ConnectWalletButton from './ConnectWalletButton';
import { NavBarLink } from './NavBarLink';
import { useContractContext } from '@/context/contract-context';

const Navigation = () => {
  const {
    account: { isAuthenticated }
  } = useContractContext();

  return (
    <nav className="flex h-full w-full items-center justify-between px-4 py-[22px] lg:px-[100px]">
      <Link href="/" className="font-ava text-lg/[18px] text-white md:text-[25px]/[25px]">
        wavvy
      </Link>
      <div className="hidden w-full items-center justify-end gap-8 md:flex lg:flex">
        {isAuthenticated ? (
          <ul className="flex items-center justify-end gap-4">
            <NavBarLink href="/dashboard" label="Dashboard" />
          </ul>
        ) : null}

        <ConnectWalletButton />
      </div>
    </nav>
  );
};

export default Navigation;

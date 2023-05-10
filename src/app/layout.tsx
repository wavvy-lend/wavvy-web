import Link from 'next/link';
import './globals.css';
import { ArrowUturnRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Button } from '@/ui/Button';
import { NavBarLink } from './NavBarLink';
import { Providers } from '@/redux/provider';
import { useAppDispatch } from '@/redux/hooks';
import { useSelector } from 'react-redux';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const {
  //   userWallet,
  //   isLoading, isError, isSuccess, message} = useSelector((state) => state.connectWallet);
  return (
    <html lang="en">
        <Providers>
      <body className="h-full w-full bg-grey-400 bg-body bg-cover bg-no-repeat">
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
            <button className="flex flex-row items-center gap-[10px] rounded-lg bg-alt-100 px-[29px] py-[15px] font-rob text-[14px]/[19px] text-white">
              Connect wallet
            </button>
            <Button variant="filled" color="alt">
              <ArrowUturnRightIcon className="h-5 w-5 stroke-alt-500" /> 0x5TD6...4567{' '}
              <ChevronDownIcon className="h-[14px] w-[14px] stroke-grey-100" />
            </Button>
          </div>
        </nav>
        <hr className="mb-4 ml-[94px] border-prime-200 border-opacity-50 md:mx-[93px] md:my-6" />

        <main className="h-full w-full pb-[100px] lg:px-[93px]">
        {children}
        </main>
      </body>
      </Providers>
    </html>
  );
}

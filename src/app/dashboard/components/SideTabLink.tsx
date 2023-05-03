'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SideTabLink = ({ href, title }: { href: string; title: string }) => {
  const pathname = usePathname();

  const path = pathname && pathname !== null && pathname === href;
  return (
    <Link
      href={href}
      className={`flex w-[218px] items-start gap-2.5 border-b-2 bg-grey-300  p-5 font-rob text-[16px]/[25px] font-bold text-white ${
        path ? 'border-prime-200' : 'border-grey-200'
      }`}
    >
      {title}
    </Link>
  );
};

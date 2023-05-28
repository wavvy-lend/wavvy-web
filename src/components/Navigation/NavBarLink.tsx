'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavBarLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();

  const path = pathname && pathname !== null && pathname.includes(href);
  return (
    <li>
      <Link
        href={href}
        className={`pb-1 font-rob text-base/4 font-medium text-white hover:border-b ${
          path ? 'border-b border-alt-500' : ''
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

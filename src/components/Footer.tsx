// import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { HeartIcon, DocumentTextIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="mx-10 rounded-t-3xl bg-grey-300 px-4 sm:max-w-xl md:max-w-full md:px-24 lg:px-[72px]">
      <div className="flex flex-col items-center justify-between pb-10 pt-5 sm:flex-row">
        <div className="m:mt-0 mt-4 flex items-center gap-4">
          <p className="font-rob text-base font-bold leading-5 text-grey-100 md:order-2">
            &copy; {new Date().getFullYear()} <span className="font-ava">WAVVY</span>
          </p>
        </div>

        <div className="mt-4 flex items-center space-x-4">
          <span className="flex items-center font-rob text-[16px]/[16px] font-semibold text-grey-100">
            for the <HeartIcon className="mx-[2px] h-4 w-4 text-prime-100" /> of NFT&apos;s
          </span>
          <a
            href="https://github.com/wavvy-lend"
            target="blank"
            className="text-grey-100 transition-colors duration-300 hover:text-prime-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 lg:h-6 lg:w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
            </svg>
          </a>
          <a
            href="https://wavvy.notion.site/Wavvy-Deck-d37647909c6e49b6a9ecf2bb100a74ba?pvs=4"
            target="blank"
            className="text-grey-100 transition-colors duration-300 hover:text-prime-100"
          >
            <DocumentTextIcon className="h-4 w-4 lg:h-6 lg:w-6" />
          </a>
          {/* <FooterLinks href="https://www.linkedin.com/in/ebube-okorie-274796189/" label="Ebube" />
          <FooterLinks href="https://www.linkedin.com/in/nwobodoekene" label="Kaycee" />
          <FooterLinks href="https://www.linkedin.com/in/izaakwalz" label="Izaak" /> */}
        </div>
      </div>
    </footer>
  );
}

// text-grey-100 hover:text-alt-200

const FooterLinks = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    target="blank"
    className="hover:underliney font-rob text-base font-medium leading-5 text-grey-100 transition-colors duration-300 hover:underline"
  >
    {label}
  </Link>
);

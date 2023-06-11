import { Toaster } from 'react-hot-toast';
import { Providers } from '@/redux/provider';
import ContractProvider from '@/context/contract-context';
import Navigation from '@/components/Navigation/navigation';
import './globals.css';
import NetWorkBanner from '@/components/NetworkBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Wavvy - NFT Lending',
  description: 'WAVVY is an NFT Finance platform enabling NFT buyers to get loans for their next big NFT purchase.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <ContractProvider>
          <body className="h-full w-full bg-grey-400 bg-body bg-cover bg-no-repeat" suppressHydrationWarning={true}>
            <Navigation />
            <NetWorkBanner />
            <hr className="mb-4 ml-[94px] border-prime-200 border-opacity-50 md:mx-[93px] md:my-6" />

            <main className="h-full w-full pb-[100px] lg:px-[72px]">{children}</main>
            <Footer />
            <Toaster position="bottom-center" reverseOrder={false} />
          </body>
        </ContractProvider>
      </Providers>
    </html>
  );
}

'use client';

import AuthUser from '@/components/auth-user';
import { useContractContext } from '@/context/contract-context';
import LoanCard from '@/features/dashboard/components/LoanCard';

const Card = () => {
  const {
    account: { isAuthenticated, address },
    connectWallet
  } = useContractContext();

  // const user = isAuthenticated && address;

  if (!isAuthenticated) return <AuthUser label="Connect your wallet to View your projects." onClick={connectWallet} />;

  return (
    <section className="grid w-full grid-cols-1 gap-4">
      <LoanCard name={'Monkey Head'} amount={20} dueDate={'30'} />
      <LoanCard name={'Outlaws'} amount={10} dueDate={'30'} />
    </section>
  );
};

export default Card;

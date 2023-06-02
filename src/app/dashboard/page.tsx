'use client';

import AuthUser from '@/components/auth-user';
import { useContractContext } from '@/context/contract-context';
import LoanCard from '@/features/dashboard/components/LoanCard';
import { toast } from 'react-hot-toast';

const Card = () => {
  const {
    account: { isAuthenticated }
  } = useContractContext();

  if (!isAuthenticated) {
    if (typeof window !== 'undefined') {
      document.location.href = '/';
    }

    toast.error('Please connect your wallet to view your pools');
  }

  return (
    <section className="grid w-full grid-cols-1 gap-4">
      <LoanCard name={'Monkey Head'} amount={20} dueDate={'30'} />
      <LoanCard name={'Outlaws'} amount={10} dueDate={'30'} />
    </section>
  );
};

export default Card;

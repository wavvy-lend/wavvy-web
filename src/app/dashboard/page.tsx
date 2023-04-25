import LoanCard from '@/features/dashboard/components/LoanCard';

const Card = () => {
  return (
    <div>
      <LoanCard name={'Nft'} amount={20} dueDate={'30'} />
    </div>
  );
};

export default Card;

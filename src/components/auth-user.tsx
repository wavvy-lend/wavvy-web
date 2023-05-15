import { Button } from '@/ui/Button';
import { ButtonOrLink } from '@/ui/Button/ButtonOrLink';

export interface IAuthUser {
  label: string;
  onClick: () => void;
}

const AuthUser = ({ label, onClick }: IAuthUser) => (
  <section className="mx-auto flex flex-col items-start justify-center gap-4">
    <h1 className="text-[24px]/[24px] font-bold text-white">{label}</h1>
    <p className="text-[16px]/[24px] font-medium text-white">
      If you don&#39;t have a{' '}
      <ButtonOrLink href="" className="text-alt-100">
        wallet
      </ButtonOrLink>{' '}
      yet, you can select a provider and create one now.
    </p>
    <div className="flex w-full max-w-[200px] items-center justify-center py-5">
      <Button variant="filled" color="plain" fullwidth={true} onClick={onClick}>
        Connect Wallet
      </Button>
    </div>
  </section>
);

export default AuthUser;

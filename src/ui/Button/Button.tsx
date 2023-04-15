import { ButtonOrLink, ButtonOrLinkProps } from './ButtonOrLink';

export interface ButtonProps extends ButtonOrLinkProps {
  variant: 'filled' | 'plain';
  color?: 'primary' | 'secondary' | 'alt' | 'plain' | 'transparent';
  fullwidth?: Boolean;
}

export function Button({ variant = 'plain', color = 'transparent', fullwidth = false, ...props }: ButtonProps) {
  const buttonType = variant === 'filled' ? 'rounded-lg' : '';
  const buttonStyles =
    color === 'primary'
      ? 'bg-prime-200 text-white'
      : color === 'secondary'
      ? 'bg-alt-100 text-white'
      : color === 'alt'
      ? 'bg-alt-300 text-white'
      : color === 'plain'
      ? 'bg-white text-grey-300'
      : 'bg-transparent text-white hover:underline hover:text-opacity-80';

  // <button className="flex items-center justify-center gap-2.5 px-[29px] py-[15px] font-rob text-[14px]/[14px] font-bold text-white">
  //   Buy Now
  // </button>

  return (
    <ButtonOrLink
      {...props}
      className={`flex items-center justify-center gap-2.5 px-[29px] py-[15px] font-rob text-[14px]/[14px] font-bold ${buttonType} ${buttonStyles} ${
        fullwidth ? 'w-full' : ''
      }`}
    />
  );
}

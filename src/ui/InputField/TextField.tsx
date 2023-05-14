import { forwardRef } from 'react';
import { InputProps } from './interface';

export const TextField = forwardRef<HTMLInputElement, InputProps>(function TextField(
  { label, err, type = 'text', ...props },
  ref
) {
  return (
    <label className="flex flex-col items-start gap-2 font-rob">
      <span className="text-[14px]/[22px] font-medium text-white">{label}</span>

      <input
        className="w-full rounded-lg border border-[#666666] bg-grey-200 bg-opacity-[0.69] px-[25px] py-[19px] font-rob text-[20px]/[20px] font-medium text-grey-100 outline-none placeholder:text-[#666666] focus:border-prime-200"
        ref={ref}
        type={type}
        {...props}
      />
      <span className="py-2 text-[13px] text-alt-500">{err && err}</span>
    </label>
  );
});

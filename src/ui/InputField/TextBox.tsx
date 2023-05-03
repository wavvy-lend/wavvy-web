import { forwardRef } from 'react';
import { InputProps } from './interface';

export const TextBox = forwardRef<HTMLInputElement, InputProps>(function TextField({ label, err, ...props }, ref) {
  return (
    <div className="relative my-[19px] flex gap-x-3">
      <div className="flex h-6 items-center">
        <input ref={ref} type="checkbox" className="h-4 w-4 rounded border-[#D9D9D9] text-alt-500" {...props} />
      </div>

      <label htmlFor="comments" className="text-[14px]/[22px] font-medium text-white">
        {label}
      </label>
    </div>
  );
});

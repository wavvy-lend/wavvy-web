'use client';

import { Button } from '@/ui/Button';
import { TextBox, TextField } from '@/ui/InputField';
import ModalContainer from '@/ui/Modal/Modal';

import { useState } from 'react';

export const PoolsStats = () => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }

  return (
    <section className="flex w-full items-center justify-between gap-4 rounded-lg bg-prime-200 bg-opacity-[0.19] px-8 py-5">
      <StatsCard name="Total volume" value="$545.48K" />
      <StatsCard name="Liquidity available" value="$941.86K" />
      <StatsCard name="Liquidity borrowed" value="$123.91K" />
      <div>
        <Button variant="filled" color="primary" onClick={openModal}>
          Create Pool
        </Button>
      </div>
      <ModalContainer label="Create Pool" open={open} close={closeModal}>
        <form>
          <fieldset className="flex w-full flex-col gap-4">
            <TextField label="Amount to Deposit" id="amount" type="number" name="amount" placeholder="0.00" />
            <TextBox id="policy" name="policy" label=" I agree to our Terms of Service" />
            <Button variant="filled" color="alt" fullwidth={true}>
              Deposit
            </Button>
          </fieldset>
        </form>
      </ModalContainer>
    </section>
  );
};

const StatsCard = ({ name, value }: { name: string; value: string }) => (
  <div className="flex flex-col items-start gap-2">
    <dd className="text-[13px]/[23px] text-white">{name}</dd>
    <dt className="font-rube text-[24px]/[34px] font-bold text-white">{value}</dt>
  </div>
);

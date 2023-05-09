'use client';

import { Button } from '@/ui/Button';
import { TextBox, TextField } from '@/ui/InputField';
import ModalContainer from '@/ui/Modal/Modal';
import { useState } from 'react';

export const CreatePool = () => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }

  return (
    <>
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
    </>
  );
};

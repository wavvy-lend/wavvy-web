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
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
              <TextField label="Amount to Deposit" id="amount" type="number" name="amount" placeholder="0.00" />

              <TextField label="APR Value" id="apr" type="number" name="apr" placeholder="0.00" />
              <TextField label="Number pf Cycle" id="cycle" type="number" name="cycle" placeholder="0" />

              <TextField label="Duration" id="amount" type="date" name="date" />
            </div>
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

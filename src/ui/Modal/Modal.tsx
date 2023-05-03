import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { ModalContainerProps } from './interface';

export default function ModalContainer({ label, ref, open, close, children }: ModalContainerProps) {
  //   const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={ref} onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-grey-300 bg-opacity-[0.10] backdrop-blur-[10px] backdrop-filter transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="maxh-[642px] relative h-full w-full max-w-[911px] transform overflow-hidden rounded-3xl bg-grey-200 px-[45px]  py-[36px] text-left shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <Dialog.Title
                    as="h2"
                    className="font-HKGrotesk mt-3 text-center text-[30px] font-bold leading-[30px] text-white lg:mt-5"
                  >
                    {label}
                  </Dialog.Title>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full border-white bg-[#FF1616] bg-opacity-25 text-grey-100 hover:bg-opacity-90"
                    onClick={close}
                  >
                    <XMarkIcon className="h-[18px] w-[18px] fill-white" />
                  </button>
                </div>
                <div className="flex w-full flex-col pt-10">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

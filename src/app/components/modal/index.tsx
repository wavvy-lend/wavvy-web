/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import { IParentModal } from '@/interface/util_interface';
import { Fragment } from 'react';

export default function Modal({ title, isOpen, closeModal, children }: IParentModal) {
  return (
    <div className=' bg-grey-300"'>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-h-[622px] w-full max-w-[911px] transform overflow-hidden rounded-[20px] bg-[#1E1E1E] px-[45px] py-[36px] align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between">
                    <h1 className="font-HKGrotesk mt-3 text-center text-[30px] font-bold leading-[30px] text-white lg:mt-5">
                      {title}
                    </h1>
                    <button
                      className="absolut h-10 w-10 items-center justify-center rounded-full border-white bg-[#FF1616] text-center text-white"
                      onClick={closeModal}
                    >
                      <span className=" font-HKGrotesk text-2xl font-bold leading-[42px]">X</span>
                    </button>
                  </div>

                  <div className="flex w-full flex-col py-10">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

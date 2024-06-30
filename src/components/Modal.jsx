import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { IoLanguage } from "react-icons/io5";
import { MdOndemandVideo, MdAudiotrack } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

export default function Modal({ isOpen, setIsOpen }) {
  const includedFeatures = [
    { icon: IoLanguage, data: "Multi-Language Support" },
    { icon: MdOndemandVideo, data: "Video with Descriptions" },
    { icon: FaBook, data: "Downloadable Book" },
    { icon: MdAudiotrack, data: "Downloadable Audiobook" },
  ];

  return (
    <Dialog className="relative z-10" open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogBackdrop className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-[#203b4a] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <IoClose className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                  <GrStatusGood className="h-6 w-6 text-[#203b4a] bg-white" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-white">
                    Subscription Benefits
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-300">
                      By subscribing, you will gain access to the following features:
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-px flex-auto bg-gray-600"></div>
              <div className="mt-10">
                <ul role="list" className="grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6 mb-5">
                  {includedFeatures.map((feature, index) => (
                    <li key={index} className="flex gap-x-3 p-2">
                      <feature.icon className="flex-none text-white" aria-hidden="true" style={{ fontSize: "2rem" }} />
                      <span className="text-gray-300">{feature.data}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 lg:mt-0 lg:flex-shrink-0 mb-5">
                <div className="rounded-2xl py-5 text-center ring-1 ring-inset ring-gray-900 hover:ring-gray-400 lg:flex lg:flex-col lg:justify-center">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-white">$1.99</span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-300">USD</span>
                    </p>
                    <button
                      className="mt-10 block w-full rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                      onClick={() => window.location.href = "/islamic-museum-tour"}
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

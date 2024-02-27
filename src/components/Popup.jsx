import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ebook from '../assets/ebook.png';

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Transition.Root show={showPopup} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        onClose={setShowPopup}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='relative inline-block align-bottom bg-[#f0ead2] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
              <div>
                <div className='mx-auto flex items-center justify-center h-40 w-40 rounded-full bg-green-100'>
                  <img src={ebook}></img>
                </div>
                <div className='mt-3 text-center sm:mt-5'>
                  <Dialog.Title
                    as='h3'
                    className='text-basic leading-6 font-medium text-gray-900'
                  >
                    All your answers in this FREE ebook! <br />
                    Enter your email to catch yours!
                  </Dialog.Title>
                  <div className='mt-6 flex max-w-md gap-x-4'>
                    <label
                      htmlFor='email-address'
                      className='sr-only'
                    >
                      Email address
                    </label>
                    <input
                      id='email-address'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                      placeholder='Enter your email'
                    />
                    <button
                      type='submit'
                      onClick={() => setShowPopup(false)}
                      className='flex-none rounded-md bg-[#a98467] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#6c584c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                    >
                      Send mine!
                    </button>
                  </div>
                </div>
              </div>
              <div className='mt-5 sm:mt-6'>
                <button
                  type='button'
                  className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#a98467] text-base font-medium text-white hover:bg-[#6c584c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
                  onClick={() => setShowPopup(false)}
                >
                  No, thank you!
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

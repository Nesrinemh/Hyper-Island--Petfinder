/* eslint-disable react/no-unescaped-entities */

import hero from '../assets/catanddogg.webp';

export default function Hero() {
  return (
    <section>
      <div className='relative h-[100vh] lg:max-h-[40rem] max-h-[25rem] sm:max-h-[30rem] text-white overflow-hidden'>
        <div className='absolute inset-0 h-full overflow-hidden rounded-xl lg:max-h-[40rem] max-h-[25rem] sm:max-h-[30rem]'>
          <img
            src={hero}
            alt='Cute cat and dog'
            className='object-cover bg-[#adc178] object-center w-full h-full'
          />
        </div>

        <div className='relative z-10 flex flex-col justify-center items-center h-full text-center lg:max-h-[40rem] max-h-[25rem] sm:max-h-[30rem]'>
          <h1 className='text-3xl sm:text-5xl font-bold leading-tight mb-4'>
            Don't buy your pet, adopt it.
          </h1>
          <p className='text-lg text-white mb-8'>
            Heartwarming stories and testimonials from people who have
            adopted pets from Pet Finder.
          </p>
          <button
            type='button'
            className='focus:outline-none text-gray-900 bg-[#BEDA71] hover:bg-[#BEDC29] ease-in-out transform hover:scale-105 duration-200 font-medium rounded-full text-base px-8 py-4 mb-2'
          >
            Find your companion
          </button>
        </div>
      </div>
    </section>
  );
}

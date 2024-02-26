import React from 'react';
import dogImage from '../assets/holding-dog.webp';

export default function AboutUs() {
  return (
    <section className='grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:max-h-[40rem] lg:grid-cols-2 gap-8 lg:gap-10 justify-center items-center mx-auto lg:max-w-7xl '>
      <div className='h-full overflow-hidden rounded-xl lg:max-h-[40rem] max-h-[25rem] sm:max-h-[30rem]'>
        <img
          src={dogImage}
          alt='Smiling girl holding a small dog'
          className='object-cover object-center'
        />
      </div>
      <article className='flex items-start gap-5 flex-col h-full justify-around text-[18px] sm:text-lg md:text-xl lg:text-xl sm:px-5'>
        <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          About Us
        </h2>
        <p className='max-w-[40rem]'>
          Welcome to Petfinder where our passion for pets fuels our
          mission to simplify pet adoption. As experienced adopters,
          we're here to guide you every step of the way.
        </p>
        <p className='max-w-[40rem]'>
          We are a community dedicated to creating lasting bonds by
          matching pets with their forever homes. We offer the
          support, advice, and resources you need to welcome your new
          family member with open arms.
        </p>
        <button
          type='button'
          className='focus:outline-none text-gray-900 bg-[#BEDA71] hover:bg-[#BEDC29] ease-in-out transform hover:scale-105 duration-200 font-medium rounded-full text-base px-8 py-4 mb-2'
        >
          More about us
        </button>
      </article>
    </section>
  );
}

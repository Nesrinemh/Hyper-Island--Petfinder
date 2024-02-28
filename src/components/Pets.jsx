import { pets } from '../data/petData';

export default function Pets() {
  return (
    <section aria-label='pets-section'>
      <div className='mx-auto max-w-2xl lg:max-w-7xl flex flex-col gap-10'>
        <h2 className='text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Pets For Adoption
        </h2>
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {pets.map((pet) => (
            <a
              href='#'
              key={pet.id}
              className='group'
              aria-label={`link to ${pet.name}, ${pet.breed}, ${pet.age}`}
            >
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
                <img
                  src={pet.imageSrc}
                  alt={pet.imageAlt}
                  loading='lazy'
                  width={300}
                  height={300}
                  className='h-full w-full object-cover object-center group-hover:opacity-75'
                />
              </div>
              <h3 className='mt-4 text-xl text-gray-700 font-bold'>
                {pet.name}
              </h3>
              <p className='mt-1 text-sm font-medium text-gray-900'>
                {pet.breed}, {pet.age}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { pets } from "../data/petData";

export default function Pets() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col gap-10">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Pets For Adoption
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {pets.map((pet) => (
            <a href="#" key={pet.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={pet.imageSrc}
                  alt={pet.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <span className="sr-only">
                Name of pet: {pet.name}, Breed of pet: {pet.breed}, Age of pet:{" "}
                {pet.age}
              </span>
              <h3
                className="mt-4 text-xl text-gray-700 font-bold"
                aria-hidden="true"
              >
                {pet.name}
              </h3>
              <p
                className="mt-1 text-sm font-medium text-gray-900"
                aria-hidden="true"
              >
                {pet.breed}, {pet.age}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

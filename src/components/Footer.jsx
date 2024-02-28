import { externalMedias } from '../data/socialMedia.js';
import partnerCompanies from '../data/partnerCompanies.js';

export default function Footer() {
  const navigationSite = [
    { nameItem: 'Home', href: '#' },
    { nameItem: 'Available Pets', href: '#' },
    { nameItem: 'Adoption Process', href: '#' },
    { nameItem: 'About Us', href: '#' },
    { nameItem: 'Success Stories', href: '#' },
    { nameItem: 'Contact Us', href: '#' },
  ];

  const navigationLegal = [
    { nameItem: 'Privacy Statement', href: '#' },
    { nameItem: 'Terms of Service', href: '#' },
  ];

  return (
    <footer className='bg-gray-100' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Logo and name
      </h2>
      <div className='max-w-7xl mx-auto p-4 md:p-6'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8 xl:col-span-1'>
            {/*logo*/}
            {/* <img
              className='h-10'
              src='https://tailwindui.com/img/logos/workflow-mark-gray-300.svg'
              alt='Company name'
            ></img> */}
            <p className='text-gray-700 text-base'>
              Embrace Love, Adopt a Furry Friend Today!
            </p>

            <div className='flex space-x-6'>
              {externalMedias.map((externalMedia, index) => (
                <a
                  key={index}
                  href='#'
                  className='text-gray-400 hover:text-gray-700'
                >
                  <span className='sr-only'>
                    {externalMedia.nameLink}
                  </span>
                  <externalMedia.faIcons
                    className='h-6 w-6'
                    aria-hidden='true'
                  />
                </a>
              ))}
            </div>
          </div>
          <div className='mt-8 grid md:grid-cols-2 gap-8 xl:mt-0 xl:col-span-2'>
            <div className='md:grid md:grid-cols-2 md:gap-8 xl:col-span-2'>
              <div>
                <h3 className='text-sm font-semibold text-gray-700 tracking-wider uppercase'>
                  Company
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigationSite.map((site, index) => (
                    <li key={index}>
                      <a
                        href={site.href}
                        className='text-base text-gray-700 hover:text-gray-900'
                      >
                        {site.nameItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-gray-700 tracking-wider uppercase'>
                  Legal
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigationLegal.map((legal, index) => (
                    <li key={index}>
                      <a
                        href={legal.href}
                        className='text-base text-gray-700 hover:text-gray-900'
                      >
                        {legal.nameItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-1 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-gray-700 tracking-wider uppercase'>
                  Partner companies
                </h3>
                <ul
                  role='list'
                  className='flex justify-center mt-2 md:mt-8 md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-2'
                >
                  {partnerCompanies.map((partnerCompany, index) => (
                    <li
                      key={index}
                      className='flex text-center md:justify-center items-center p-4'
                    >
                      <a
                        href='#'
                        className=' text-gray-700 hover:text-gray-900 flex flex-col items-center'
                      >
                        <img
                          src={partnerCompany.logoPartner}
                          alt={`logo of ${partnerCompany.namePartner}`}
                          width={80}
                          height={80}
                          className='rounded-full'
                          loading='lazy'
                        />
                        <span className='text-sm md:text-base md:mt-4'>
                          {partnerCompany.namePartner}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-200 pt-8'>
          <p className='text-base text-gray-700 text-center'>
            &copy; 2024 Animal Adoption Website.
            <span> All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

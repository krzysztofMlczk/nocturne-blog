import Image from 'next/image';

import { LinkButton } from '#/components/buttons/LinkButton';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center text-center px-5 py-20'>
      <Image
        src='/logo.svg'
        width={70}
        height={70}
        alt='Company Logo'
        className='mb-7'
      />
      <h2 className='text-supernova font-bold mb-2'>404</h2>
      <h1 className='text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-1'>
        Page not found.
      </h1>
      <p className='text-dusty-gray text-sm sm:text-base md:text-lg text-xl'>
        {"Sorry, we couldn't find page you're looking for"}
      </p>
      <LinkButton href='/'>Go back home</LinkButton>
    </div>
  );
}

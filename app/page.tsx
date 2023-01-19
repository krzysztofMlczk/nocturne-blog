import Image from 'next/image';
import Link from 'next/link';

import { SocialMediaIcons } from '#/components/SocialMediaIcons';
import logo3d from '#/public/logo3d.png';

export default async function HomePage() {
  return (
    <>
      <section id='hero' className='bg-chaos-black'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 py-5 md:py-20 flex flex-col-reverse md:flex-row gap-10 lg:gap-20 items-center justify-center'>
          <div>
            <div className='mb-3'>
              <SocialMediaIcons />
            </div>
            <h1 className='text-supernova font-bold text-7xl tracking-wide'>
              Nocturne
            </h1>
            <h2 className='text-white font-bold text-5xl'>The Game Engine</h2>
            <p className='text-dusty-gray mt-2 mb-9'>
              that will finally meet your game development needs
            </p>
            {/*TODO: replace a tag with Link + smooth scroll*/}
            <a
              href='#about'
              className='bg-supernova text-chaos-black font-bold py-2 px-7 rounded-md hover:bg-white transition-colors cursor-pointer'
            >
              Learn more
            </a>
          </div>
          <Image
            src={logo3d}
            alt='3D logo'
            width={465}
            height={407}
            priority
            className='hidden md:block'
          />
          <Image
            src={logo3d}
            alt='3D logo'
            width={232.5}
            height={203.5}
            priority
            className='block md:hidden'
          />
        </div>
      </section>
      <section
        id='about'
        className='min-h-[700px] bg-gradient-to-b from-chaos-black to-cod-gray bg-triangle-pattern'
      >
        <div className='mx-auto max-w-7xl px-6 lg:px-8 py-5 md:py-20'>
          <h4 className='text-dusty-gray font-bold'>- About</h4>
        </div>
      </section>
      <section
        id='become-a-sponsor'
        className='bg-gradient-to-b to-chaos-black from-cod-gray'
      >
        <div className='mx-auto max-w-7xl px-6 lg:px-8 py-5 md:py-32 text-center'>
          <h1 className='text-dusty-gray-200 text-4xl mb-4'>Want to help Game Development community?</h1>
          <h1 className='text-white font-bold text-5xl mb-3'>Become our sponsor!</h1>
          <p className='text-dusty-gray mb-16'>Allow us to build amazing product by donating</p>
          <Link
            href='TODO:ourrpatreon'
            className='border border-supernova text-supernova hover:text-chaos-black transition-colors bg-transparent hover:bg-supernova py-2 px-7 rounded-md font-bold'
          >
            Our Patreon
          </Link>
        </div>
      </section>
    </>
  );
}

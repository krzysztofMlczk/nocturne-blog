import Image from 'next/image';

import { SocialMediaIcons } from '#/components/SocialMediaIcons';
import logo3d from '#/public/logo3d.png';

export function HeroSection() {
  return (
    <section id='hero' className='bg-chaos-black'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-5 md:py-20 flex flex-col-reverse md:flex-row gap-10 lg:gap-20 items-center justify-center'>
        <div className='text-center md:text-left'>
          <div className='mb-3'>
            <SocialMediaIcons className='justify-center md:justify-start' />
          </div>
          <h1 className='text-supernova font-bold text-7xl tracking-wide mb-3'>
            Nocturne
          </h1>
          <h2 className='text-white font-bold text-5xl mb-2'>
            The Game Engine
          </h2>
          <p className='text-dusty-gray mb-14'>
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
          className='hidden lg:block'
        />
        <Image
          src={logo3d}
          alt='3D logo'
          width={310}
          height={271.33}
          priority
          className='hidden md:block lg:hidden'
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
  );
}

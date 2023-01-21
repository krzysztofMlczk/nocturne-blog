import Image from 'next/image';
import Link from 'next/link';

import { SocialMediaIcons } from '#/components/SocialMediaIcons';
import logo3d from '#/public/logo3d.png';

export default async function HomePage() {
  return (
    <>
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
      <section
        id='about'
        className='bg-gradient-to-b from-chaos-black to-cod-gray overflow-hidden'
      >
        <div className='mx-auto max-w-7xl px-6 lg:px-8 py-5 md:py-20'>
          <div className='flex flex-col gap-10 justify-between md:flex-row mb-16'>
            <div>
              <h1 className='text-dusty-gray text-base mb-5'>About</h1>
              <h2 className='text-white text-3xl'>Project Objectives</h2>
            </div>
            <div>
              <h3 className='text-white font-bold text-lg mb-3'>
                What is Nocturne?
              </h3>
              <p className='text-base text-dusty-gray'>
                We create modern solutions and trends prevailing on the global
                market. We give satisfaction to our recipients.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='relative bg-transparent p-10 rounded-lg border border-dusty-gray-800'>
              <p className='absolute -top-3 right-5 md:-top-10 md:-right-10 lg:-top-14 lg:-right-12 text-supernova opacity-10 text-[100px] md:text-[150px] lg:text-[200px]'>
                O1
              </p>
              <h2 className='text-white text-2xl my-5'>Cooperations</h2>
              <p className='text-dusty-gray text-base'>
                We are introducing new products in our department - a paid
                subscription that gives access to our special departments on the
                website.
              </p>
            </div>
            <div className='relative bg-transparent p-10 rounded-lg'>
              <p
                className='absolute -top-3 right-5 md:top-auto md:-bottom-20 md:-right-5 lg:-bottom-32 lg:-right-10 text-transparent opacity-10 text-[100px] md:text-[150px] lg:text-[200px]'
                style={{ '-webkit-text-stroke': '1px #ffc700' }}
              >
                O2
              </p>
              <h2 className='text-white text-2xl my-5'>Premium</h2>
              <p className='text-dusty-gray text-base'>
                We have a specially dedicated system for the use of modern
                technology and we are introducing a monthly subscription to
                Premium accounts.
              </p>
            </div>
            <div className='relative bg-chaos-black p-10 rounded-lg'>
              <p className='absolute -top-3 right-5 md:-top-24 md:-right-7 lg:-top-32 lg:-right-10 text-supernova opacity-40 text-[100px] md:text-[150px] lg:text-[200px]'>
                O3
              </p>
              <h2 className='text-white text-2xl my-5'>Support</h2>
              <p className='text-dusty-gray text-base'>
                Quick contact with representatives and priority repair services.
                We guarantee a quick solution to problems for customers who have
                a Premium account.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='featured-posts' className='min-h-[700px] bg-cod-gray'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 py-5 md:py-20'>
          <h4 className='text-dusty-gray font-bold'>- About</h4>
        </div>
      </section>
      <section
        id='become-a-sponsor'
        className='bg-gradient-to-b to-chaos-black from-cod-gray'
      >
        <div className='mx-auto max-w-7xl px-6 lg:px-8 py-5 md:py-32 text-center'>
          <h1 className='text-dusty-gray-200 text-3xl mb-4'>
            Want to help Game Development community?
          </h1>
          <h1 className='text-white font-bold text-5xl mb-3'>
            Become our sponsor!
          </h1>
          <p className='text-dusty-gray mb-16'>
            Allow us to build amazing product by donating
          </p>
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

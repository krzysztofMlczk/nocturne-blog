import {
  faLinkedinIn,
  faTwitch,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { LinkButton } from './buttons/LinkButton';

interface FooterProps {
  socialIconsSizePX?: number;
}

export const Footer = ({ socialIconsSizePX = 20 }: FooterProps) => {
  return (
    <footer className='bg-chaos-black p-8'>
      <div className='container mx-auto flex flex-col gap-8'>
        <hr className='bg-dusty-gray' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-60'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-white text-2xl font-bold'>About</h3>
            <p className='text-dusty-gray text-sm'>
              We create modern solutions for game-dev community. We give
              satisfaction to our recipients. We help developers ship on time.
              We help development teams build breathtaking products.
            </p>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className='text-white text-2xl font-bold'>Navigation</h3>
            <div className='flex gap-5 text-dusty-gray'>
              <Link href='TODO'>About</Link>
              <Link href='/'>Blog</Link>
              <Link href='/contact'>Contact</Link>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-6 items-center'>
            <div className='flex gap-4'>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                width={socialIconsSizePX}
                color='white' // TODO: how to reuse already defined colors from TailwindCSS?
                className='cursor-pointer'
              />
              <FontAwesomeIcon
                icon={faTwitch}
                width={socialIconsSizePX}
                color='#FFC700' // TODO: how to reuse already defined colors from TailwindCSS?
                className='cursor-pointer'
              />
              <FontAwesomeIcon
                icon={faTwitter}
                width={socialIconsSizePX}
                color='white' // TODO: how to reuse already defined colors from TailwindCSS?
                className='cursor-pointer'
              />
            </div>
            <p className='text-dusty-gray text-sm'>
              Copyright ©2022 Nocturne inc. All right reserved.
            </p>
          </div>
          <LinkButton href='/support-us' textPrefix='$'>
            Support us
          </LinkButton>
        </div>
      </div>
    </footer>
  );
};

'use client';

import { LinkButton } from './buttons/LinkButton';

import { NavItem } from '#/components/NavItem';
import { SocialMediaIcons } from '#/components/SocialMediaIcons';
import { RouteNavItemMap } from '#/utils/constants';

export function Footer() {
  return (
    <footer className='bg-chaos-black py-8 px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl flex flex-col gap-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 md:gap-40 lg:gap-60 pt-10 border-t border-dusty-gray-900'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-white text-2xl font-bold'>About</h3>
            <p className='text-dusty-gray text-sm'>
              Nocturne is a project of a 3D game engine implemented in C++
              language. As an ongoing project developed by a small group of
              passionate volunteers, it requires a lot of love. If you care
              about technological progress in Game Development as much as we do
              consider helping out either by contributing or donating. Best
              wishes from the Nocturne Team xoxo.
            </p>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className='text-white text-2xl font-bold capitalize'>
              Navigation
            </h3>
            <div className='flex gap-5'>
              {Object.values(RouteNavItemMap).map((item) => (
                <NavItem
                  key={item.slug}
                  variant='footer'
                  navigationItem={item}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col-reverse sm:flex-row gap-3 justify-between'>
          <div className='flex flex-col md:flex-row gap-6 items-center sm:items-start md:items-center'>
            <SocialMediaIcons />
            <p className='text-dusty-gray text-sm text-center sm:text-left'>
              Copyright ©{new Date().getFullYear()} Nocturne inc. All rights
              reserved.
            </p>
          </div>
          <LinkButton href='/support-us' textPrefix='$'>
            Support us
          </LinkButton>
        </div>
      </div>
    </footer>
  );
}

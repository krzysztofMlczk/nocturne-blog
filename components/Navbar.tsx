'use client';

import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Fragment } from 'react';

import { LinkButton } from './buttons/LinkButton';

interface NavItem {
  label: string;
  slug: string;
}

const navigation: Array<NavItem> = [
  { label: 'About', slug: 'about' },
  { label: 'Blog', slug: 'blog' },
  { label: 'Contact', slug: 'contact' },
];

export function Navbar() {
  return (
    <Disclosure
      as='nav'
      className='bg-chaos-black sticky left-0 top-0 w-full lg:static z-50'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-[75px] items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-dusty-gray hover:bg-dusty-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dusty-gray'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <Image
                    className='block h-8 w-auto lg:hidden'
                    src='/logo.svg'
                    width={20}
                    height={20}
                    alt='Company Logo'
                  />
                  <Image
                    className='hidden h-8 w-auto lg:block'
                    src='/logo.svg'
                    width={20}
                    height={20}
                    alt='Company Logo'
                  />
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <NavItem key={item.slug} item={item} />
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <LinkButton href='/support-us' textPrefix='$'>
                  <span className='hidden md:inline'>Support us</span>
                </LinkButton>
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Disclosure.Panel className='sm:hidden fixed bg-inherit w-full'>
              {({ close }) => (
                <div className='space-y-1 px-2 pt-2 pb-3'>
                  {navigation.map((item) => (
                    <NavItem key={item.slug} item={item} onClick={close} />
                  ))}
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

function NavItem({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;
  return (
    <Link
      href={`/${item.slug}`}
      onClick={onClick}
      className={clsx(
        'px-3 py-2 rounded-md text-md block',
        isActive
          ? 'bg-cod-gray text-supernova'
          : 'text-dusty-gray hover:bg-cod-gray-400 hover:text-white'
      )}
    >
      {item.label}
    </Link>
  );
}

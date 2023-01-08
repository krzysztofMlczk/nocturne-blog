'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { NavigationItem, RouteNavItemMap } from '#/utils/constants';

type NavItemVariant = 'header' | 'footer';

interface NavItemProps {
  variant: NavItemVariant;
  navigationItem: NavigationItem;
  onClick?: () => void;
}

export function NavItem({ variant, navigationItem, onClick }: NavItemProps) {
  const segment = useSelectedLayoutSegment();
  const isActive = segment
    ? navigationItem.slug === segment
    : navigationItem.slug === RouteNavItemMap.home.slug;

  let styles: string;
  switch (variant) {
    case 'header':
      styles = clsx(
        'px-3 py-2 rounded-md text-md block',
        isActive
          ? 'bg-cod-gray text-supernova'
          : 'text-dusty-gray hover:bg-cod-gray-400 hover:text-white'
      );
      break;
    case 'footer':
      styles = clsx(
        'capitalize hover:text-white transition-colors',
        isActive ? 'text-supernova' : 'text-dusty-gray'
      );
      break;
  }

  return (
    <Link href={`/${navigationItem.slug}`} onClick={onClick} className={styles}>
      {navigationItem.label}
    </Link>
  );
}

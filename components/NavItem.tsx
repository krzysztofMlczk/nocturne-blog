'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import {
  NavigationItem,
  RouteNavItemMap,
  ToPageNavigationItem,
  ToSectionNavigationItem,
} from '#/utils/constants';
import { useObserver } from '#/utils/hooks/useObserver';

type NavItemVariant = 'header' | 'footer';

interface NavItemProps {
  variant: NavItemVariant;
  navigationItem: NavigationItem;
  onClick?: () => void;
}

const getNavLinkStyles = (variant: NavItemVariant, isActive: boolean) => {
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
  return styles;
};

export function NavItem({ variant, navigationItem, onClick }: NavItemProps) {
  // TODO: fix NavItem highlighting issues
  return (
    <>
      {'id' in navigationItem ? (
        <ToSectionNavItem
          navigationItem={navigationItem}
          variant={variant}
          onClick={onClick}
        />
      ) : (
        <ToPageNavItem
          navigationItem={navigationItem}
          variant={variant}
          onClick={onClick}
        />
      )}
    </>
  );
}

interface ConcreteNavItemProps<T> {
  navigationItem: T;
  variant: NavItemVariant;
  onClick?: () => void;
}

function ToPageNavItem({
  navigationItem,
  variant,
  onClick,
}: ConcreteNavItemProps<ToPageNavigationItem>) {
  const segment = useSelectedLayoutSegment();
  const isActive = segment
    ? navigationItem.slug === segment
    : navigationItem.slug === RouteNavItemMap.home.slug;
  return (
    <Link
      href={`/${navigationItem.slug}`}
      onClick={onClick}
      className={getNavLinkStyles(variant, isActive)}
    >
      {navigationItem.label}
    </Link>
  );
}

function ToSectionNavItem({
  navigationItem,
  variant,
  onClick,
}: ConcreteNavItemProps<ToSectionNavigationItem>) {
  const { isIntersecting: isActive } = useObserver(navigationItem.id);
  return (
    //  TODO: Nextjs 13 has a bug and Link doesn't support href to #ids, see: https://github.com/vercel/next.js/issues/44625
    <a
      href={`${navigationItem.slug}#${navigationItem.id}`}
      onClick={onClick}
      className={getNavLinkStyles(variant, isActive)}
    >
      {navigationItem.label}
    </a>
  );
}

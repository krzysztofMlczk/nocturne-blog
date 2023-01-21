type TopLevelRoute = 'home' | 'about' | 'blog' | 'contact';

export interface ToPageNavigationItem {
  label: string;
  slug: string;
}

export interface ToSectionNavigationItem extends ToPageNavigationItem {
  id: string;
}

export type NavigationItem = ToPageNavigationItem | ToSectionNavigationItem;

export const RouteNavItemMap: Record<TopLevelRoute, NavigationItem> = {
  home: { label: 'Home', slug: '' },
  about: { label: 'About', slug: '..', id: 'about' },
  blog: { label: 'Blog', slug: 'blog' },
  contact: { label: 'Contact', slug: 'contact' },
};

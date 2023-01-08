type TopLevelRoute = 'home' | 'about' | 'blog' | 'contact';

export interface NavigationItem {
  label: string;
  slug: string;
}

export const RouteNavItemMap: Record<TopLevelRoute, NavigationItem> = {
  home: { label: 'Home', slug: '' },
  about: { label: 'About', slug: 'about' },
  blog: { label: 'Blog', slug: 'blog' },
  contact: { label: 'Contact', slug: 'contact' },
};

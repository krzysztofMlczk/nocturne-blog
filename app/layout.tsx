import clsx from 'clsx';

import { PT_Sans, PT_Sans_Caption } from '@next/font/google';

import { Footer } from '#/components/Footer';
import { Navbar } from '#/components/Navbar';
import '#/styles/globals.css';

const ptSans = PT_Sans({
  variable: '--font-pt-sans', // CSS variable name
  weight: ['400', '700'],
  subsets: ['latin'],
});

const ptSansCaption = PT_Sans_Caption({
  variable: '--font-pt-sans-caption', // CSS variable name
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={clsx('bg-cod-gray scroll-smooth', ptSans.variable, ptSansCaption.variable)} // add fonts' CSS variables to HTML document
    >
      <head />
      <body className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

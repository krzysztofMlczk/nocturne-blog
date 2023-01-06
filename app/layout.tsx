import clsx from 'clsx';

import { PT_Sans } from '@next/font/google';

import { Footer } from '#/components/footer';
import { Navbar } from '#/components/Navbar';
import '#/styles/globals.css';

const ptSans = PT_Sans({
  variable: '--font-pt-sans', // CSS variable name
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={clsx('bg-cod-gray', ptSans.variable)}>
      <head />
      <body>
        <Navbar />
        {/* We cannot create container around everything because? - not all elements should be contained some hero images e.g. should span and take whole view port width */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

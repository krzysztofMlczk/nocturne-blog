import { PT_Sans } from '@next/font/google';
import clsx from 'clsx';

import '@styles/globals.css';

import { Footer } from '@components/footer';
import { Navbar } from '@components/Navbar';

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
        {children}
        <Footer />
      </body>
    </html>
  );
}

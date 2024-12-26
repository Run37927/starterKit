import { Mulish, Nunito } from 'next/font/google'
import "./globals.css";
import { cn, constructMetadata } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import Providers from '@/components/Providers';

// To add more fonts, go to https://fonts.google.com/variablefonts
const mulish = Mulish({
  subsets: ['latin'],
  variable: "--font-sans",
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: "--font-heading",
})

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light !scroll-smooth'>
      <body className={cn('min-h-screen font-heading antialiased', mulish.variable, nunito.variable)}>
        <Providers>
          <Toaster />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

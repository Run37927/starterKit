import { Mulish } from 'next/font/google'
import "./globals.css";
import { cn, constructMetadata } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import Providers from '@/components/Providers';
import { Analytics } from "@vercel/analytics/react"

const mulish = Mulish({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light !scroll-smooth'>
      <body className={cn('min-h-screen font-sans antialiased', mulish.className)}>
        <Providers>
          <Toaster />
          <Navbar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/assets/styles/globals.css';

import { ThemeProvider } from '@/components/theme-provider';

import Footer from '@/components/footer';
import Header from '@/components/shared/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rétt tré',
  description: 'Rétt tré á réttum stað',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <div className='min-h-screen flex flex-col'>
            <Header />
            <main className='flex-1 flex flex-col'>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

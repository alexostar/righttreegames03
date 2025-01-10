import Footer from '@/components/footer';
import Header2 from '@/components/shared/header/header2';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col'>
      <Header2 />
      <main className='main flex-1'>{children}</main>
      <Footer />
    </div>
  );
}

//  Removed wrapper

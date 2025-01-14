//import Footer from '@/components/footer';
//import Header from '@/components/shared/header';
//import { Suspense } from 'react';

export default function VistirLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

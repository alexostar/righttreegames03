import { Metadata } from 'next';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
//import content components

export const metadata: Metadata = {
  title: 'Admin dashboard',
};

const DashboardPage = async () => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className='flex-center min-h-screen w-full'>
        <h2 className='h2-bold'>Dashboard</h2>
      </div>
    </SessionProvider>
  );
};

export default DashboardPage;

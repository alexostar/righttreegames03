import { Metadata } from 'next';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
//import content components

export const metadata: Metadata = {
  title: 'Customer Profile',
};

const DashboardPage = async () => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className='max-w-md mx-auto space-y-4'>
        <h2 className='h2-bold'>Dashboard</h2>
      </div>
    </SessionProvider>
  );
};

export default DashboardPage;

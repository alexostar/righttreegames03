'use client';

import ModeToggle from './mode-toggle';
import SideBarNav from './sidebar-nav';
import { UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Menu = () => {
  return (
    <>
      <div className='flex justify-end gap-3'>
        <nav className='flex w-full max-w-xs gap-1'>
          <ModeToggle />
          <SideBarNav />
          <Link href='/kort/about'>
            <Button variant='outline' size='icon'>
              <UserRound className='h-5 w-5' />
            </Button>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Menu;

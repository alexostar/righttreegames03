//import { EllipsisVertical, ShoppingCart } from 'lucide-react';
//import { Button } from '@/components/ui/button';
//import {Sheet, SheetContent, SheetTrigger, SheetTitle,} from '@/components/ui/sheet';
//import Link from 'next/link';
import ModeToggle from './mode-toggle';
import SideBarNav from './sidebar-nav';
import UserButton from './user-button';

const Menu = () => {
  return (
    <>
      <div className='flex justify-end gap-3'>
        <nav className='flex w-full max-w-xs gap-1'>
          <ModeToggle />

          <SideBarNav />
          <UserButton />
        </nav>
        {/*<nav className='md:hidden'>
          <Sheet>
            <SheetTrigger className='align-middle'>
              <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className='flex flex-col items-start'>
              <SheetTitle>Menu</SheetTitle>
              <ModeToggle />
              <SideBarNav />
              {/*<UserButton />
            </SheetContent>
          </Sheet>
        </nav>*/}
      </div>
    </>
  );
};

export default Menu;

'use client';

import Image from 'next/image';
import Link from 'next/link';
import Menu from './menu';

const Header = () => {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <Link href='/' className='flex-start'>
            <Image
              priority={true}
              src='/images/logo.svg'
              width={32}
              height={32}
              alt='VIN logo'
            />
            <span className='hidden lg:block font-semibold text-xl ml-3 text-muted-foreground'>
              Rétt tré á réttum stað
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;

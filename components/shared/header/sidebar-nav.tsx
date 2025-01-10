'use client';

import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

import { Lock } from 'lucide-react';

export default function SideBarNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' className='w-10 px-0 '>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <SheetTitle>Rétt tré á réttum stað</SheetTitle>
        <MobileLink
          onOpenChange={setOpen}
          href='/'
          className='flex items-center'>
          {/*<Icons.logo className='mr-2 h-4 w-4' />*/}
          <span className='font-bold'>Logo</span>
        </MobileLink>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center justify-between mt-4 pl-2'>
            <MobileLink onOpenChange={setOpen} href='/'>
              Home
            </MobileLink>
          </div>

          <div className='flex items-center justify-between pl-4'>
            <MobileLink onOpenChange={setOpen} href='/demo/typography'>
              First route
            </MobileLink>
          </div>
          <div className='flex items-center justify-between pl-4'>
            <MobileLink onOpenChange={setOpen} href='/demo/login'>
              Protected route
            </MobileLink>
            <Lock className='h-4 w-4' />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}>
      {children}
    </Link>
  );
}

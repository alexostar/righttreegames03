'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  /*
  const handleOpenChange = () => {
    router.back();
  };
  */

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent className='max-w-fitsm:max-w-[425px]'>
        {children}
      </DialogContent>
    </Dialog>
  );
}

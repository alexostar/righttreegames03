'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function MapHome() {
  return (
    <div className='bg-background'>
      <div className='mx-auto flex max-w-[1200px] flex-col items-center justify-center pt-4'>
        <div className='flex w-full flex-row justify-start'>
          <Link href='/vistir' className='mb-4 text-left '>
            <Button variant='outline' size='icon'>
              <ArrowLeft />
            </Button>
          </Link>
        </div>
        <h1 className='ml-8  text-xl font-bold lg:ml-0 mb-4'>
          Land mögulega opið til endurheimtar/skógræktar neðan 400 m hæðarmarka
        </h1>
        <div className='relative max-h-[800px] max-w-[1200px] rounded-xl border-2'>
          <TransformWrapper>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className='absolute top-4 right-4 z-10 flex gap-2'>
                  <Button
                    variant='secondary'
                    size='icon'
                    onClick={() => zoomIn()}>
                    <ZoomIn className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='secondary'
                    size='icon'
                    onClick={() => zoomOut()}>
                    <ZoomOut className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='secondary'
                    size='icon'
                    onClick={() => resetTransform()}>
                    <RotateCcw className='h-4 w-4' />
                  </Button>
                </div>
                <TransformComponent>
                  <Image
                    src='/maps/vist-endurheimt.jpg'
                    alt='Endurheimt og skógrækt'
                    width={2100}
                    height={1400}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
}

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

//import { Ecosystem } from '@/types';
// Change to import from types
type Ecosystem = {
  id: number;
  title: string;
  status: string;
  content: string;
  slug: string;
};

import Link from 'next/link';

type Props = {
  ecosystem: Ecosystem;
};

export function StatusCard({ ecosystem }: Props) {
  return (
    <Link href={`/vistir/${ecosystem.slug}`}>
      <Card
        className={cn(
          'aspect-square rounded-3xl flex items-center justify-center cursor-pointer transition-all hover:scale-105 p-4',
          'border-4',
          ecosystem.status === 'success' &&
            'border-emerald-700/80 bg-white/70 hover:bg-emerald-50/70',
          ecosystem.status === 'warning' &&
            'border-amber-500/80 bg-white/70 hover:bg-amber-50/70',
          ecosystem.status === 'danger' &&
            'border-rose-700/80 bg-white/70 hover:bg-rose-50/70'
        )}>
        <h3 className='font-bold text-base text-center px-2 text-gray-700'>
          {ecosystem.title}
        </h3>
      </Card>
    </Link>
  );
}

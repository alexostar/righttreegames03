import { Modal } from '../../_components/Modal';

import { DialogTitle } from '@/components/ui/dialog';

import { prisma } from '@/db/prisma';

import ReactMarkdown from 'react-markdown';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Photo({ params }: Props) {
  const { slug } = await params;

  const ecosystem = await prisma.ecosystem.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!ecosystem) {
    return <h1>No ecosystem to display</h1>;
  }

  return (
    <Modal>
      <div>
        <DialogTitle>{ecosystem.title}</DialogTitle>
        <div className='mt-4 space-y-4 prose prose-sm prose-a:text-blue-600 hover:prose-a:text-blue-500'>
          <ReactMarkdown>{ecosystem.content}</ReactMarkdown>
        </div>
      </div>
    </Modal>
  );
}

import ReactMarkdown from 'react-markdown';

import { prisma } from '@/db/prisma';

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
    <div className='h-screen flex items-center justify-center'>
      <div className='mx-auto max-w-sm'>
        <h1>{ecosystem.title}</h1>
        <div className='mt-4 space-y-4 prose prose-sm prose-a:text-blue-600 hover:prose-a:text-blue-500'>
          <ReactMarkdown>{ecosystem.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

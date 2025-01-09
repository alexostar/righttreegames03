import { z } from 'zod';
import { insertProductSchema } from '@/lib/validator';
import { insertEcosystemSchema } from '@/lib/validator';

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  createdAt: Date;
  rating: string;
  numReviews: number;
};

export type Ecosystem = z.infer<typeof insertEcosystemSchema> & {
  id: number;
  slug: string;
  createdAt: Date;
  updatedAt?: Date;
};

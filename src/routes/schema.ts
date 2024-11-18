import { z } from 'zod';

export const formSchema = z.object({
	URL: z.string().url('Invalid URL, try including https://').min(1, 'URL Field is required').trim()
});

export type FormSchema = typeof formSchema;

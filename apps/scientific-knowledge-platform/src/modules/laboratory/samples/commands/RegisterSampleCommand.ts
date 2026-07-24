import { z } from 'zod';

export const RegisterSampleCommandSchema = z.object({
  material: z.string(),
  client: z.string(),
  priority: z.enum(['ROUTINE', 'URGENT']),
});

export type RegisterSampleCommand = z.infer<typeof RegisterSampleCommandSchema>;

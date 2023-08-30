import { TypeOf, z } from 'zod';

const zodEnv = z.object({
  // Add your environment variables here
  SERVER_PORT: z.string().default('3000'),
});
declare global {
  export namespace NodeJS {
    interface ProcessEnv extends TypeOf<typeof zodEnv> {}
  }
}

export function checkENV() {
  try {
    zodEnv.parse(process.env);
  } catch (err) {
    if (err instanceof z.ZodError) {
      const { fieldErrors } = err.flatten();
      const errorMessage = Object.entries(fieldErrors)
        .map(([field, errors]) => (errors ? `${field}: ${errors.join(', ')}` : field))
        .join('\n  ');
      throw new Error(`Missing environment variables:\n  ${errorMessage}`);
      process.exit(1);
    }
  }
}
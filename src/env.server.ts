import { TypeOf, z } from 'zod';

const zodEnv = z.object({
  // Add your environment variables here
  SERVER_PORT: z.string().default('4000'),
  STRIPE_SECRET_KEY: z.string().default(''),
  STRIPE_WEBHOOK_SECRET: z.string().default(''),
  STRIPE_API_VERSION: z.string().default('2023-08-16'),
  MINIMAX_ORG_ID: z.string(),
  MINIMAX_LOCALIZATION_TYPE: z.string().default('HR'),
  MINIMAX_API_CLIENT_ID: z.string(),
  MINIMAX_API_CLIENT_SECRET: z.string(),
  MINIMAX_APP_USERNAME: z.string(),
  MINIMAX_APP_PASSWORD: z.string(),
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

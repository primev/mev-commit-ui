import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  client: {
    NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: z.string().min(1).optional(),
    NEXT_PUBLIC_APP_URL: z.string().min(1).optional(),
    NEXT_PUBLIC_VANILLA_REGISTRY_ADDRESS: z.string().min(1),
    NEXT_PUBLIC_MEV_COMMIT_AVS_V3_ADDRESS: z.string().min(1),
    NEXT_PUBLIC_MEV_COMMIT_MIDDLEWARE_ADDRESS: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL:
      process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
    NEXT_PUBLIC_VANILLA_REGISTRY_ADDRESS:
      process.env.NEXT_PUBLIC_VANILLA_REGISTRY_ADDRESS,
    NEXT_PUBLIC_MEV_COMMIT_AVS_V3_ADDRESS:
      process.env.NEXT_PUBLIC_MEV_COMMIT_AVS_V3_ADDRESS,
    NEXT_PUBLIC_MEV_COMMIT_MIDDLEWARE_ADDRESS:
      process.env.NEXT_PUBLIC_MEV_COMMIT_MIDDLEWARE_ADDRESS,
  },
})

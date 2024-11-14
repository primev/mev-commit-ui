import { MevCommitConfig } from "@/types"

import { env } from "@/env.mjs"

export const mevCommitConfig: MevCommitConfig = {
  chain: env.NEXT_PUBLIC_CHAIN,
  vanillaRegistryAddress: env.NEXT_PUBLIC_VANILLA_REGISTRY_ADDRESS,
  middlewareAddress: env.NEXT_PUBLIC_MEV_COMMIT_MIDDLEWARE_ADDRESS,
  avsV3Address: env.NEXT_PUBLIC_MEV_COMMIT_AVS_V3_ADDRESS,
}

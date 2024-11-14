import { MevCommitConfig } from "@/types"

import { env } from "@/env.mjs"
import { getChain } from "@/lib/utils"

const chain = getChain()

export const mevCommitConfig: MevCommitConfig = {
  chain,
  vanillaRegistryAddress: env.NEXT_PUBLIC_VANILLA_REGISTRY_ADDRESS,
  middlewareAddress: env.NEXT_PUBLIC_MEV_COMMIT_MIDDLEWARE_ADDRESS,
  avsV3Address: env.NEXT_PUBLIC_MEV_COMMIT_AVS_V3_ADDRESS,
}

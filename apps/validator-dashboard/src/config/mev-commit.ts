import { MevCommitConfig } from "@/types"

import { env } from "@/env.mjs"
import { getChain } from "@/lib/utils"

const chain = getChain()

export const mevCommitConfig: MevCommitConfig = {
  chain,
  vanillaRegistryAddress:
    chain === "holesky"
      ? env.NEXT_PUBLIC_VANILLA_REGISTRY_ADDRESS_HOLESKY
      : env.NEXT_PUBLIC_VANILLA_REGISTRY_ADDRESS,
  middlewareAddress:
    chain === "holesky"
      ? env.NEXT_PUBLIC_MEV_COMMIT_MIDDLEWARE_ADDRESS_HOLESKY
      : env.NEXT_PUBLIC_MEV_COMMIT_MIDDLEWARE_ADDRESS,
  avsV3Address:
    chain === "holesky"
      ? env.NEXT_PUBLIC_MEV_COMMIT_AVS_V3_ADDRESS_HOLESKY
      : env.NEXT_PUBLIC_MEV_COMMIT_AVS_V3_ADDRESS,
}

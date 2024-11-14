import { holesky, mainnet } from "viem/chains"

import { env } from "@/env.mjs"

export const CHAIN = env.NEXT_PUBLIC_CHAIN === "holesky" ? holesky : mainnet
export const ALCHEMY_API_KEY = "I9SxHux9_e7Eyyym5GWcKCF_u2LDXdoH"

export const GRAPHQL_URL = `https://api.goldsky.com/api/public/project_cm1jo0v0u5zrv01vghcrm1ka1/subgraphs/mev-commit-validators/${env.NEXT_PUBLIC_CHAIN}/gn`

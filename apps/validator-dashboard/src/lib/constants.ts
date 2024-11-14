import { holesky, mainnet } from "viem/chains"

import { mevCommitConfig } from "@/config/mev-commit"

export const CHAIN = mevCommitConfig.chain === "holesky" ? holesky : mainnet
export const ALCHEMY_API_KEY = "I9SxHux9_e7Eyyym5GWcKCF_u2LDXdoH"

export const GRAPHQL_URL = `https://api.goldsky.com/api/public/project_cm1jo0v0u5zrv01vghcrm1ka1/subgraphs/mev-commit-validators/${mevCommitConfig.chain}/gn`

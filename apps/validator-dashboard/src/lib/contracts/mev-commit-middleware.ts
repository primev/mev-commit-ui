import { Address, parseAbi, WalletClient } from "viem"

import { env } from "@/env.mjs"

import { CHAIN } from "../constants"
import { getPublicClient } from "../viem"
import { mevCommitMiddlewareAbi } from "./abi/mev-commit-middleware"

export const MEV_COMMIT_MIDDLEWARE_ADDRESS: Address = {
  1: env.NEXT_PUBLIC_MEV_COMMIT_MIDDLEWARE_ADDRESS as Address,
  17000: env.NEXT_PUBLIC_MEV_COMMIT_MIDDLEWARE_ADDRESS_HOLESKY as Address,
  31337: env.NEXT_PUBLIC_MEV_COMMIT_MIDDLEWARE_ADDRESS_ANVIL as Address,
}[CHAIN.id]

export const abi = parseAbi([
  "function registerValidators(bytes[][] calldata blsPubkeys, address[] calldata vaults) external",
  "function requestValDeregistrations(bytes[] calldata blsPubkeys) external",
  "function deregisterValidators(bytes[] calldata blsPubkeys) external",
])

const client = getPublicClient()

export const registerValidators = async ({
  walletClient,
  blsPubkeys,
  vaults,
  account,
}: {
  walletClient: WalletClient
  blsPubkeys: Address[][]
  vaults: Address[]
  account: Address
}) => {
  const { request } = await client.simulateContract({
    address: MEV_COMMIT_MIDDLEWARE_ADDRESS,
    abi: mevCommitMiddlewareAbi,
    functionName: "registerValidators",
    account,
    args: [blsPubkeys, vaults],
  })

  const hash = await walletClient.writeContract(request)

  if (!hash) {
    throw new Error(
      "Failed to register validators: transaction hash is undefined"
    )
  }

  const pendingTransaction = client.waitForTransactionReceipt({ hash })

  return { hash, pendingTransaction }
}

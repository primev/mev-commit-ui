import { Address, WalletClient } from "viem"

import { mevCommitConfig } from "@/config/mev-commit"

import { getPublicClient } from "../viem"
import { mevCommitMiddlewareAbi } from "./abi/mev-commit-middleware"

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
    address: mevCommitConfig.middlewareAddress,
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

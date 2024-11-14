import { Address, parseEther, WalletClient } from "viem"

import { mevCommitConfig } from "@/config/mev-commit"

import { getPublicClient } from "../viem"
import { vanillaRegistryAbi } from "./abi/vanilla-registry"

const client = getPublicClient()

export const stakeValidators = async ({
  walletClient,
  blsPubkeys,
  account,
  stakeAmount,
}: {
  walletClient: WalletClient
  blsPubkeys: Address[]
  account: Address
  stakeAmount: string
}) => {
  const { request } = await client.simulateContract({
    address: mevCommitConfig.vanillaRegistryAddress,
    abi: vanillaRegistryAbi,
    functionName: "stake",
    args: [blsPubkeys],
    value: parseEther(stakeAmount),
    account,
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

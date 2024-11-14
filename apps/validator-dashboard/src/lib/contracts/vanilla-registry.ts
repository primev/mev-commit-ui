import { Address, parseEther, WalletClient } from "viem"

import { env } from "@/env.mjs"

import { CHAIN } from "../constants"
import { getPublicClient } from "../viem"
import { vanillaRegistryAbi } from "./abi/vanilla-registry"

export const VANILLA_REGISTRY_ADDRESS: Address = {
  1: env.NEXT_PUBLIC_VANILLA_REGISTRY_ADDRESS as Address,
  17000: env.NEXT_PUBLIC_VANILLA_REGISTRY_ADDRESS_HOLESKY as Address,
  31337: env.NEXT_PUBLIC_VANILLA_REGISTRY_ADDRESS_ANVIL as Address,
}[CHAIN.id]

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
    address: VANILLA_REGISTRY_ADDRESS,
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

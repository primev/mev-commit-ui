import { Address, WalletClient } from "viem"

import { CHAIN } from "../constants"
import { getPublicClient } from "../viem"
import { vanillaRegistryAbi } from "./abi/vanilla-registry"

export const VANILLA_REGISTRY_ADDRESS: Address = {
  17000: "0x87d5f694fad0b6c8aabca96277de09451e277bcf" as Address,
  31337: "0x87d5f694fad0b6c8aabca96277de09451e277bcf" as Address,
}[CHAIN.id]

const client = getPublicClient()

export const stakeValidators = async ({
  walletClient,
  blsPubkeys,
  account,
}: {
  walletClient: WalletClient
  blsPubkeys: Address[]
  account: Address
}) => {
  const { request } = await client.simulateContract({
    address: VANILLA_REGISTRY_ADDRESS,
    abi: vanillaRegistryAbi,
    functionName: "stake",
    args: [blsPubkeys],
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

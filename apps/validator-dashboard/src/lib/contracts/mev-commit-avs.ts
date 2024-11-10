import {
  Hex,
  parseAbi,
  TransactionReceipt,
  type Address,
  type Hash,
  type WalletClient,
} from "viem"

import { CHAIN } from "@/lib/constants"
import { getPublicClient } from "@/lib/viem"

export const MEV_COMMIT_AVS_ADDRESS: Address = {
  17000: "0xE8406159460BE1BB0439d54E02cc7A8dDB6b0fB9" as Address,
  31337: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707" as Address,
}[CHAIN.id]

export const abi = parseAbi([
  "function registerValidatorsByPodOwners(bytes[][] calldata valPubKeys, address[] calldata podOwners) external",
  "function requestValidatorsDeregistration(bytes[] calldata valPubKeys) external",
  "function deregisterValidators(bytes[] calldata valPubKeys) external",
])

const client = getPublicClient()

export const registerValidatorsByPodOwners = async ({
  walletClient,
  podOwners,
  blsPubkeys,
  account,
}: {
  walletClient: WalletClient
  podOwners: Address[]
  blsPubkeys: Hex[][]
  account: Address
}): Promise<{
  hash: Hash
  pendingTransaction: Promise<TransactionReceipt>
}> => {
  console.log("registerValidatorsByPodOwners", {
    blsPubkeys,
    podOwners,
    account,
  })
  const { request } = await client.simulateContract({
    address: MEV_COMMIT_AVS_ADDRESS,
    abi,
    functionName: "registerValidatorsByPodOwners",
    account,
    args: [blsPubkeys, podOwners],
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

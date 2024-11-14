import {
  Hex,
  parseAbi,
  TransactionReceipt,
  type Address,
  type Hash,
  type WalletClient,
} from "viem"

import { mevCommitConfig } from "@/config/mev-commit"
import { getPublicClient } from "@/lib/viem"

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
    address: mevCommitConfig.avsV3Address,
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

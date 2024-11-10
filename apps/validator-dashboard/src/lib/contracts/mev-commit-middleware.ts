import { Address, parseAbi, WalletClient } from "viem"

import { CHAIN } from "../constants"
import { getPublicClient } from "../viem"
import { mevCommitMiddlewareAbi } from "./abi/mev-commit-middleware"

export const MEV_COMMIT_MIDDLEWARE_ADDRESS: Address = {
  17000: "0xE8406159460BE1BB0439d54E02cc7A8dDB6b0fB9" as Address,
  31337: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707" as Address,
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

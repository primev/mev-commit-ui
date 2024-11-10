import { useState } from "react"
import { Address } from "viem"

import { registerValidatorsByPodOwners } from "@/lib/contracts/mev-commit-avs"
import { registerValidators } from "@/lib/contracts/mev-commit-middleware"
import { stakeValidators } from "@/lib/contracts/vanilla-registry"
import { getContractError, truncateKey } from "@/lib/utils"
import { OptInFormData } from "@/components/opt-in-form/opt-in.form"

import { useWallet } from "./use-wallet"

type ErrorNames =
  | "OperatorNotEntity"
  | "VaultNotRegistered"
  | "ValidatorsNotSlashable"
  | "VaultNotRegistered"

// Utility function to extract error name
const getErrorName = (error: any): ErrorNames | null => {
  if (error?.cause?.data?.errorName) {
    return error.cause.data.errorName
  }
  return null
}

// Overload signatures
function getErrorData(
  errorName: "VaultNotRegistered",
  error: any
): Address | null
function getErrorData(errorName: string, error: any): any[] | null

// Implementation
function getErrorData(errorName: string, error: any): Address | any[] | null {
  if (error?.cause?.data?.args) {
    if (errorName === "VaultNotRegistered") {
      return error.cause.data.args[0] as Address
    }
    return error.cause.data.args
  }
  return null
}

// TODO: Might be interesting to have the error be a jsx element for more flexibility
const errorMessages = {
  // TODO: add more copy like. not registered on middleware, and or instructions on how to register
  OperatorNotEntity:
    "Connected account is not a registered operator. Please try again",
  VaultNotEntity: "Vault is not registered with the Symbiotic vault factory.",
  ValidatorsNotSlashable:
    "Vault doesn't have enough collateral deposited to opt-in validators",
  VaultNotRegistered: "Vault is not registered with the MevCommit Middleware.",
}

export const useOptInValidators = () => {
  const { walletClient, address } = useWallet()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const optInValidators = async ({
    protocol,
    validatorKeys,
    stakeAmount,
    vaults,
    podOwners,
  }: OptInFormData & { podOwners?: Address[] }) => {
    console.log("optInValidators- validatorKeys", validatorKeys)
    if (!walletClient || !address) {
      throw new Error("Wallet not connected")
    }
    setLoading(true)
    try {
      switch (protocol) {
        case "symbiotic":
          const result = await registerValidators({
            walletClient,
            blsPubkeys: validatorKeys,
            vaults,
            account: address,
          })
          return result
        case "vanilla":
          if (!validatorKeys[0]) {
            throw new Error("No BLS pubkeys provided")
          }
          if (!stakeAmount) {
            throw new Error("No stake amount provided")
          }
          return await stakeValidators({
            walletClient,
            blsPubkeys: validatorKeys[0],
            account: address,
            stakeAmount,
          })
        case "eigenlayer":
          if (!podOwners) {
            throw new Error("No pod owners provided")
          }
          return await registerValidatorsByPodOwners({
            walletClient,
            // Used the array of pod owners if provided, i.e. restaking as an operator
            // otherwise default to the connected wallet ie. restaking as a pod owner
            podOwners: podOwners ? podOwners : [address],
            blsPubkeys: validatorKeys,
            account: address,
          })
        default:
          return null
      }
    } catch (error: any) {
      console.log("optInValidators- error", { ...error }, error)
      const errorName = getErrorName(error)
      console.log("optInValidators- errorName", errorName)
      if (errorName && errorName in errorMessages) {
        let errorMessage = errorMessages[errorName]
        if (errorName === "VaultNotRegistered") {
          const vaultAddress = getErrorData(errorName, error)
          console.log("optInValidators- vaultAddress", vaultAddress)
          errorMessage += `\nVault: ${truncateKey(vaultAddress ?? "", {
            prefixLength: 12,
            suffixLength: 8,
          })}`
        }
        setError(errorMessage)
      } else {
        const contractError = getContractError(error)
        console.log("optInValidators- contractError", { ...contractError })
        setError(contractError)
      }
    } finally {
      setLoading(false)
    }
  }

  const clearError = () => {
    setError(null)
  }

  return { loading, error, optInValidators, clearError }
}

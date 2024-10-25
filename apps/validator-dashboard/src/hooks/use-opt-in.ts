import { useState } from "react"
import { Address } from "viem"

import { registerValidators } from "@/lib/contracts/mev-commit-middleware"
import { stakeValidators } from "@/lib/contracts/vanilla-registry"
import { getContractError } from "@/lib/utils"
import { OptInFormData } from "@/components/opt-in.form"

import { useWallet } from "./use-wallet"

type ErrorNames = "OperatorNotEntity"

// Utility function to extract error name
const getErrorName = (error: any): ErrorNames | null => {
  if (error?.cause?.data?.errorName) {
    return error.cause.data.errorName
  }
  return null
}
// TODO: Might be interesting to have the error be a jsx element for more flexibility
const errorMessages = {
  // TODO: add more copy like. not registered on middleware, and or instructions on how to register
  OperatorNotEntity:
    "Connected account is not a registered operator. Please try again",
}

export const useOptInValidators = () => {
  const { walletClient, address } = useWallet()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const optInValidators = async (
    protocol: OptInFormData["protocol"],
    blsPubkeys: Address[][] | Address[]
  ) => {
    console.log("optInValidators- blsPubkeys", blsPubkeys)
    if (!walletClient || !address) {
      throw new Error("Wallet not connected")
    }
    setLoading(true)
    try {
      switch (protocol) {
        case "symbiotic":
          const result = await registerValidators({
            walletClient,
            blsPubkeys: blsPubkeys as Address[][],
            // TODO: we'll get the vault addresses from the middleware
            vaults: ["0x8A791620dd6260079BF849Dc5567aDC3F2FdC318"],
            account: address,
          })
          return result
        case "vanilla":
          return stakeValidators({
            walletClient,
            blsPubkeys: blsPubkeys as Address[],
            account: address,
          })
        default:
          return null
      }
    } catch (error: any) {
      const errorName = getErrorName(error)
      if (errorName) {
        setError(errorMessages[errorName] || "Unknown error")
      } else {
        setError(getContractError(error))
      }
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, optInValidators }
}

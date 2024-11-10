import { useEffect } from "react"

import { WalletContext } from "@/components/providers/wallet-provider"

import { getPublicClient } from "../lib/viem"
import { useSelector } from "./use-selector"

export const useBlockNumber = () => {
  const blockNumber = useSelector(
    WalletContext,
    (state) => state.blockNumber,
    (a, b) => a === b
  )

  const dispatch = useSelector(WalletContext, (state) => state.dispatch)

  useEffect(() => {
    const client = getPublicClient()

    const unsubscribe = client.watchBlockNumber({
      emitOnBegin: true,
      onBlockNumber: (newBlockNumber: bigint) => {
        dispatch({ type: "SET_BLOCK_NUMBER", payload: newBlockNumber })
      },
      onError: (error: Error) => {
        console.error("Error watching block number:", error)
      },
    })

    return () => {
      unsubscribe()
    }
  }, [dispatch])

  return blockNumber
}

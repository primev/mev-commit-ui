"use client"

import { useContext, useMemo } from "react"
import { getAddress } from "viem"

import {
  WalletContext,
  WalletState,
} from "@/components/providers/wallet-provider"

import { useSelector } from "./use-selector"

// Hook for wallet address
export const useAddress = () => {
  return useSelector(
    WalletContext,
    (state) => state.address,
    (a, b) => (a && b ? getAddress(a) === getAddress(b) : a === b)
  )
}

// Hook for wallet balance
export const useBalance = () => {
  return useSelector(WalletContext, (state) => state.balance)
}

export const useWallet = (): WalletState => {
  return useContext(WalletContext)
}

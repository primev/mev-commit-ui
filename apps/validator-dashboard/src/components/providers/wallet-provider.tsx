"use client"

import React, { createContext, useEffect, useMemo, useReducer } from "react"
import { Address, createWalletClient, custom, parseEther } from "viem"

import { CHAIN } from "@/lib/constants"
import { getOnboard } from "@/lib/onboard"

export interface WalletState {
  address: Address | null
  blockNumber: bigint | null
  balance: bigint
  walletClient: any | null
  isConnecting: boolean
  connectWallet: (lastConnectedWallet?: string) => Promise<void>
  dispatch: React.Dispatch<{ type: string; payload: any }>
}

const initialState: WalletState = {
  address: null,
  blockNumber: null,
  balance: parseEther("0"),
  walletClient: null,
  isConnecting: false,
  connectWallet: async () => {},
  dispatch: (() => {}) as React.Dispatch<{ type: string; payload: any }>, // Properly typed dispatch function
}

const SET_ADDRESS = "SET_ADDRESS"
const SET_BLOCK_NUMBER = "SET_BLOCK_NUMBER"
const SET_BALANCE = "SET_BALANCE"
const SET_WALLET_CLIENT = "SET_WALLET_CLIENT"
const SET_IS_CONNECTING = "SET_IS_CONNECTING"

const reducer = (
  state: WalletState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_ADDRESS:
      return { ...state, address: action.payload }
    case SET_BLOCK_NUMBER:
      return { ...state, blockNumber: action.payload }
    case SET_BALANCE:
      return { ...state, balance: action.payload }
    case SET_WALLET_CLIENT:
      return { ...state, walletClient: action.payload }
    case SET_IS_CONNECTING:
      return { ...state, isConnecting: action.payload }
    default:
      return state
  }
}

export const WalletContext = createContext<typeof initialState>(initialState)

interface WalletProviderProps {
  children: React.ReactNode
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const web3Onboard = getOnboard()

  const connectWallet = async (lastConnectedWallet?: string) => {
    dispatch({ type: SET_IS_CONNECTING, payload: true })
    const connectOptions = lastConnectedWallet
      ? {
          autoSelect: { label: lastConnectedWallet, disableModals: true },
        }
      : undefined

    try {
      const [wallet] = await web3Onboard.connectWallet(connectOptions)
      if (wallet && wallet.provider) {
        const walletClient = createWalletClient({
          chain: CHAIN,
          transport: custom(wallet.provider),
        })
        const [address] = await walletClient.getAddresses()
        if (address) {
          dispatch({ type: SET_ADDRESS, payload: address })
        }

        dispatch({ type: SET_WALLET_CLIENT, payload: walletClient })

        if (!lastConnectedWallet) {
          window.localStorage.setItem(
            "mev-commit:lastConnectedWallet",
            wallet?.label ?? ""
          )
        }
      }
    } catch (error) {
      console.error("Error connecting wallet:", error)
    } finally {
      dispatch({ type: SET_IS_CONNECTING, payload: false })
    }
  }

  useEffect(() => {
    const lastConnectedWallet = window.localStorage.getItem(
      "mev-commit:lastConnectedWallet"
    )

    if (lastConnectedWallet) {
      connectWallet(lastConnectedWallet)
    }
  }, [])

  useEffect(() => {
    const wallets = web3Onboard.state.select("wallets")

    const subscription = wallets.subscribe(([wallet]) => {
      const balance = wallet?.accounts?.[0]?.balance?.["ETH"]
      const address = wallet?.accounts?.[0]?.address
      if (balance) {
        dispatch({ type: SET_BALANCE, payload: parseEther(balance) })
      }
      if (address) {
        dispatch({ type: SET_ADDRESS, payload: address })
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [web3Onboard, dispatch])

  const memoizedValue = useMemo(
    () => ({
      ...state,
      connectWallet,
      dispatch,
    }),
    [state, connectWallet]
  )

  return (
    <WalletContext.Provider value={memoizedValue}>
      {children}
    </WalletContext.Provider>
  )
}

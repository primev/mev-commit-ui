"use client"

import React, { createContext, useEffect, useMemo, useReducer } from "react"
import { usePathname, useRouter } from "next/navigation"
import { toast } from "sonner"
import {
  Address,
  createWalletClient,
  custom,
  getAddress,
  parseEther,
  ResourceUnavailableRpcError,
  SwitchChainError,
  UserRejectedRequestError,
  type PublicClient,
  type WalletClient,
} from "viem"

import { CHAIN } from "@/lib/constants"
import { getOnboard } from "@/lib/onboard"
import { getPublicClient } from "@/lib/viem"

export interface WalletState {
  address: Address | null
  blockNumber: bigint | null
  balance: bigint
  walletClient: WalletClient | null
  isConnecting: boolean
  connectWallet: (lastConnectedWallet?: string) => Promise<void>
  disconnect: () => Promise<void>
  dispatch: React.Dispatch<{ type: string; payload: any }>
  isConnected: boolean
}

const initialState: WalletState = {
  address: null,
  blockNumber: null,
  balance: parseEther("0"),
  walletClient: null,
  isConnecting: false,
  connectWallet: async () => {},
  disconnect: async () => {},
  dispatch: (() => {}) as React.Dispatch<{ type: string; payload: any }>, // Properly typed dispatch function
  isConnected: false,
}

const LOCAL_STORAGE_KEY_LAST_WALLET = "mev-commit:lastConnectedWallet"

const SET_ADDRESS = "SET_ADDRESS"
const SET_BLOCK_NUMBER = "SET_BLOCK_NUMBER"
const SET_BALANCE = "SET_BALANCE"
const SET_WALLET_CLIENT = "SET_WALLET_CLIENT"
const SET_IS_CONNECTING = "SET_IS_CONNECTING"
const SET_IS_CONNECTED = "SET_IS_CONNECTED"
const RESET_STATE = "RESET_STATE"
const SET_DISCONNECTED = "SET_DISCONNECTED"

const reducer = (
  state: WalletState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case SET_ADDRESS:
      return { ...state, address: getAddress(action.payload) }
    case SET_BLOCK_NUMBER:
      return { ...state, blockNumber: action.payload }
    case SET_BALANCE:
      return { ...state, balance: action.payload }
    case SET_WALLET_CLIENT:
      return { ...state, walletClient: action.payload }
    case SET_IS_CONNECTING:
      return { ...state, isConnecting: action.payload }
    case SET_IS_CONNECTED:
      return { ...state, isConnected: action.payload }
    case RESET_STATE:
      return initialState
    case SET_DISCONNECTED:
      window.localStorage.removeItem(LOCAL_STORAGE_KEY_LAST_WALLET)
      return initialState
    default:
      return state
  }
}

export const WalletContext = createContext<typeof initialState>(initialState)

interface WalletProviderProps {
  children: React.ReactNode
}

const configureChain = async (walletClient: WalletClient): Promise<boolean> => {
  const publicClient = getPublicClient()
  if (!publicClient || !publicClient.chain) return false
  let error = await walletClient
    .switchChain({ id: publicClient.chain.id })
    .catch((error) => error)

  if (error instanceof SwitchChainError) {
    const toastId = toast.loading("Adding chain", {
      description: "Accept the add chain request in your wallet to connect.",
    })
    error = await walletClient
      .addChain({ chain: publicClient.chain })
      .catch((error) => error)
    toast.dismiss(toastId)
    if (error) {
      toast.warning("Failed to add chain", {
        duration: 5000,
        description: error.details,
      })
    }
  } else if (error instanceof UserRejectedRequestError) {
    toast.warning("User rejected request", {
      duration: 50000,
      className: "z-60",
      description:
        "Connect your wallet to the mev-commit chain to participate.",
    })
  } else if (error instanceof ResourceUnavailableRpcError) {
    toast.warning("Pending request", {
      duration: 5000,
      description:
        "Accept the pending request to switch connect your wallet to the mev-commit chain.",
    })
  } else if (!!error) {
    toast.warning("Unknown Error Occurred", {
      duration: 5000,
      description: "",
    })
  }

  return !error
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const web3Onboard = getOnboard()
  const router = useRouter()
  const pathname = usePathname()
  // @TODO: Use useStorage hook to store last connected wallet

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

        const isConnected = await configureChain(walletClient)
        dispatch({ type: SET_IS_CONNECTED, payload: isConnected })

        if (!lastConnectedWallet) {
          window.localStorage.setItem(
            LOCAL_STORAGE_KEY_LAST_WALLET,
            wallet?.label ?? ""
          )
        }
        if (pathname === "/") {
          router.push("/dashboard")
        }
      }
    } catch (error) {
      console.error("Error connecting wallet:", error)
    } finally {
      dispatch({ type: SET_IS_CONNECTING, payload: false })
    }
  }

  const disconnect = async () => {
    clearState()

    if (web3Onboard) {
      const [primaryWallet] = web3Onboard.state.get().wallets
      await web3Onboard.disconnectWallet({ label: primaryWallet?.label ?? "" })
      dispatch({ type: SET_DISCONNECTED })
      router.push("/")
    }
  }

  const clearState = () => {}

  useEffect(() => {
    const lastConnectedWallet = window.localStorage.getItem(
      LOCAL_STORAGE_KEY_LAST_WALLET
    )

    if (lastConnectedWallet) {
      connectWallet(lastConnectedWallet)
    }
  }, [])

  useEffect(() => {
    const wallets = web3Onboard.state.select("wallets")

    const subscription = wallets.subscribe(([wallet]) => {
      const balance =
        wallet?.accounts?.[0]?.balance?.[CHAIN.nativeCurrency.symbol]
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
      disconnect,
      dispatch,
    }),
    [state, connectWallet, disconnect]
  )

  return (
    <WalletContext.Provider value={memoizedValue}>
      {children}
    </WalletContext.Provider>
  )
}

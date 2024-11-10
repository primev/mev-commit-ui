"use client"

import React from "react"

import { useWallet } from "@/hooks/use-wallet"
import { Button } from "@/components/ui/button"

export function ConnectWallet() {
  const { connectWallet, isConnecting, address } = useWallet()

  const handleConnect = () => {
    connectWallet()
  }

  return (
    <Button
      variant="outline"
      onClick={handleConnect}
      disabled={isConnecting}
      className="h-12 w-full border border-primev py-2  text-sm shadow-[0_0_20px_rgba(var(--primev-rgb),0.5),0_0_30px_rgba(var(--primev-rgb),0.3)] transition-all duration-300 ease-in-out hover:bg-primev/10 hover:text-white sm:mt-4 sm:whitespace-nowrap sm:break-normal sm:text-sm"
    >
      {isConnecting ? "Connecting..." : "Opt-in to mev-commit"}
    </Button>
  )
}

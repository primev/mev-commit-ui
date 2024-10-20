import React from "react"

import { useWallet } from "@/hooks/use-wallet"
import { Button } from "@/components/ui/button"

export function ConnectWallet() {
  const { connectWallet, isConnecting, address } = useWallet()

  const handleConnect = () => {
    connectWallet()
  }

  if (address) {
    return (
      <Button variant="outline" disabled>
        Connected: {address.slice(0, 6)}...{address.slice(-4)}
      </Button>
    )
  }

  return (
    <Button onClick={handleConnect} disabled={isConnecting}>
      {isConnecting ? "Connecting..." : "Connect Wallet"}
    </Button>
  )
}

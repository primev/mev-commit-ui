"use client"

import React, { useEffect } from "react"

import { useAddress } from "../hooks/use-wallet"

const AccountAddress: React.FC = () => {
  const address = useAddress()

  return (
    <h2 className="flex w-min items-center bg-gradient-to-r from-[#E9252F] via-[#E97D25] to-[#E9DF25]/90 bg-clip-text text-sm font-semibold leading-none tracking-tight text-transparent saturate-[0.67] first:mt-0 md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
      <span className="leading-none">0x</span>
      {address ? (
        <span className="leading-none animate-in fade-in">
          {address.replace("0x", "")}
        </span>
      ) : (
        <span className="flex">
          <span className="animate-pulse text-muted-foreground">...</span>
        </span>
      )}
    </h2>
  )
}

export default AccountAddress

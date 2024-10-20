"use client"

import React from "react"
import MotionNumber from "motion-number"
import { formatEther } from "viem"

import { useBalance } from "../hooks/use-wallet"

const AccountBalance: React.FC = () => {
  const balance = useBalance()

  return (
    <div className="flex flex-col gap-1 text-sm font-medium leading-none">
      <span className="text-2xl font-bold">
        {/* <MotionNumber
          value={formatEther(balance)}
          format={{ notation: "compact" }}
          locales="en-US"
        /> */}
        {Number(formatEther(balance)).toFixed(5)}
        <span className="ml-1 text-xs text-muted-foreground">ETH</span>
      </span>
    </div>
  )
}

export default AccountBalance

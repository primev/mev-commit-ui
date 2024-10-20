"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import MotionNumber from "motion-number"
import { holesky } from "viem/chains"

import { useBlockNumber } from "@/hooks/use-blocknumber"

import { Button } from "./ui/button"

const AccountBlockNumber: React.FC = () => {
  const blockNumber = useBlockNumber()
  const [prevBlockNumber, setPrevBlockNumber] = useState<bigint | null>(null)

  useEffect(() => {
    if (blockNumber !== null) {
      setPrevBlockNumber(blockNumber)
    }
  }, [blockNumber])

  return (
    <Button
      asChild
      variant="linkHover2"
      className="after:bg-primev h-min p-0 px-0 text-2xl font-bold transition-colors duration-500 after:h-[1px] after:w-full"
    >
      {blockNumber ? (
        <Link
          href={`${holesky.blockExplorers.default.url}/block/${blockNumber.toString()}`}
        >
          <div className="flex">
            <MotionNumber
              value={blockNumber}
              format={{ useGrouping: false, maximumFractionDigits: 0 }}
              locales="en-US"
            />
          </div>
        </Link>
      ) : (
        <div className="text-muted-foreground">0000000</div>
      )}
    </Button>
  )
}

export default AccountBlockNumber

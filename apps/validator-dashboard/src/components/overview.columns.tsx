"use client"

import { ColumnDef } from "@tanstack/react-table"
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"
import { formatEther } from "viem"

import { TableType } from "@/lib/types"
import { timeAgo, truncateKey } from "@/lib/utils"

import { Avatar, AvatarFallback } from "./ui/avatar"
import { ValidatorStatus } from "./validator-status"

export const overviewColumns: ColumnDef<TableType.Validator>[] = [
  {
    accessorKey: "validatorBLSKey",
    header: "Validator",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar className="h-1/2 w-auto shadow-lg shadow-white/20">
          {row.original.validatorBLSKey ? (
            <Jazzicon
              svgStyles={{
                filter: "blur(2px)",
              }}
              diameter={28}
              seed={jsNumberForAddress(
                row.original.validatorBLSKey ??
                  "0x1111111111111111111111111111111111111111"
              )}
            />
          ) : (
            <AvatarFallback className="bg-transparent text-base font-semibold"></AvatarFallback>
          )}
        </Avatar>
        <div className="rounded-md bg-white/10 p-1 px-2 text-xs font-medium">
          {truncateKey(row.original.validatorBLSKey)}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "stakeAmount",
    header: "Stake Amount",
    cell: ({ row }) => formatEther(row.getValue("stakeAmount")),
  },
  {
    accessorKey: "stakedAt",
    header: "Staked At",
    cell: ({ row }) => timeAgo(parseInt(row.original.stakedAt.toString())),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <ValidatorStatus status={row.original.status} />,
  },
]

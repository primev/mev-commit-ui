"use client"

import { ColumnDef } from "@tanstack/react-table"
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"
import { formatEther } from "viem"

import { TableType } from "@/lib/types"
import { cn, formatDate, timeAgo, truncateKey } from "@/lib/utils"

import { Avatar, AvatarFallback } from "./ui/avatar"
import { ValidatorStatus } from "./validator-status"

export const podsColumns: ColumnDef<TableType.EigenPodValidator>[] = [
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <ValidatorStatus status={row.original.status} />,
  },
  {
    accessorKey: "stakeAmount",
    header: "Stake Amount",
    cell: ({ row }) => formatEther(row.original.stakeAmount),
  },
  {
    accessorKey: "stakedAt",
    header: "Staked",
    cell: ({ row }) => timeAgo(parseInt(row.original.stakedAt.toString())),
  },
  {
    accessorKey: "podOwner",
    header: "Pod Owner",
    cell: ({ row }) => (
      <div className="w-min rounded-md bg-white/10 p-1 px-2 text-xs font-medium">
        {truncateKey(row.original.podOwner, {
          prefixLength: 12,
          suffixLength: 4,
        })}
      </div>
    ),
  },
  {
    accessorKey: "podContractAddress",
    header: "Pod Contract Address",
    cell: ({ row }) => (
      <div className="w-min rounded-md bg-white/10 p-1 px-2 text-xs font-medium">
        {truncateKey(row.original.podContractAddress, {
          prefixLength: 12,
          suffixLength: 4,
        })}
      </div>
    ),
  },
]

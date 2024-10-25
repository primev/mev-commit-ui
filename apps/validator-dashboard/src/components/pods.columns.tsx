"use client"

import { ColumnDef } from "@tanstack/react-table"
import { formatEther } from "viem"

import { TableType } from "@/lib/types"
import { formatDate, truncateKey } from "@/lib/utils"

export const podsColumns: ColumnDef<TableType.EigenPodValidator>[] = [
  {
    accessorKey: "validatorBLSKey",
    header: "Validator Key",
    cell: ({ row }) => truncateKey(row.original.validatorBLSKey),
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "stakeAmount",
    header: "Stake Amount",
    cell: ({ row }) => formatEther(row.original.stakeAmount),
  },
  {
    accessorKey: "stakedAt",
    header: "Staked At",
    cell: ({ row }) => formatDate(row.original.stakedAt.toString()),
  },
  {
    accessorKey: "podOwner",
    header: "Pod Owner",
  },
  {
    accessorKey: "podContractAddress",
    header: "Pod Contract Address",
  },
]

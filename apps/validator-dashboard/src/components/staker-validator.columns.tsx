"use client"

import { ColumnDef } from "@tanstack/react-table"
import { formatEther } from "viem"

import { TableType } from "@/lib/types"
import { formatDate } from "@/lib/utils"

export const stakerValidatorColumns: ColumnDef<TableType.StakerValidator>[] = [
  {
    accessorKey: "validatorBLSKey",
    header: "Validator BLS Key",
  },
  {
    accessorKey: "stakeAmount",
    header: "Stake Amount",
    cell: ({ row }) => formatEther(row.getValue("stakeAmount")),
  },
  {
    accessorKey: "stakedAt",
    header: "Staked At",
    cell: ({ row }) => formatDate(row.getValue("stakedAt")),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => row.getValue("status"),
  },
]

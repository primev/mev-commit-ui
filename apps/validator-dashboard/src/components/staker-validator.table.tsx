"use client"

import { useState } from "react"
import { ColumnDef, PaginationState, SortingState } from "@tanstack/react-table"

import { TableType } from "@/lib/types"
import { useStakerValidators } from "@/hooks/use-staker-validators"
import { useAddress } from "@/hooks/use-wallet"

import { PaginatedTable } from "./ui/data-table.paginated"

export interface StakerValidatorDataTableProps {
  columns: ColumnDef<TableType.StakerValidator>[]
}

export default function StakerValidatorTable({
  columns,
}: StakerValidatorDataTableProps): React.ReactNode {
  const address = useAddress()

  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const {
    staker,
    validators,
    pageCount,
    loading,
    error,
    handlePaginationChange,
  } = useStakerValidators(address, pagination, sorting)

  if (error) return <p>Error: {error.message}</p>
  if (!staker && !loading) return <p>No staker found with ID: {address}</p>

  return (
    <PaginatedTable
      columns={columns}
      data={validators}
      pageCount={pageCount}
      sorting={sorting}
      setSorting={setSorting}
      pagination={pagination}
      setPagination={(newPagination) => {
        const updatedPagination =
          typeof newPagination === "function"
            ? newPagination(pagination) // Call the function with the current state if it's a function
            : newPagination // Otherwise, use it directly

        setPagination(updatedPagination)
        handlePaginationChange(updatedPagination)
      }}
      loading={loading}
    />
  )
}

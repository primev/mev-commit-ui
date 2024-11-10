"use client"

import { useState } from "react"
import { ColumnDef, PaginationState, SortingState } from "@tanstack/react-table"

import { TableType } from "@/lib/types"
import { useStakerValidatorsPaginated } from "@/hooks/use-staker-validators"
import { useAddress } from "@/hooks/use-wallet"

import { PaginatedTable } from "./ui/data-table.paginated"

export interface StakerValidatorDataTableProps {
  columns: ColumnDef<TableType.StakerValidator>[]
}

export default function StakerValidatorTable({
  columns,
}: StakerValidatorDataTableProps): React.ReactNode {
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
  } = useStakerValidatorsPaginated(pagination, sorting)

  if (error) return <p>Error: {error.message}</p>
  // if (!staker && !loading)
  //   return (
  //     <div className="flex min-h-96 flex-col items-center justify-center rounded-lg bg-white/10 bg-gradient-to-bl from-gray-900 via-purple-900/10 to-violet-800/10 p-4 shadow-lg backdrop-blur-sm">
  //       <p>No staker found with ID: {address}</p>
  //     </div>
  //   )

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

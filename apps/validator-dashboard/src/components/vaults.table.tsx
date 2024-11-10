"use client"

import { useState } from "react"
import { ColumnDef, PaginationState, SortingState } from "@tanstack/react-table"

import { TableType } from "@/lib/types"
import { useSymbioticOperatorPaginated } from "@/hooks/use-symbiotic-operator"

import { PaginatedTable } from "./ui/data-table.paginated"

export interface VaultsTableProps {
  columns: ColumnDef<TableType.SymbioticValidator>[]
}

export default function VaultsTable({
  columns,
}: VaultsTableProps): React.ReactNode {
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const { validators, pageCount, loading, error, handlePaginationChange } =
    useSymbioticOperatorPaginated(pagination, sorting)

  if (error) return <p>Error: {error.message}</p>

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

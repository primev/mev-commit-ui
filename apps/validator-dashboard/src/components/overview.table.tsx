"use client"

import { useState } from "react"
import { ColumnDef, PaginationState, SortingState } from "@tanstack/react-table"

import { TableType } from "@/lib/types"
import { useAllValidatorsPaginated } from "@/hooks/use-all-validators"
import { useStakerValidatorsPaginated } from "@/hooks/use-staker-validators"

import { PaginatedTable } from "./ui/data-table.paginated"

export interface OverviewDataTableProps {
  columns: ColumnDef<TableType.Validator>[]
}

export default function OverviewTable({
  columns,
}: OverviewDataTableProps): React.ReactNode {
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const { validators, pageCount, loading, error, handlePaginationChange } =
    useAllValidatorsPaginated(pagination, sorting)

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

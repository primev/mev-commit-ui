"use client"

import { useState } from "react"
import { ColumnDef, PaginationState, SortingState } from "@tanstack/react-table"

import { TableType } from "@/lib/types"
import { useStakerValidatorsPaginated } from "@/hooks/use-staker-validators"

import { PaginatedTable } from "./ui/data-table.paginated"

export interface StakerValidatorDataTableProps {
  columns: ColumnDef<TableType.StakerValidator>[]
}

export default function StakerValidatorTable({
  columns,
}: StakerValidatorDataTableProps): JSX.Element {
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const { validators, pageCount, loading, error } =
    useStakerValidatorsPaginated(pagination, sorting)

  if (error) return <p>Error: {error.message}</p>

  return (
    <PaginatedTable
      columns={columns}
      data={validators}
      pageCount={pageCount}
      sorting={sorting}
      setSorting={setSorting}
      pagination={pagination}
      setPagination={setPagination}
      loading={loading}
    />
  )
}

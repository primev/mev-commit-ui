import React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  OnChangeFn,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { DataTablePagination } from "./data-table.pagination-ctrl"
import { Skeleton } from "./skeleton"

interface PaginatedTableProps<TData, TValue> {
  error?: Error
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  pageCount: number
  sorting: SortingState
  setSorting: OnChangeFn<SortingState>
  pagination: PaginationState
  setPagination: OnChangeFn<PaginationState>
  loading?: boolean
}

export function PaginatedTable<TData, TValue>({
  error,
  columns,
  data,
  pageCount,
  sorting,
  setSorting,
  pagination,
  setPagination,
  loading,
}: PaginatedTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    pageCount,
    state: {
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
  })

  if (error) {
    return <p></p>
  }

  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-950/70 shadow-xl backdrop-blur-lg">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-b border-white/10">
              {headerGroup.headers.map((header) => (
                <TableHead className="p-5" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : (flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      ) as React.ReactNode)}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {loading ? (
            // Render skeleton rows when loading
            Array.from({ length: 3 }).map((_, index) => (
              <TableRow key={index}>
                {columns.map((column, columnIndex) => (
                  <TableCell
                    key={`${columnIndex}-${index}`}
                    className="text-center"
                  >
                    <Skeleton className="h-6 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="pl-5">
                    {
                      flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      ) as React.ReactNode
                    }
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="px-5 pb-5">
        <DataTablePagination table={table} />
      </div>
    </div>
  )
}

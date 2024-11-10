"use client"

import { useMemo, useState } from "react"
import { ColumnDef, PaginationState, SortingState } from "@tanstack/react-table"

import { TableType } from "@/lib/types"
import { useDelegatedEigenPodsPaginated } from "@/hooks/use-delegated-pods"
import { useEigenPodsPaginated } from "@/hooks/use-eigenpods"
import { useAddress } from "@/hooks/use-wallet"

import { PaginatedTable } from "./ui/data-table.paginated"

export interface EigenPodsTableProps {
  columns: ColumnDef<TableType.EigenPodValidator>[]
}

export default function PodsTable({
  columns,
}: EigenPodsTableProps): React.ReactNode {
  const address = useAddress()

  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const {
    eigenPods,
    pageCount: eigenPodsPageCount,
    loading: eigenPodsLoading,
    error: eigenPodsError,
    handlePaginationChange: handleEigenPodsPaginationChange,
  } = useEigenPodsPaginated(pagination, sorting)

  const {
    delegatedEigenPods,
    pageCount: delegatedPageCount,
    loading: delegatedLoading,
    error: delegatedError,
    handlePaginationChange: handleDelegatedPaginationChange,
  } = useDelegatedEigenPodsPaginated(pagination, sorting)

  const flattenedValidators = useMemo(() => {
    const regularValidators = eigenPods.flatMap((pod) =>
      pod.validators.map((validator) => ({
        ...validator,
        podOwner: pod.podOwner,
        podContractAddress: pod.podContractAddress,
        isDelegated: false,
      }))
    )

    const delegatedValidators = delegatedEigenPods.flatMap((pod) =>
      pod.validators.map((validator) => ({
        ...validator,
        podOwner: pod.podOwner,
        podContractAddress: pod.podContractAddress,
        isDelegated: true,
        // operatorId: pod.operatorId,
      }))
    )

    return [...regularValidators, ...delegatedValidators]
  }, [eigenPods, delegatedEigenPods])

  const loading = eigenPodsLoading || delegatedLoading
  const error = eigenPodsError || delegatedError
  const pageCount = Math.max(eigenPodsPageCount, delegatedPageCount)

  const handlePaginationChange = (newPagination: PaginationState) => {
    handleEigenPodsPaginationChange(newPagination)
    handleDelegatedPaginationChange(newPagination)
  }

  if (error) return <p>Error: {error.message}</p>
  // if (!eigenPods.length && !loading)
  //   return <p>No EigenPods found for address: {address}</p>

  return (
    <PaginatedTable
      columns={columns}
      data={flattenedValidators}
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

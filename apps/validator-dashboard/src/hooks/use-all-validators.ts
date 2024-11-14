import { useEffect, useState } from "react"
import { PaginationState, SortingState } from "@tanstack/react-table"
import { Address, Hex } from "viem"

import { TableType } from "../lib/types"
import { useDelegatedEigenPodsPaginated } from "./use-delegated-pods"
import { useEigenPodsPaginated } from "./use-eigenpods"
import { useStakerValidatorsPaginated } from "./use-staker-validators"
import { useSymbioticOperatorPaginated } from "./use-symbiotic-operator"
import { useAddress } from "./use-wallet"

export function useAllValidatorsPaginated(
  pagination: PaginationState,
  sorting: SortingState
) {
  const address = useAddress()
  const id = address ? address.toLowerCase() : ""

  // Execute each hook
  const {
    validators: stakerValidators,
    loading: stakerLoading,
    error: stakerError,
  } = useStakerValidatorsPaginated(pagination, sorting)

  const {
    validators: symbioticValidators,
    loading: symbioticLoading,
    error: symbioticError,
    handlePaginationChange: handleSymbioticPaginationChange,
  } = useSymbioticOperatorPaginated(pagination, sorting)

  const {
    eigenPods,
    loading: eigenPodsLoading,
    error: eigenPodsError,
    handlePaginationChange: handleEigenPodsPaginationChange,
  } = useEigenPodsPaginated(pagination, sorting)

  const {
    delegatedEigenPods,
    loading: delegatedPodsLoading,
    error: delegatedPodsError,
    handlePaginationChange: handleDelegatedPodsPaginationChange,
  } = useDelegatedEigenPodsPaginated(pagination, sorting)

  // Combine all validators into a single array
  const combinedValidators: TableType.Validator[] = [
    ...stakerValidators,
    ...symbioticValidators.map((validator) => ({
      ...validator,
      stakeAmount: BigInt(0),
      stakedAt: validator.created,
    })),
    ...eigenPods.flatMap((pod) => pod.validators),
    ...delegatedEigenPods.flatMap((pod) => pod.validators),
  ]

  // Determine loading and error states
  const loading =
    stakerLoading ||
    symbioticLoading ||
    eigenPodsLoading ||
    delegatedPodsLoading
  const error =
    stakerError || symbioticError || eigenPodsError || delegatedPodsError

  // Calculate page count based on combined validators
  const [pageCount, setPageCount] = useState(0)
  useEffect(() => {
    setPageCount(Math.ceil(combinedValidators.length / pagination.pageSize))
  }, [combinedValidators, pagination.pageSize])

  // Combined handlePaginationChange function
  const handlePaginationChange = (newPagination: PaginationState) => {
    handleSymbioticPaginationChange(newPagination)
    handleEigenPodsPaginationChange(newPagination)
    handleDelegatedPodsPaginationChange(newPagination)
  }

  return {
    validators: combinedValidators,
    pageCount,
    loading,
    error,
    handlePaginationChange, // Return the combined function
  }
}

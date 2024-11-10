"use client"

import { useEffect, useState } from "react"
import {
  OrderDirection,
  SymbioticValidator_OrderBy,
} from "@/__generated__/graphql"
import { useQuery } from "@apollo/client"
import { PaginationState, SortingState } from "@tanstack/react-table"
import { Address, Hex } from "viem"

import { gql } from "../__generated__/gql"
import { TableType } from "../lib/types"
import { useAddress } from "./use-wallet"

const SYMBIOTIC_OPERATOR_QUERY = gql(/* GraphQL */ `
  query GetAllSymbioticOperator(
    $operatorId: ID!
    $first: Int!
    $skip: Int!
    $orderBy: SymbioticValidator_orderBy
    $orderDirection: OrderDirection
  ) {
    symbioticOperator(id: $operatorId) {
      id
      operatorAddress
      created
      validators(
        first: $first
        skip: $skip
        orderBy: $orderBy
        orderDirection: $orderDirection
      ) {
        validatorBLSKey
        created
        vault {
          vaultAddress
        }
        position
        status
      }
    }
  }
`)

export const SYMBIOTIC_OPERATOR_NON_PAGINATED_QUERY = gql(/* GraphQL */ `
  query GetSymbioticOperator($operatorId: ID!) {
    symbioticOperator(id: $operatorId) {
      id
      operatorAddress
      created
      validators {
        validatorBLSKey
        created
        vault {
          vaultAddress
        }
        position
        status
      }
    }
  }
`)

export function useSymbioticOperatorPaginated(
  pagination: PaginationState,
  sorting: SortingState
) {
  const [pageCount, setPageCount] = useState(0)

  const operatorId = useAddress()

  const id = operatorId ? operatorId.toLowerCase() : ""

  const { data, loading, error, fetchMore } = useQuery(
    SYMBIOTIC_OPERATOR_QUERY,
    {
      variables: {
        operatorId: id,
        first: pagination.pageSize,
        skip: pagination.pageIndex * pagination.pageSize,
        orderBy: SymbioticValidator_OrderBy.Created, // Default order by 'created'
        orderDirection: sorting[0]?.desc
          ? OrderDirection.Desc
          : OrderDirection.Asc,
      },
      skip: !operatorId,
      notifyOnNetworkStatusChange: true,
    }
  )

  useEffect(() => {
    if (data?.symbioticOperator?.validators) {
      // This is still an estimate. For accurate count, we'd need a separate query or API endpoint
      setPageCount(
        Math.ceil(
          data.symbioticOperator.validators.length / pagination.pageSize
        )
      )
    }
  }, [data, pagination.pageSize])

  const handlePaginationChange = (newPagination: PaginationState) => {
    fetchMore({
      variables: {
        operatorId: id,
        skip: newPagination.pageIndex * newPagination.pageSize,
        first: newPagination.pageSize,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.symbioticOperator?.validators) return prev
        return {
          ...fetchMoreResult,
          symbioticOperator: {
            ...fetchMoreResult.symbioticOperator,
            id:
              fetchMoreResult.symbioticOperator.id ||
              prev?.symbioticOperator?.id ||
              "",
            validators: [
              ...(prev?.symbioticOperator?.validators || []),
              ...fetchMoreResult.symbioticOperator.validators,
            ],
          },
        }
      },
    })
  }

  // Format the data to match TableType.SymbioticValidator
  const formattedValidators: TableType.SymbioticValidator[] =
    data?.symbioticOperator?.validators?.map((validator) => ({
      id: validator.validatorBLSKey as Hex,
      validatorBLSKey: validator.validatorBLSKey as Hex,
      created: BigInt(validator.created),
      vaultAddress: validator.vault.vaultAddress as Address,
      position: validator.position,
      status: validator.status as TableType.SymbioticStatus,
    })) || []

  return {
    operator: data?.symbioticOperator,
    validators: formattedValidators,
    pageCount,
    loading,
    error,
    handlePaginationChange,
  }
}

export function useSymbioticOperator() {
  const operatorId = useAddress()

  const id = operatorId ? operatorId.toLowerCase() : ""

  const { data, loading, error } = useQuery(
    SYMBIOTIC_OPERATOR_NON_PAGINATED_QUERY,
    {
      variables: {
        operatorId: id,
      },
      skip: !operatorId,
    }
  )

  // Format the data to match TableType.SymbioticValidator
  const formattedValidators: TableType.SymbioticValidator[] =
    data?.symbioticOperator?.validators?.map((validator) => ({
      id: validator.validatorBLSKey as Hex,
      validatorBLSKey: validator.validatorBLSKey as Hex,
      created: BigInt(validator.created),
      vaultAddress: validator.vault.vaultAddress as Address,
      position: validator.position,
      status: validator.status as TableType.SymbioticStatus,
    })) || []

  return {
    operator: data?.symbioticOperator,
    validators: formattedValidators,
    loading,
    error,
  }
}

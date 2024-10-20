import { useEffect, useState } from "react"
import {
  OrderDirection,
  StakerValidator_OrderBy,
} from "@/__generated__/graphql"
import { useQuery } from "@apollo/client"
import { PaginationState, SortingState } from "@tanstack/react-table"
import { Address, Hex } from "viem"

import { gql } from "../__generated__/gql"
import { TableType } from "../lib/types"

const STAKER_QUERY = gql(/* GraphQL */ `
  query GetStaker(
    $id: ID!
    $first: Int!
    $skip: Int!
    $orderBy: StakerValidator_orderBy
    $orderDirection: OrderDirection
  ) {
    staker(id: $id) {
      id
      created
      validators(
        first: $first
        skip: $skip
        orderBy: $orderBy
        orderDirection: $orderDirection
      ) {
        id
        validatorBLSKey
        stakeAmount
        stakedAt
        status
      }
    }
  }
`)

export function useStakerValidators(
  stakerId: Address | null,
  pagination: PaginationState,
  sorting: SortingState
) {
  const [pageCount, setPageCount] = useState(0)

  const { data, loading, error, fetchMore } = useQuery(STAKER_QUERY, {
    variables: {
      id: stakerId || "",
      first: pagination.pageSize,
      skip: pagination.pageIndex * pagination.pageSize,
      orderBy: StakerValidator_OrderBy.StakedAt,
      orderDirection: sorting[0]?.desc
        ? OrderDirection.Desc
        : OrderDirection.Asc,
    },
    skip: !stakerId,
    notifyOnNetworkStatusChange: true,
  })

  useEffect(() => {
    if (data?.staker?.validators) {
      // This is still an estimate. For accurate count, we'd need a separate query or API endpoint
      setPageCount(
        Math.ceil(data.staker.validators.length / pagination.pageSize)
      )
    }
  }, [data, pagination.pageSize])

  const handlePaginationChange = (newPagination: PaginationState) => {
    fetchMore({
      variables: {
        id: stakerId,
        skip: newPagination.pageIndex * newPagination.pageSize,
        first: newPagination.pageSize,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.staker?.validators) return prev
        return {
          ...fetchMoreResult,
          staker: {
            ...fetchMoreResult.staker,
            id: fetchMoreResult.staker.id || prev?.staker?.id || "",
            validators: [
              ...(prev?.staker?.validators || []),
              ...fetchMoreResult.staker.validators,
            ],
          },
        }
      },
    })
  }

  // Format the data to match TableType.StakerValidator
  const formattedValidators: TableType.StakerValidator[] =
    data?.staker?.validators?.map((validator) => ({
      id: validator.id,
      validatorBLSKey: validator.validatorBLSKey as Hex,
      stakeAmount: BigInt(validator.stakeAmount),
      stakedAt: BigInt(validator.stakedAt),
      status: validator.status as TableType.StakerStatus,
    })) || []

  return {
    staker: data?.staker,
    validators: formattedValidators,
    pageCount,
    loading,
    error,
    handlePaginationChange,
  }
}

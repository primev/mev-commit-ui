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
import { useAddress } from "./use-wallet"

const STAKER_QUERY = gql(/* GraphQL */ `
  query GetStaker(
    $id: ID!
    $first: Int!
    $skip: Int!
    $orderBy: StakerValidator_orderBy
    $orderDirection: OrderDirection
  ) {
    account(id: $id) {
      vanillaStats {
        total
      }
    }
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

export function useStakerValidatorsPaginated(
  pagination: PaginationState,
  sorting: SortingState
) {
  console.log({ pagination, sorting })
  const address = useAddress()
  const id = address ? address.toLowerCase() : ""

  const { data, loading, error } = useQuery(STAKER_QUERY, {
    variables: {
      id,
      first: pagination.pageSize,
      skip: pagination.pageIndex * pagination.pageSize,
      orderBy:
        (sorting[0]?.id as StakerValidator_OrderBy) ||
        StakerValidator_OrderBy.StakedAt,
      orderDirection: sorting[0]?.desc
        ? OrderDirection.Desc
        : OrderDirection.Asc,
    },
    skip: !id,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  })
  console.log({ pagination, sorting, data })
  const formattedValidators: TableType.StakerValidator[] =
    data?.staker?.validators?.map((validator) => ({
      id: validator.id,
      validatorBLSKey: validator.validatorBLSKey as Hex,
      stakeAmount: BigInt(validator.stakeAmount),
      stakedAt: BigInt(validator.stakedAt),
      status: validator.status as TableType.StakerStatus,
    })) || []

  // Optional: Handle total count if available
  const totalValidators = data?.account?.vanillaStats?.total
  const pageCount = totalValidators
    ? Math.ceil(totalValidators / pagination.pageSize)
    : 0 // Or set a default value

  return {
    staker: data?.staker,
    validators: formattedValidators,
    pageCount,
    loading,
    error,
  }
}

const STAKER_NON_PAGINATED_QUERY = gql(/* GraphQL */ `
  query GetStakerNonPaginated($id: ID!) {
    staker(id: $id) {
      id
      created
      validators {
        id
        validatorBLSKey
        stakeAmount
        stakedAt
        status
      }
    }
  }
`)

export function useStakerValidators() {
  const stakerId = useAddress()

  const id = stakerId ? stakerId.toLowerCase() : ""

  const { data, loading, error } = useQuery(STAKER_NON_PAGINATED_QUERY, {
    variables: {
      id,
    },
    skip: !stakerId,
  })

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
    loading,
    error,
  }
}

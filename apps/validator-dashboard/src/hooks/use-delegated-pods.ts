import { useEffect, useState } from "react"
import { EigenPod_OrderBy, OrderDirection } from "@/__generated__/graphql"
import { useQuery } from "@apollo/client"
import { PaginationState, SortingState } from "@tanstack/react-table"
import { Address, Hex } from "viem"

import { gql } from "../__generated__/gql"
import { TableType } from "../lib/types"

const DELEGATED_EIGEN_PODS_QUERY = gql(/* GraphQL */ `
  query GetDelegatedEigenPods(
    $id: ID!
    $first: Int!
    $skip: Int!
    $orderBy: EigenPod_orderBy
    $orderDirection: OrderDirection
  ) {
    operator(id: $id) {
      id
      status
      delegatedPods(
        first: $first
        skip: $skip
        orderBy: $orderBy
        orderDirection: $orderDirection
      ) {
        id
        podOwner
        podContractAddress
        operator {
          id
        }
        restaker {
          validators {
            id
            validatorBLSKey
            stakeAmount
            stakedAt
            status
          }
        }
      }
    }
  }
`)

export function useDelegatedEigenPods(
  operatorId: Address | null,
  pagination: PaginationState,
  sorting: SortingState
) {
  const [pageCount, setPageCount] = useState(0)

  const { data, loading, error, fetchMore } = useQuery(
    DELEGATED_EIGEN_PODS_QUERY,
    {
      variables: {
        id: operatorId || "",
        first: pagination.pageSize,
        skip: pagination.pageIndex * pagination.pageSize,
        orderBy: EigenPod_OrderBy.Id,
        orderDirection: sorting[0]?.desc
          ? OrderDirection.Desc
          : OrderDirection.Asc,
      },
      skip: !operatorId,
      notifyOnNetworkStatusChange: true,
    }
  )

  useEffect(() => {
    if (data?.operator?.delegatedPods) {
      setPageCount(
        Math.ceil(data.operator.delegatedPods.length / pagination.pageSize)
      )
    }
  }, [data, pagination.pageSize])

  const handlePaginationChange = (newPagination: PaginationState) => {
    fetchMore({
      variables: {
        id: operatorId,
        skip: newPagination.pageIndex * newPagination.pageSize,
        first: newPagination.pageSize,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.operator?.delegatedPods) return prev
        return {
          ...fetchMoreResult,
          operator: {
            ...fetchMoreResult.operator,
            id: fetchMoreResult.operator.id || prev?.operator?.id || "",
            delegatedPods: [
              ...(prev?.operator?.delegatedPods || []),
              ...fetchMoreResult.operator.delegatedPods,
            ],
          },
        }
      },
    })
  }

  // Format the data to match TableType.DelegatedEigenPod
  const formattedDelegatedEigenPods: TableType.EigenPod[] =
    data?.operator?.delegatedPods?.map((pod) => ({
      id: pod.id,
      podOwner: pod.podOwner as Address,
      podContractAddress: pod.podContractAddress as Address,
      operatorId: pod.operator?.id as Address,
      validators: pod.restaker.validators.map((validator) => ({
        id: validator.id,
        validatorBLSKey: validator.validatorBLSKey as Hex,
        stakeAmount: BigInt(validator.stakeAmount),
        stakedAt: BigInt(validator.stakedAt),
        status: validator.status as TableType.RestakerStatus,
      })),
    })) || []

  return {
    operator: data?.operator,
    delegatedEigenPods: formattedDelegatedEigenPods,
    pageCount,
    loading,
    error,
    handlePaginationChange,
  }
}

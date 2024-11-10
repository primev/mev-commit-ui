import { useEffect, useState } from "react"
import { EigenPod_OrderBy, OrderDirection } from "@/__generated__/graphql"
import { useQuery } from "@apollo/client"
import { PaginationState, SortingState } from "@tanstack/react-table"
import { Address, getAddress, Hex } from "viem"

import { gql } from "../__generated__/gql"
import { TableType } from "../lib/types"
import { useAddress } from "./use-wallet"

const EIGEN_PODS_QUERY = gql(/* GraphQL */ `
  query GetEigenPods(
    $id: ID!
    $first: Int!
    $skip: Int!
    $orderBy: EigenPod_orderBy
    $orderDirection: OrderDirection
  ) {
    restaker(id: $id) {
      id
      eigenPods(
        first: $first
        skip: $skip
        orderBy: $orderBy
        orderDirection: $orderDirection
      ) {
        id
        podOwner
        podContractAddress
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

export function useEigenPodsPaginated(
  pagination: PaginationState,
  sorting: SortingState
) {
  const [pageCount, setPageCount] = useState(0)
  const address = useAddress()
  const id = address ? address.toLowerCase() : ""

  const { data, loading, error, fetchMore } = useQuery(EIGEN_PODS_QUERY, {
    variables: {
      id,
      first: pagination.pageSize,
      skip: pagination.pageIndex * pagination.pageSize,
      orderBy: EigenPod_OrderBy.Id,
      orderDirection: sorting[0]?.desc
        ? OrderDirection.Desc
        : OrderDirection.Asc,
    },
    skip: !address,
    notifyOnNetworkStatusChange: true,
  })

  useEffect(() => {
    if (data?.restaker?.eigenPods) {
      setPageCount(
        Math.ceil(data.restaker.eigenPods.length / pagination.pageSize)
      )
    }
  }, [data, pagination.pageSize])

  const handlePaginationChange = (newPagination: PaginationState) => {
    fetchMore({
      variables: {
        id,
        skip: newPagination.pageIndex * newPagination.pageSize,
        first: newPagination.pageSize,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.restaker?.eigenPods) return prev
        return {
          ...fetchMoreResult,
          restaker: {
            ...fetchMoreResult.restaker,
            id: fetchMoreResult.restaker.id || prev?.restaker?.id || "",
            eigenPods: [
              ...(prev?.restaker?.eigenPods || []),
              ...fetchMoreResult.restaker.eigenPods,
            ],
          },
        }
      },
    })
  }

  // Format the data to match TableType.EigenPod
  const formattedEigenPods: TableType.EigenPod[] =
    data?.restaker?.eigenPods?.map((pod) => ({
      id: pod.id,
      podOwner: getAddress(pod.podOwner),
      podContractAddress: getAddress(pod.podContractAddress),
      validators: pod.restaker.validators.map((validator) => ({
        id: validator.id,
        validatorBLSKey: validator.validatorBLSKey as Hex,
        stakeAmount: BigInt(validator.stakeAmount),
        stakedAt: BigInt(validator.stakedAt),
        status: validator.status as TableType.RestakerStatus,
      })),
    })) || []

  return {
    restaker: data?.restaker,
    eigenPods: formattedEigenPods,
    pageCount,
    loading,
    error,
    handlePaginationChange,
  }
}

const EIGEN_PODS_NON_PAGINATED_QUERY = gql(/* GraphQL */ `
  query GetEigenPodsNonPaginated($id: ID!) {
    restaker(id: $id) {
      id
      eigenPods {
        id
        podOwner
        podContractAddress
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

export function useEigenPods() {
  const stakerId = useAddress()
  const id = stakerId ? stakerId.toLowerCase() : ""

  const { data, loading, error } = useQuery(EIGEN_PODS_NON_PAGINATED_QUERY, {
    variables: {
      id,
    },
    skip: !stakerId,
  })

  // Format the data to match TableType.EigenPod
  const formattedEigenPods: TableType.EigenPod[] =
    data?.restaker?.eigenPods?.map((pod) => ({
      id: pod.id,
      podOwner: getAddress(pod.podOwner),
      podContractAddress: getAddress(pod.podContractAddress),
      validators: pod.restaker.validators.map((validator) => ({
        id: validator.id,
        validatorBLSKey: validator.validatorBLSKey as Hex,
        stakeAmount: BigInt(validator.stakeAmount),
        stakedAt: BigInt(validator.stakedAt),
        status: validator.status as TableType.RestakerStatus,
      })),
    })) || []

  return {
    restaker: data?.restaker,
    eigenPods: formattedEigenPods,
    loading,
    error,
  }
}

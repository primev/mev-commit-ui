// import { useEffect, useState } from "react"
// import { useQuery } from "@apollo/client"
// import { PaginationState, SortingState } from "@tanstack/react-table"
// import { Address, Hex } from "viem"

// import { gql } from "../__generated__/gql"
// import { TableType } from "../lib/types"

// const GET_RESTAKE_VALIDATORS_QUERY = gql(/* GraphQL */ `
//   query GetRestaker(
//     $address: ID!
//     $firstPods: Int
//     $skipPods: Int
//     $firstValidators: Int
//     $skipValidators: Int
//   ) {
//     restaker(id: $address) {
//       eigenPods(first: $firstPods, skip: $skipPods) {
//         id
//         podOwner
//         podContractAddress
//         restaker {
//           validators {
//             id
//             validatorBLSKey
//             stakeAmount
//             stakedAt
//             status
//           }
//         }
//       }
//     }
//   }
// `)

// export function useRestakerValidators(
//   restakerId: Address | null,
//   pagination: PaginationState,
//   sorting: SortingState
// ) {
//   const [pageCount, setPageCount] = useState(0)

//   const { data, loading, error, fetchMore } = useQuery(
//     GET_RESTAKE_VALIDATORS_QUERY,
//     {
//       variables: {
//         address: restakerId || "",
//         firstPods: pagination.pageSize,
//         skipPods: pagination.pageIndex * pagination.pageSize,
//         firstValidators: pagination.pageSize,
//         skipValidators: pagination.pageIndex * pagination.pageSize,
//         orderBy: sorting[0]?.desc ? "stakedAt_DESC" : "stakedAt_ASC", // Adjust as needed
//       },
//       skip: !restakerId,
//       notifyOnNetworkStatusChange: true,
//     }
//   )

//   useEffect(() => {
//     if (data?.restaker) {
//       // Combine validators from top-level and delegatedPods
//       const allValidators = [
//         ...(data.restaker.validators || []),
//         ...(data.restaker.eigenPods?.flatMap(
//           (pod) =>
//             pod.operator?.delegatedPods?.flatMap(
//               (delegatedPod) => delegatedPod.restaker?.validators || []
//             ) || []
//         ) || []),
//       ]

//       // This is still an estimate. For accurate count, we'd need a separate query or API endpoint
//       setPageCount(Math.ceil(allValidators.length / pagination.pageSize))
//     }
//   }, [data, pagination.pageSize])

//   const handlePaginationChange = (newPagination: PaginationState) => {
//     fetchMore({
//       variables: {
//         address: restakerId,
//         skipPods: newPagination.pageIndex * newPagination.pageSize,
//         firstPods: newPagination.pageSize,
//         skipValidators: newPagination.pageIndex * newPagination.pageSize,
//         firstValidators: newPagination.pageSize,
//       },
//       updateQuery: (prev, { fetchMoreResult }) => {
//         if (!fetchMoreResult?.restaker) return prev
//         return {
//           ...fetchMoreResult,
//           restaker: {
//             ...fetchMoreResult.restaker,
//             validators: [
//               ...(prev?.restaker?.validators || []),
//               ...fetchMoreResult.restaker.validators,
//             ],
//             eigenPods: [
//               ...(prev?.restaker?.eigenPods || []),
//               ...fetchMoreResult.restaker.eigenPods,
//             ],
//           },
//         }
//       },
//     })
//   }

//   // Format the data to match TableType.StakerValidator
//   const formattedValidators: TableType.RestakerValidator[] =
//     [
//       ...(data?.restaker?.validators || []),
//       ...(data?.restaker?.eigenPods?.flatMap(
//         (pod) =>
//           pod.operator?.delegatedPods?.flatMap(
//             (delegatedPod) => delegatedPod.restaker?.validators || []
//           ) || []
//       ) || []),
//     ].map((validator) => ({
//       validatorBLSKey: validator.validatorBLSKey as Hex,
//       stakeAmount: BigInt(validator.stakeAmount),
//       stakedAt: BigInt(validator.stakedAt),
//       status: validator.status as TableType.RestakerStatus,
//     })) || []

//   return {
//     restaker: data?.restaker,
//     validators: formattedValidators,
//     pageCount,
//     loading,
//     error,
//     handlePaginationChange,
//   }
// }

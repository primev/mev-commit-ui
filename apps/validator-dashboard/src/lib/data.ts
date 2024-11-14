import { gql } from "@apollo/client"

import client from "./apollo"

export const getMevCommitMetrics = async (): Promise<{
  totalStaked: bigint
  totalOptedIn: bigint
  totalRestaked: bigint
}> => {
  const GET_MEV_COMMIT_METRICS = gql(`
    query GetMevCommitMetrics {
      mevCommitValidators(id: "mevCommitValidators") {
        totalStaked
        totalOptedIn
        totalRestaked
      }
    }
  `)
  const { data, error } = await client.query({ query: GET_MEV_COMMIT_METRICS })

  if (error) {
    console.error(error)
  }

  console.log(data)

  return {
    totalStaked: BigInt(data.mevCommitValidators?.totalStaked ?? 0),
    totalOptedIn: BigInt(data.mevCommitValidators?.totalOptedIn ?? 0),
    totalRestaked: BigInt(data.mevCommitValidators?.totalRestaked ?? 0),
  }
}

// const STAKER_QUERY = gql(/* GraphQL */ `
//   query GetStaker(
//     $id: ID!
//     $first: Int!
//     $skip: Int!
//     $orderBy: StakerValidator_orderBy
//     $orderDirection: OrderDirection
//   ) {
//     staker(id: $id) {
//       id
//       created
//       validators(
//         first: $first
//         skip: $skip
//         orderBy: $orderBy
//         orderDirection: $orderDirection
//       ) {
//         id
//         validatorBLSKey
//         stakeAmount
//         stakedAt
//         status
//       }
//     }
//   }
// `)

// export async function getStaker(stakerId: string) {
//   const { data } = await client.query({
//     query: STAKER_QUERY,
//     variables: {
//       id: stakerId,
//       first: 10,
//       skip: 0,
//       orderBy: StakerValidator_OrderBy.StakedAt,
//       orderDirection: OrderDirection.Desc,
//     },
//   })

//   return data.staker
// }

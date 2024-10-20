import {
  OrderDirection,
  StakerValidator_OrderBy,
} from "@/__generated__/graphql"

import { gql } from "../__generated__/gql"
import client from "./apollo"

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

export async function getStaker(stakerId: string) {
  const { data } = await client.query({
    query: STAKER_QUERY,
    variables: {
      id: stakerId,
      first: 10,
      skip: 0,
      orderBy: StakerValidator_OrderBy.StakedAt,
      orderDirection: OrderDirection.Desc,
    },
  })

  return data.staker
}

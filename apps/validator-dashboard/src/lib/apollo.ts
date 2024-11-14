import { ApolloClient, InMemoryCache } from "@apollo/client"
import { offsetLimitPagination } from "@apollo/client/utilities"

import { GRAPHQL_URL } from "@/lib/constants"

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Staker: {
        fields: {
          validators: offsetLimitPagination([
            "orderBy",
            "orderDirection",
            "first",
            "skip",
          ]),
        },
      },
    },
  }),
})

export default client

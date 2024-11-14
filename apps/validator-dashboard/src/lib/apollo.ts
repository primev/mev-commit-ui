import { ApolloClient, InMemoryCache } from "@apollo/client"

import { GRAPHQL_URL } from "@/lib/constants"

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          stakerValidators: {
            keyArgs: ["orderBy", "orderDirection"],
            merge(existing, incoming, { args }) {
              const merged = existing ? existing.edges.slice(0) : []
              const after = args?.after
              if (incoming) {
                if (after) {
                  // Append the incoming edges
                  merged.push(...incoming.edges)
                } else {
                  // If it's a new query (no after cursor), replace everything
                  return incoming
                }
              }
              return {
                ...incoming,
                edges: merged,
              }
            },
          },
        },
      },
    },
  }),
})

export default client

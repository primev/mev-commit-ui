import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://api.goldsky.com/api/public/project_cm1jo0v0u5zrv01vghcrm1ka1/subgraphs/mev-commit-validators/pr-1/gn",
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

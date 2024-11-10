import { ApolloClient, InMemoryCache } from "@apollo/client"

const testSymbiotic =
  "https://api.goldsky.com/api/public/project_cm1jo0v0u5zrv01vghcrm1ka1/subgraphs/mev-commit-validators/test-symbiotic-v6/gn"

const prod =
  "https://api.goldsky.com/api/public/project_cm1jo0v0u5zrv01vghcrm1ka1/subgraphs/mev-commit-validators/test-symbiotic-v6-full/gn"

const client = new ApolloClient({
  uri: prod,
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

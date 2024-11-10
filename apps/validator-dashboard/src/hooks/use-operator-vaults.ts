import { gql, TypedDocumentNode, useQuery } from "@apollo/client"

import { Vault } from "@/lib/types"
import { useAddress } from "@/hooks/use-wallet"

type VaultsByOperatorAndNetworkData = {
  operatorNetwork: {
    operator: {
      vaults: { vault: Vault }[]
    }
  }
}

type VaultsByOperatorAndNetworkVars = {
  operatorNetworkId: `${string}-${string}`
}

const GET_VAULTS_BY_OPERATOR_AND_NETWORK: TypedDocumentNode<
  VaultsByOperatorAndNetworkData,
  VaultsByOperatorAndNetworkVars
> = gql`
  query GetVaultsByOperatorAndNetwork($operatorNetworkId: ID!) {
    operatorNetwork(id: $operatorNetworkId) {
      operator {
        id
        vaults {
          vault {
            id
            vaultAddress
            created
          }
        }
      }
    }
  }
`

export function useOperatorVaults() {
  const address = useAddress()
  const { loading, error, data } = useQuery(
    GET_VAULTS_BY_OPERATOR_AND_NETWORK,
    {
      variables: {
        operatorNetworkId: `${address?.toLowerCase()}-0x4535bd6ff24860b5fd2889857651a85fb3d3c6b1`,
      },
    }
  )

  const vaults =
    data?.operatorNetwork?.operator?.vaults.map((v) => v.vault) || []

  return { loading, error, vaults }
}

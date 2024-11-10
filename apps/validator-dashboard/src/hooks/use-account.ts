import { useDelegatedEigenPods } from "./use-delegated-pods"
import { useEigenPods } from "./use-eigenpods"
import { useOperatorVaults } from "./use-operator-vaults"
import { useAddress } from "./use-wallet"

export function useAccount() {
  const { eigenPods } = useEigenPods()
  const { delegatedEigenPods } = useDelegatedEigenPods()
  const { vaults } = useOperatorVaults()

  return {
    isPodOwner: eigenPods.length > 0,
    isEigenPodOperator: delegatedEigenPods.length > 0,
    isSymbioticOperator: vaults.length > 0,
  }
}

"use client"

import { motion } from "framer-motion"
import { Binary, Lock } from "lucide-react"
import { formatEther } from "viem"

import { useDelegatedEigenPods } from "@/hooks/use-delegated-pods"
import { useEigenPods } from "@/hooks/use-eigenpods"
import { useOperatorVaults } from "@/hooks/use-operator-vaults"
import { useStakerValidators } from "@/hooks/use-staker-validators"
import { useSymbioticOperator } from "@/hooks/use-symbiotic-operator"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function ValidatorStats(): React.ReactNode {
  const {
    operator,
    validators: symbioticValidators,
    loading,
    error,
  } = useSymbioticOperator()
  const { validators: stakerValidators } = useStakerValidators()
  const { eigenPods } = useEigenPods()
  const { delegatedEigenPods } = useDelegatedEigenPods()
  const { vaults } = useOperatorVaults()

  const totalStaked = [
    ...stakerValidators,
    ...eigenPods.flatMap((pod) => pod.validators),
    ...delegatedEigenPods.flatMap((pod) => pod.validators),
  ].reduce((acc, validator) => {
    return acc + BigInt(validator.stakeAmount)
  }, BigInt(0))

  return (
    <div className="flex w-full gap-4 py-4 text-left">
      <Card className="min-w-48 border-none bg-black/50 p-3  backdrop-blur-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 pt-0">
          <CardTitle className="px-0 text-lg font-bold">Security</CardTitle>
          <Lock strokeWidth={1.5} className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col gap-1 p-3 pb-0">
          <div className="flex items-end gap-2 text-2xl font-semibold">
            <motion.div>
              {totalStaked ? formatEther(totalStaked) : 0}
            </motion.div>
            <span className="mb-0.5 text-sm font-semibold tracking-wide text-muted-foreground/60">
              ETH
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className="h-full rounded-lg border-none bg-black/50 p-3 backdrop-blur-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 pt-0">
          <CardTitle className="p-0 text-xl font-bold">Validators</CardTitle>
          <Binary
            strokeWidth={1.5}
            className="h-[22px] w-[22px] text-muted-foreground"
          />
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-6 p-3 pb-0">
          <div className="flex flex-col items-start gap-1">
            <div className="text-2xl font-semibold">
              <motion.div>{stakerValidators.length}</motion.div>
            </div>
            <div className="text-sm text-muted-foreground">Stakers</div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="text-2xl font-semibold">
              <motion.div>{vaults.length}</motion.div>
            </div>
            <div className="text-sm text-muted-foreground">Vaults</div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="text-2xl font-semibold">
              <motion.div>
                {delegatedEigenPods.length + eigenPods.length}
              </motion.div>
            </div>
            <div className="text-sm text-muted-foreground">Pods</div>
          </div>
          {/* 
          <div className="flex flex-col items-start gap-1">
            <div className="text-2xl font-semibold">
              <motion.div>{totalRestakedRounded}</motion.div>
            </div>
            <div className="text-sm text-muted-foreground">Restaked</div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="text-2xl font-semibold">
              <motion.div>{totalRestakedRounded}</motion.div>
            </div>
            <div className="text-sm text-muted-foreground">Restaked</div>
          </div> */}
        </CardContent>
      </Card>
    </div>
  )
}

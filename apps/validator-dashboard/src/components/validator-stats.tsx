import { motion } from "framer-motion"
import { Binary } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function ValidatorStats(): React.ReactNode {
  return (
    <div className="flex w-full gap-4 py-4 text-left">
      <Card className="min-w-48 border-none bg-gray-600/10 p-3  backdrop-blur-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 pt-0">
          <CardTitle className="px-0 text-lg font-bold">Security</CardTitle>
          <Lock strokeWidth={1.5} className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col gap-1 p-3 pb-0">
          <div className="flex items-end gap-2 text-2xl font-semibold">
            <motion.div>{totalStakedRounded}</motion.div>
            <span className="mb-0.5 text-sm font-semibold tracking-wide text-muted-foreground/60">
              ETH
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className="h-full rounded-lg border-none bg-gray-600/10 p-3 backdrop-blur-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 pt-0">
          <CardTitle className="p-0 text-xl font-bold">Keys</CardTitle>
          <Binary
            strokeWidth={1.5}
            className="h-[22px] w-[22px] text-muted-foreground"
          />
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-6 p-3 pb-0">
          <div className="flex flex-col items-start gap-1">
            <div className="text-2xl font-semibold">
              <motion.div>{totalKeysRounded}</motion.div>
            </div>
            <div className="text-sm text-muted-foreground">Total</div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="text-2xl font-semibold">
              <motion.div>{stakedKeysRounded}</motion.div>
            </div>
            <div className="text-sm text-muted-foreground">Staked</div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="text-2xl font-semibold">
              <motion.div>{totalRestakedRounded}</motion.div>
            </div>
            <div className="text-sm text-muted-foreground">Restaked</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

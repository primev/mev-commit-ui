import { Lock, Users } from "lucide-react"
import { formatEther } from "viem/utils"

import { getMevCommitMetrics } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const revalidate = 0

export async function MevCommitMetrics(): Promise<JSX.Element> {
  const { totalStaked, totalOptedIn, totalRestaked } =
    await getMevCommitMetrics()

  return (
    <div className="flex h-min w-full flex-col justify-center gap-4 text-left sm:flex-row sm:gap-8">
      <Card className="lg:min-w-60">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="p-0 text-sm font-medium">
            Total Security
          </CardTitle>
          <Lock strokeWidth={1.5} className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <div className="flex items-end gap-2 text-2xl font-bold sm:text-4xl">
            {formatEther(totalStaked + totalRestaked)}
            <span className="mb-0.5 text-sm font-medium tracking-tight text-muted-foreground">
              ETH
            </span>
          </div>
        </CardContent>
      </Card>
      <Card className="lg:min-w-60">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="p-0 text-sm font-medium">
            Validators Opted-In
          </CardTitle>
          <Users strokeWidth={1.5} className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <div className="flex items-end gap-2 text-2xl font-bold sm:text-4xl">
            {totalOptedIn.toString()}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

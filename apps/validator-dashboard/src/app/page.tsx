import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ConnectWallet } from "@/components/connect-wallet"
import Ecosystem from "@/components/ecosystem"
// import Ecosystem from "@/components/ecosystem"
import { Icons } from "@/components/icons"
import { MevCommitMetrics } from "@/components/mev-commit-metrics"

// import { TypographyLead } from "@/components/typography/lead"

// import { ValidatorStats } from "@/components/validator-stats"

export default function Home(): React.ReactElement {
  return (
    <main className="flex h-screen flex-col justify-between gap-4 sm:gap-24">
      <div className="container flex flex-col items-center gap-4 pt-4 text-center sm:pt-12 lg:pt-20 xl:w-1/2">
        <div className="flex flex-col gap-2 text-left">
          <p className=" space-y-2 text-2xl font-semibold text-white/90 sm:text-5xl md:text-6xl lg:text-5xl">
            mev-commit
            {/* <Separator className="glowing-border relative mt-4 h-1.5  w-full rounded-none bg-gradient-to-r from-red-600 via-blue-500 to-violet-600" /> */}
          </p>
          <h1 className="text-2xl font-bold sm:text-5xl md:text-6xl lg:text-6xl">
            Validator Registry
          </h1>
          <div className="flex items-center justify-between ">
            <div className="group  flex items-center gap-1 font-bold">
              <div>By</div>
              <Button
                variant="linkHover2"
                size="sm"
                className="px-0 after:h-[2px] after:w-full after:bg-primev/90 after:shadow-[0_0_2px_#FF6D05,inset_0_0_2px_#FF6D05,0_0_5px_#FF6D05,0_0_15px_#FF6D05,0_0_30px_#FF6D05]"
              >
                <Link
                  href="https://primev.xyz"
                  target="_blank"
                  className="h-full"
                >
                  <Icons.primev className="w-16 transition-transform group-hover:-translate-y-1 " />
                </Link>
              </Button>
              <ArrowUpRight
                strokeWidth={2}
                className="mb-3 h-4 w-4 scale-0 transition-transform group-hover:scale-100"
              />
            </div>
            <div className="text-sm text-muted-foreground">Holesky Testnet</div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-2 ">
          <div className="w-4/5 sm:my-6 sm:w-full">
            <MevCommitMetrics />
          </div>
          <ConnectWallet />
          <div className="flex w-2/3 flex-col gap-2 text-xs sm:text-sm">
            <div>
              connect wallet and stake to passively opt-in to mev-commit
            </div>
          </div>
        </div>
      </div>
      <Ecosystem />
    </main>
  )
}

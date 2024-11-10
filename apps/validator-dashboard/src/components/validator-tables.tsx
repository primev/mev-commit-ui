import { Suspense } from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { overviewColumns } from "./overview.columns"
import OverviewTable from "./overview.table"
import { podsColumns } from "./pods.columns"
import PodsTable from "./pods.table"
import { stakerValidatorColumns } from "./staker-validator.columns"
import StakerValidatorTable from "./staker-validator.table"
import { ScrollArea } from "./ui/scroll-area"
import { vaultsColumns } from "./vaults.columns"
import VaultsTable from "./vaults.table"

export default function ValidatorTables(): React.ReactNode {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className=" mb-8 flex w-full justify-start space-x-8 bg-transparent">
        <TabsTrigger
          value="overview"
          className="bg-transparent text-gray-400 hover:text-gray-200 data-[state=active]:border-none data-[state=active]:bg-transparent data-[state=active]:text-gray-100"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="validators"
          className="bg-transparent text-gray-400 hover:text-gray-200 data-[state=active]:border-none data-[state=active]:bg-transparent data-[state=active]:text-gray-100"
        >
          Validators
        </TabsTrigger>
        <TabsTrigger
          value="pods"
          className="bg-transparent text-gray-400 hover:text-gray-200 data-[state=active]:border-none data-[state=active]:bg-transparent data-[state=active]:text-gray-100"
        >
          Pods
        </TabsTrigger>
        <TabsTrigger
          value="vaults"
          className="bg-transparent text-gray-400 hover:text-gray-200 data-[state=active]:border-none data-[state=active]:bg-transparent data-[state=active]:text-gray-100"
        >
          Vaults
        </TabsTrigger>
      </TabsList>
      <ScrollArea className="h-[60vh] rounded-lg">
        <TabsContent value="overview" className="">
          <Suspense fallback={<div>Loading...</div>}>
            <OverviewTable columns={overviewColumns} />
          </Suspense>
        </TabsContent>
        <TabsContent value="validators">
          <Suspense fallback={<div>Loading...</div>}>
            <StakerValidatorTable columns={stakerValidatorColumns} />
          </Suspense>
        </TabsContent>
        <TabsContent value="pods">
          <Suspense fallback={<div>Loading...</div>}>
            <PodsTable columns={podsColumns} />
          </Suspense>
        </TabsContent>
        <TabsContent value="vaults">
          <Suspense fallback={<div>Loading...</div>}>
            <VaultsTable columns={vaultsColumns} />
          </Suspense>
        </TabsContent>
      </ScrollArea>
    </Tabs>
  )
}

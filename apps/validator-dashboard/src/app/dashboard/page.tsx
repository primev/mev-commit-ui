import { Suspense } from "react"

import { Account } from "@/components/account"
import { podsColumns } from "@/components/pods.columns"
import PodsTable from "@/components/pods.table"
import { stakerValidatorColumns } from "@/components/staker-validator.columns"
import StakerValidatorTable from "@/components/staker-validator.table"

export default function Dashboard(): JSX.Element {
  return (
    <main className=" sm:grid-cols-[200px_1fr] xl:grid-cols-[270px_1fr]">
      <Account />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <StakerValidatorTable columns={stakerValidatorColumns} />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <PodsTable columns={podsColumns} />
        </Suspense>
      </div>
    </main>
  )
}

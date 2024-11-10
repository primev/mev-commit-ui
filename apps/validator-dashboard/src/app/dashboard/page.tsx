import { Account } from "@/components/account"
import ValidatorStats from "@/components/validator-stats"
import ValidatorTables from "@/components/validator-tables"

export default function Dashboard(): JSX.Element {
  return (
    <main className="w-full">
      <div className=" mx-auto flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">Validator Dashboard</h1>
        <div className=" flex w-full flex-row items-center justify-between gap-3">
          <Account />
          <ValidatorStats />
        </div>
      </div>
      <ValidatorTables />
    </main>
  )
}

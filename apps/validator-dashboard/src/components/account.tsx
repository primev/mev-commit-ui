import * as React from "react"

import AccountAddress from "./account.address"
import AccountBalance from "./account.balance"
import AccountBlockNumber from "./account.blocknumber"

export function Account() {
  return (
    <div className=" sticky top-0 z-10 w-full space-y-4 border-b bg-black/50 p-12  text-left backdrop-blur-xl">
      <AccountAddress />
      <div className="flex items-center gap-8">
        <div className="flex flex-col gap-1 text-sm font-medium leading-none">
          <AccountBalance />
          Balance
        </div>

        <div className="flex flex-col gap-1 text-sm font-medium leading-none">
          <AccountBlockNumber />
          Block
        </div>
      </div>
    </div>
  )
}

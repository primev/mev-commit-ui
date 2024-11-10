import React from "react"

import { Icons } from "@/components/icons"

const Ecosystem = () => {
  return (
    <div className="flex  h-full flex-col items-center space-y-4 sm:space-y-12">
      <h1 className="text-center text-2xl font-bold xl:text-3xl">Ecosystem</h1>
      <div className="grid w-3/4 grid-cols-2 justify-center gap-4 sm:grid-cols-4 md:gap-8 xl:w-1/2">
        <div className="flex items-center justify-center">
          <Icons.obol className=" w-24 fill-muted-foreground xl:w-32 " />
        </div>
        <div className="flex items-center justify-center">
          <Icons.eigenlayer className="w-24 fill-muted-foreground xl:w-32" />
        </div>
        <div className="flex items-center justify-center">
          <Icons.symbiotic className="w-24 fill-muted-foreground xl:w-32 " />
        </div>
        <div className="flex items-center justify-center">
          <Icons.mellow className=" w-24 fill-muted-foreground xl:w-32" />
        </div>
      </div>
    </div>
  )
}

export default Ecosystem

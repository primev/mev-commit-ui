import { createConfig, http } from "wagmi"

import { CHAIN } from "./constants"

export const config = createConfig({
  chains: [CHAIN],

  transports: {
    [CHAIN.id]: http(),
  },
})

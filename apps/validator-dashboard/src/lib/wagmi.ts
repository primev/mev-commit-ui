import { Config, createConfig, http } from "wagmi"

import { CHAIN } from "./constants"

export const config: Config = createConfig({
  chains: [CHAIN],
  transports: {
    1: http(),
    17000: http(),
  },
})

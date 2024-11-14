import { createPublicClient, http, PublicClient, webSocket } from "viem"

import { CHAIN } from "./constants"

let publicClient: PublicClient
let wsPublicClient: PublicClient

export const getPublicClient = () => {
  if (!publicClient) {
    publicClient = createPublicClient({
      chain: CHAIN,
      transport: http(),
      // "https://virtual.holesky.rpc.tenderly.co/4d21c4d6-57b7-4f7a-96f2-845e32f0d4f2"
      // `https://eth-holesky.g.alchemy.com/v2/${ALCHEMY_API_KEY}`
    })
  }
  return publicClient
}

export const getWsPublicClient = () => {
  if (!wsPublicClient) {
    wsPublicClient = createPublicClient({
      chain: CHAIN,
      transport: webSocket(),
      // `wss://eth-holesky.g.alchemy.com/v2/${ALCHEMY_API_KEY}`
    })
  }
  return wsPublicClient
}

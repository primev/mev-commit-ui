import { createPublicClient, http, PublicClient, webSocket } from "viem"

import { ALCHEMY_API_KEY, CHAIN } from "./constants"

let publicClient: PublicClient
let wsPublicClient: PublicClient

export const getPublicClient = () => {
  if (!publicClient) {
    publicClient = createPublicClient({
      chain: CHAIN,
      transport: http(
        `https://eth-holesky.g.alchemy.com/v2/${ALCHEMY_API_KEY}`
      ),
    })
  }
  return publicClient
}

export const getWsPublicClient = () => {
  if (!wsPublicClient) {
    wsPublicClient = createPublicClient({
      chain: CHAIN,
      transport: webSocket(
        `wss://eth-holesky.g.alchemy.com/v2/${ALCHEMY_API_KEY}`
      ),
    })
  }
  return wsPublicClient
}

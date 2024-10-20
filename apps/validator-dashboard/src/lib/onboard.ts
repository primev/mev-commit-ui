import type { OnboardAPI } from "@web3-onboard/core"
import injectedModule from "@web3-onboard/injected-wallets"
import { init } from "@web3-onboard/react"
import wagmi from "@web3-onboard/wagmi"
import { holesky } from "viem/chains"

const anvilTestnet = {
  id: 31337,
  token: "AVI",
  label: "Anvil Testnet",
  rpcUrl: `http://localhost:8545`,
}

const holeskyChain = {
  id: holesky.id,
  token: holesky.nativeCurrency.symbol,
  label: holesky.name,
  rpcUrl: holesky.rpcUrls.default.http[0],
  blockExplorerUrl: holesky.blockExplorers.default.url,
}

const wallets = [injectedModule()]

let web3Onboard: OnboardAPI

export const getOnboard = (): OnboardAPI => {
  if (!web3Onboard) {
    web3Onboard = init({
      wagmi,
      wallets,
      chains: [holeskyChain],
      appMetadata: {
        name: "mev-commit validatory registry",
        icon: primevIcon,
        description: "mev-commit validatory registry",
      },
      accountCenter: {
        desktop: {
          enabled: false,
        },
        mobile: {
          enabled: false,
        },
      },
      theme: "system",
    })
  }
  return web3Onboard
}

const primevIcon = `
  <svg width="100%" height="100%" viewBox="0 0 558 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M66.01 8.98999C60.16 3.28999 52.1 0.440002 41.82 0.440002H0.0999756V94.83H22.59V63.6H41.82C52.1 63.6 60.16 60.78 66.01 55.14C71.85 49.49 74.78 41.81 74.78 32.1C74.78 22.39 71.85 14.68 66.01 8.98999ZM39.42 44.03H22.59V20.02H39.42C47.62 20.02 51.73 24.04 51.73 32.09C51.73 40.14 47.62 44.03 39.42 44.03Z" fill="white"/>
<path d="M154.42 59.16C160.44 57.13 164.97 53.66 167.99 48.75C171.01 43.85 172.52 38.11 172.52 31.54C172.52 21.92 169.6 14.33 163.75 8.78C157.91 3.23 149.85 0.440002 139.57 0.440002H97.85V94.83H120.34V62.77H130.94L149.75 94.83H175.92L154.42 59.16ZM136.88 43.2H120.33V20.02H137.16C145.36 20.02 149.45 23.85 149.45 31.54C149.45 39.23 145.26 43.2 136.87 43.2H136.88Z" fill="white"/>
<path d="M197.69 0.440002V94.83H220.18V0.440002H197.69Z" fill="white"/>
<path d="M316.21 0.440002L296.98 58.18H296.7L275.91 0.440002H246.06V94.83H267.99V39.86H268.27L287.37 94.83H303.64L323.43 39.86H323.71V94.83H346.21V0.440002H316.22H316.21Z" fill="white"/>
<path d="M436.58 0.140015H370.28V20.92H436.58V0.140015Z" fill="white"/>
<path d="M436.58 37.25H370.28V58.03H436.58V37.25Z" fill="white"/>
<path d="M436.58 74.35H370.28V95.13H436.58V74.35Z" fill="white"/>
<path d="M460.32 0.440002L496.69 94.83H519.94L486.05 0.440002H460.32Z" fill="#FBFDFC"/>
<path d="M532.8 0.440002L512.52 56.79H536.27L557.79 0.440002H532.8Z" fill="#E97D25"/>
</svg>

  `

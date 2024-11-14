export type SiteConfig = {
  name: string
  author: string
  description: string
  keywords: Array<string>
  url: {
    base: string
    author: string
  }
  links: {
    github: string
  }
  ogImage: string
}

export type MevCommitConfig = {
  chain: "mainnet" | "holesky" | "anvil"
  vanillaRegistryAddress: Address
  middlewareAddress: Address
  avsV3Address: Address
}

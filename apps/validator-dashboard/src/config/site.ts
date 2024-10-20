import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Validator Dashboard",
  author: "primev",
  description: "A dashboard for validators on the Primev network",
  keywords: ["Primev", "mev-commit", "ethereum", "mev", "validator"],
  url: {
    base: `https://${env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`,
    author: "",
  },
  links: {
    github:
      "https://github.com/primev/mev-commit-ui/tree/main/apps/validator-dashboard",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}

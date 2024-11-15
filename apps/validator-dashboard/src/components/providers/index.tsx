"use client"

import { ReactNode } from "react"
import { ApolloProvider } from "@apollo/client"
import { WagmiProvider } from "wagmi"

import client from "@/lib/apollo"
import { config } from "@/lib/wagmi"

import { ConnectDialogProvider } from "./connect-dialog-provider"
import { ThemeProvider } from "./theme-provider"
import { WalletProvider } from "./wallet-provider"

export const Providers: React.FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
  >
    <ApolloProvider client={client}>
      <WagmiProvider config={config}>
        <ConnectDialogProvider>
          <WalletProvider>{children}</WalletProvider>
        </ConnectDialogProvider>
      </WagmiProvider>
    </ApolloProvider>
  </ThemeProvider>
)

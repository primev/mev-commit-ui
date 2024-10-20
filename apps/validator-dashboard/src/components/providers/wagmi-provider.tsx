import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiProvider as WagmiProviderWagmi } from "wagmi"

import { config } from "@/lib/wagmi"

const queryClient = new QueryClient()

export const WagmiProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <WagmiProviderWagmi config={config}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </WagmiProviderWagmi>
)

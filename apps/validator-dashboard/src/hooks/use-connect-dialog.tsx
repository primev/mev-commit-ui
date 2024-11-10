import { useContext } from "react"

import {
  ConnectDialogContext,
  ConnectDialogContextType,
} from "@/components/providers/connect-dialog-provider"

// Custom hook to use the ConnectDialogContext
export const useConnectDialog = (): ConnectDialogContextType => {
  const context = useContext(ConnectDialogContext)
  if (!context) {
    throw new Error(
      "useConnectDialog must be used within a ConnectDialogProvider"
    )
  }
  return context
}

import React, { createContext, ReactNode, useContext, useState } from "react"

import ConnectDialog from "../connect-dialog" // Import the ConnectDialog component

// Define the context type
export interface ConnectDialogContextType {
  isOpen: boolean
  setOpen: (open: boolean) => void
}

// Create the context
export const ConnectDialogContext = createContext<
  ConnectDialogContextType | undefined
>(undefined)

// Provider component
export const ConnectDialogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const setOpen = (open: boolean) => {
    setIsOpen(open)
  }

  return (
    <ConnectDialogContext.Provider value={{ isOpen, setOpen }}>
      {children}
      {/* <ConnectDialog isOpen={isOpen} onOpenChange={setOpen} /> */}
    </ConnectDialogContext.Provider>
  )
}

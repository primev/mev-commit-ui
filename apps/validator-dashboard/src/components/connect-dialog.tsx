import React from "react"
import { motion } from "framer-motion"
import { Loader } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

interface ConnectDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const ConnectDialog: React.FC<ConnectDialogProps> = ({
  isOpen,
  onOpenChange,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="z-0 h-40">
        <DialogHeader className="flex flex-row items-center justify-center gap-4 space-y-0">
          <Loader
            className="h-5 w-5 animate-spin stroke-primev"
            strokeWidth={1.5}
          />
          <DialogTitle className="m-0">Connecting to mev-commit...</DialogTitle>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.2 }}
        >
          <DialogDescription className="flex flex-col items-center justify-center gap-2 text-center text-xs">
            <span className="font-bold">Taking longer than usual?</span>
            <span>Check your wallet for any pending requests.</span>
          </DialogDescription>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}

export default ConnectDialog

import { cn } from "@/lib/utils"

import { Badge } from "./ui/badge"

interface ValidatorStatusProps {
  status: string
}

const statusStyles: Record<string, string> = {
  Staked: "bg-green-500/10 text-green-600 hover:bg-green-500/10",
  Registered: "bg-green-500/10 text-green-600 hover:bg-green-500/10",
  Deregistered: "bg-black/10 text-muted-foreground hover:bg-black/10",
  // Add more statuses and their styles as needed
}

export const ValidatorStatus: React.FC<ValidatorStatusProps> = ({ status }) => {
  return (
    <Badge className={cn("select-none bg-white/10", statusStyles[status])}>
      {status}
    </Badge>
  )
}

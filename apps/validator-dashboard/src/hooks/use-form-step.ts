import { useContext } from "react"

import { FormStepContext } from "@/components/providers/form-step-provider"

export function useFormStep() {
  const context = useContext(FormStepContext)
  if (context === undefined) {
    throw new Error("useFormStep must be used within a FormStepProvider")
  }
  return context
}

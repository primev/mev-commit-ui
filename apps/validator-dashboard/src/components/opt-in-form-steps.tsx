import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { UseFormReturn } from "react-hook-form"

import { useFormStep } from "@/hooks/use-form-step"

import { OptInFormData } from "./opt-in.form"
import { FormStep } from "./providers/form-step-provider"

const steps = {
  [FormStep.SelectProtocol]: {
    value: "protocol",
    label: "Protocol",
    description: "Select the protocol you want to opt-in with.",
  },
  [FormStep.InputStake]: {
    value: "stakeAmount",
    label: "Stake Amount",
    description: "Enter the amount you want to stake.",
  },
  [FormStep.ImportKeys]: {
    value: "validatorKeys",
    label: "Validator Keys",
    description: "Enter your validator keys.",
  },
  [FormStep.Register]: {
    value: "register",
    label: "Register",
    description: "Register your validator keys.",
  },
}

export function FormSteps({ form }: { form: UseFormReturn<OptInFormData> }) {
  const { currentStep } = useFormStep()

  return (
    <div className="flex w-2/3 flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {steps[currentStep].label}
        </h4>
        <p className="text-sm">{steps[currentStep].description}</p>
      </div>
    </div>
  )
}

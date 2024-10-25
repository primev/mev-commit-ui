import React, { ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CircleSlash, Info, Loader, Loader2, Terminal } from "lucide-react"
import { UseFormReturn } from "react-hook-form"

import { cn } from "@/lib/utils"
import { useFormStep } from "@/hooks/use-form-step"

import { IconKeys, IconSelector } from "./icons"
import { OptInFormData } from "./opt-in.form"
import { FormStep } from "./providers/form-step-provider"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const ValidatorKeysBody = ({
  form,
}: {
  form: UseFormReturn<OptInFormData>
}) => (
  <Alert className="w-10/12">
    <Info className="h-4 w-4" />
    <AlertDescription className="text-xs text-muted-foreground">
      The list should be formatted as comma-separated or newline-delimited
      entries, with each entry being a 64-byte (98-character) BLS hexadecimal
      public key.
    </AlertDescription>
  </Alert>
)

const RegisterBody = ({ form }: { form: UseFormReturn<OptInFormData> }) => {
  const protocol = form.getValues("protocol")
  const keys = form.getValues("validatorKeys")
  const stakeAmount = form.getValues("stakeAmount")

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative flex flex-col gap-2  overflow-hidden rounded-md bg-black/30 p-4 backdrop-blur-sm before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-blue-500/20 before:via-purple-500/20 before:to-pink-500/20 before:opacity-80">
          {/* <IconSelector
            icon={protocol as IconKeys}
            className="h-12 w-12 fill-muted-foreground"
          /> */}
          <h3 className="text-sm font-medium text-muted-foreground">
            Protocol
          </h3>
          <p className="text-xl uppercase text-white">
            {protocol || "Not selected"}
          </p>
        </div>

        <div className="relative flex flex-col gap-2  overflow-hidden rounded-md bg-black/30 p-4 backdrop-blur-sm before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-blue-500/20 before:via-purple-500/20 before:to-pink-500/20 before:opacity-80">
          {/* <IconSelector
            icon={protocol as IconKeys}
            className="h-12 w-12 fill-muted-foreground"
          /> */}
          <h3 className="text-sm font-medium text-muted-foreground">
            Validators
          </h3>
          <p className="text-xl uppercase text-white">
            {keys ? keys.length : 0}
          </p>
        </div>
      </div>

      {stakeAmount && (
        <p className="text-sm text-muted-foreground">
          <strong>Stake Amount:</strong> {stakeAmount}
        </p>
      )}
    </div>
  )
}

const protocolDescriptions: Record<string, string> = {
  vanilla:
    "Opt in via staking ETH directly to the mev-commit contract for your validator keys. This method requires ETH to be staked in the validator registry contract.",
  eigenlayer:
    "Opt in as natively restaked validators using Eigenlayer as an Operator or an Eigenpod owner. This method restakes ETH for mev-commit and does not require additional ETH to be staked.",
  symbiotic:
    "Opt in validators to mev-commit as an Operator on behalf of a Symbiotic Vault. This method restakes the tokens in a Symbiotic vault for mev-commit.",
}

const ProtocolBody = ({ form }: { form: UseFormReturn<OptInFormData> }) => {
  const protocol = form.watch("protocol")

  const icon = {
    vanilla: "ethereum",
    eigenlayer: "eigenlayerLockup",
    symbiotic: "symbiotic",
  }[protocol] as IconKeys

  const iconClassName = {
    vanilla: " fill-muted-foreground",
    eigenlayer: "w-48 fill-muted-foreground",
    symbiotic: "w-48",
  }[protocol]

  return (
    <AnimatePresence mode="wait">
      {protocol && (
        <motion.div
          key={protocol} // Ensure a unique key for each protocol change
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }} // Adjust the duration as needed
        >
          <Card className="border-none">
            <CardHeader className="space-y-3">
              <IconSelector
                icon={icon}
                className={cn("h-auto w-48", iconClassName)}
              />
              <CardTitle className="text-sm capitalize">{protocol}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {protocolDescriptions[protocol]}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const steps: Record<
  FormStep,
  {
    value: "protocol" | "stakeAmount" | "validatorKeys" | "register"
    label: string
    description: string
    body?: (form: UseFormReturn<OptInFormData>) => ReactNode // Function to return a ReactNode
  }
> = {
  [FormStep.SelectProtocol]: {
    value: "protocol",
    label: "Protocol",
    description: "Select the protocol you want to opt-in with.",
    body: (form) => <ProtocolBody form={form} />,
  },
  [FormStep.InputStake]: {
    value: "stakeAmount",
    label: "Stake Amount",
    description: "Enter the amount you want to stake.",
  },
  [FormStep.ImportKeys]: {
    value: "validatorKeys",
    label: "Validator Keys",
    description: "Enter a list of validator keys you wish to opt-in with.",
    body: (form) => <ValidatorKeysBody form={form} />, // Use the separate component
  },
  [FormStep.Register]: {
    value: "register",
    label: "Register",
    description: "Register your validator keys.",
    body: (form) => <RegisterBody form={form} />, // Use the new RegisterBody component
  },
}

export function FormSteps({
  form,
  className,
  loading,
  error,
}: {
  form: UseFormReturn<OptInFormData>
  className?: string
  loading?: boolean
  error?: string | null
}) {
  const { currentStep } = useFormStep()

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex flex-col gap-2 ">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {steps[currentStep].label}
        </h4>
        <p className="text-sm text-muted-foreground">
          {steps[currentStep].description}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {form.formState.errors[
          steps[currentStep].value as keyof OptInFormData
        ] && (
          <p className="text-sm text-red-600">
            {
              form.formState.errors[
                steps[currentStep].value as keyof OptInFormData
              ]?.message
            }
          </p>
        )}
        {steps[currentStep].body && steps[currentStep].body(form)}
      </div>
      <div className="flex flex-col gap-2">
        {loading && (
          <div className="flex items-center gap-2">
            <Loader className="h-4 w-4 animate-spin" />
            <p className="text-sm">Opting in validators...</p>
          </div>
        )}
        {error && (
          <div className="flex gap-2 rounded-md border border-destructive/25 bg-destructive/10 p-3 text-destructive">
            <CircleSlash className="mt-0.5 h-4 w-4" />
            <p className="text-sm ">{error}</p>
          </div>
        )}
      </div>
    </div>
  )
}

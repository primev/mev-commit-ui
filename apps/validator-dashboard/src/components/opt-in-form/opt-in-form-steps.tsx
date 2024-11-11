import React, { ReactNode } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { CircleSlash, Info, Loader, Loader2, Terminal } from "lucide-react"
import { UseFormReturn } from "react-hook-form"

import { cn } from "@/lib/utils"
import { useAccount } from "@/hooks/use-account"
import { useFormStep } from "@/hooks/use-form-step"

import { IconKeys, IconSelector } from "../icons"
import { FormStep } from "../providers/form-step-provider"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import ConfigureField from "./fields/configure.field"
import { OptInFormData } from "./opt-in.form"
import { RegisterStatCard } from "./ui/register-stat-card"

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
        <RegisterStatCard title="Protocol" value={protocol || "Not selected"} />
        {protocol === "symbiotic" && (
          <>
            <RegisterStatCard
              title="Vaults"
              value={form.watch("vaults").length}
            />
            <RegisterStatCard
              title="Validators"
              value={
                keys
                  ? keys.reduce(
                      (total, currentArray) => total + currentArray.length,
                      0
                    )
                  : 0
              }
            />
          </>
        )}
        {protocol !== "symbiotic" && (
          <RegisterStatCard
            title="Validators"
            value={keys ? keys[0]?.length : 0}
          />
        )}
        {stakeAmount && (
          <>
            <RegisterStatCard title="Stake Amount">
              <p className="text-xl font-medium uppercase text-white">
                <span className="mr-0.5 font-medium text-muted-foreground">
                  ~
                </span>
                {Number(stakeAmount).toFixed(2)}
                <span className="ml-1 text-xs font-medium text-muted-foreground">
                  ETH
                </span>
              </p>
            </RegisterStatCard>
            <RegisterStatCard title="Per Key">
              <p className="text-xl font-medium uppercase text-white">
                <span className="mr-0.5 font-medium text-muted-foreground">
                  ~
                </span>
                {stakeAmount && (Number(stakeAmount) / keys.length).toFixed(2)}
                <span className="ml-1 text-xs font-medium text-muted-foreground">
                  ETH
                </span>
              </p>
            </RegisterStatCard>
          </>
        )}
      </div>
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
  const { isPodOwner, isEigenPodOperator } = useAccount()
  const protocol = form.watch("protocol")

  const icon = {
    vanilla: "ethereum",
    eigenlayer: "eigenlayerLockup",
    symbiotic: "symbiotic",
  }[protocol] as IconKeys

  const iconClassName = {
    vanilla: " fill-muted-foreground",
    eigenlayer: "w-48",
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
          <Card className="relative overflow-hidden border-0 border-none bg-gray-950 shadow-xl">
            {/* <div className="absolute inset-0 after:absolute after:right-1/3 after:top-2/3 after:h-32 after:w-32 after:translate-x-1/2 after:translate-y-1/2 after:rounded-full after:bg-[#B5FF3D] after:blur-[74px]  after:content-['']" /> */}
            <div className="absolute inset-0">
              <div
                className={cn(
                  "absolute left-1/4 top-1/4 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full  blur-3xl",
                  protocol === "vanilla" && "bg-[#0F7C76]/30",
                  protocol === "eigenlayer" && "bg-[#260db9]/40",
                  protocol === "symbiotic" && "bg-[#B5FF3D]/20"
                )}
              />
              <div
                className={cn(
                  "absolute bottom-1/4 right-1/4 h-32 w-32 translate-x-1/2 translate-y-1/2 rounded-full bg-[#34014d]/50 blur-3xl",
                  protocol === "vanilla" && "bg-[#0F7C76]/50",
                  protocol === "eigenlayer" && "bg-[#0c6d4a]/50",
                  protocol === "symbiotic" && "bg-[#34014d]/50"
                )}
              />
            </div>
            <CardHeader className="space-y-3">
              <IconSelector
                icon={icon}
                className={cn("h-auto w-48", iconClassName)}
              />
              <CardTitle className="text-sm capitalize">{protocol}</CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <p className="rounded-lg bg-gray-900/50 p-4 text-sm text-white backdrop-blur-sm">
                {protocolDescriptions[protocol]}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const ImportVaultKeysBody = ({
  form,
}: {
  form: UseFormReturn<OptInFormData>
}) => (
  <Alert className="w-10/12">
    <Info className="h-4 w-4" />
    <AlertDescription className="text-xs text-muted-foreground">
      Please enter your vault keys in the specified format.
    </AlertDescription>
  </Alert>
)

const steps: Record<
  FormStep,
  {
    value:
      | "configured"
      | "protocol"
      | "stakeAmount"
      | "validatorKeys"
      | "register"
      | "vaults"
    label: string
    description: string
    body?: (form: UseFormReturn<OptInFormData>) => ReactNode // Function to return a ReactNode
  }
> = {
  [FormStep.Configure]: {
    value: "configured",
    label: "Configure mev-boost relays",
    description: "",
    body: (form) => (
      <p className="text-sm tracking-tight text-muted-foreground">
        Before restaking, ensure your mev-boost relays are{" "}
        <Button
          variant="linkHover1"
          size="sm"
          className="h-full px-0 after:bottom-[0.5rem] after:w-full after:bg-primev/90"
        >
          <Link
            href="https://docs.primev.xyz/v0.6.3/get-started/validators"
            target="_blank"
          >
            configured
          </Link>
        </Button>
        .
      </p>
    ),
  },
  [FormStep.SelectProtocol]: {
    value: "protocol",
    label: "Protocol",
    description: "Select the protocol you want to opt-in with.",
    body: (form) => <ProtocolBody form={form} />,
  },
  [FormStep.ImportKeys]: {
    value: "validatorKeys",
    label: "Validator Keys",
    description: "Enter a list of validator keys you wish to opt-in with.",
    body: (form) => <ValidatorKeysBody form={form} />,
  },
  [FormStep.ImportVaultKeys]: {
    value: "validatorKeys",
    label: "Add Validator Keys",
    description: "Add validator keys associated with your vaults.",
    body: (form) => <ImportVaultKeysBody form={form} />,
  },
  [FormStep.ImportVaults]: {
    value: "vaults",
    label: "Vaults",
    description: "Select the vaults you want to opt-in with.",
    body: (form) => <ImportVaultKeysBody form={form} />,
  },
  [FormStep.InputStake]: {
    value: "stakeAmount",
    label: "Stake Amount",
    description: "Enter the amount you want to stake.",
  },
  [FormStep.Register]: {
    value: "register",
    label: "Register",
    description: "Register your validator keys.",
    body: (form) => <RegisterBody form={form} />,
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

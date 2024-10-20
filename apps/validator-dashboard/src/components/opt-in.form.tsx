"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useFormStep } from "@/hooks/use-form-step"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { FormSteps } from "./opt-in-form-steps"
import { ProtocolField } from "./protocol.field"
import { FormStep } from "./providers/form-step-provider"
import { StakeAmountField } from "./stake-amount.field"
import { ValidatorKeysField } from "./validator-keys.field"

// import { ValidatorKeysField } from "./validator-keys.field"

export type Protocol = "vanilla" | "eigenlayer" | "symbiotic"

// export interface OptInFormData {
//   protocol: Protocol
//   validatorKeys: string[]
//   stakeAmount?: bigint // Add stakeAmount as an optional field
// }

export const formSchema = z
  .object({
    protocol: z.enum(["vanilla", "eigenlayer", "symbiotic"], {
      required_error: "Protocol is required",
    }),
    validatorKeys: z
      .array(
        z
          .string()
          .length(64, "Each key must be a 64-character hex string")
          .regex(/^[0-9a-fA-F]{64}$/, "Invalid BLS key format")
      )
      .min(1, "At least one validator key is required"),
    stakeAmount: z.bigint().optional(),
  })
  .refine(
    (data) => {
      if (data.protocol === "vanilla") {
        return data.stakeAmount !== undefined
      }
      return true
    },
    {
      message: "Stake amount is required for vanilla protocol",
      path: ["stakeAmount"],
    }
  )

export type OptInFormData = z.infer<typeof formSchema>

function OptInForm() {
  const form = useForm<OptInFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      protocol: undefined,
      validatorKeys: [],
      stakeAmount: undefined, // Initialize stakeAmount
    },
    mode: "onChange",
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Determine action based on protocol
    let action: "stake" | "register"
    switch (data.protocol) {
      case "vanilla":
        action = "stake"
        break
      case "eigenlayer":
      case "symbiotic":
        action = "register"
        break
      default:
        action = "stake"
    }

    const formDataWithAction = { ...data, action }
    console.log("Form Data with Action:", formDataWithAction)
  }

  const { currentStep, nextStep, prevStep, setStep } = useFormStep()

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 0:
        return (
          form.getFieldState("protocol").isDirty &&
          !form.getFieldState("protocol").invalid
        )
      case 1:
        return (
          form.getFieldState("validatorKeys").isDirty &&
          !form.getFieldState("validatorKeys").invalid
        )
      default:
        return true
    }
  }

  const handleNextStep = () => {
    if (isCurrentStepValid()) {
      const protocol = form.getValues("protocol")
      if (currentStep === FormStep.SelectProtocol && protocol === "vanilla") {
        setStep(FormStep.ImportKeys) // Skip directly to the validator keys step
      } else {
        nextStep()
      }
    } else {
      form.trigger(
        currentStep === FormStep.SelectProtocol ? "protocol" : "validatorKeys"
      )
    }
  }

  return (
    <div className="flex gap-4 rounded-md border border-black/50 bg-black p-12">
      <FormSteps form={{ ...form }} />
      <div className="flex w-full max-w-max ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto flex h-auto w-full flex-col px-7"
          >
            <div className="flex h-full w-full flex-col">
              {currentStep === FormStep.SelectProtocol && (
                <ProtocolField control={form.control} />
              )}
              {currentStep === FormStep.ImportKeys && (
                <ValidatorKeysField control={form.control} />
              )}
              {currentStep === FormStep.InputStake && (
                <StakeAmountField control={form.control} />
              )}
            </div>
            <div className="mt-4 flex justify-between">
              <Button
                variant="outline"
                type="button"
                onClick={prevStep}
                disabled={currentStep === FormStep.SelectProtocol}
              >
                Previous
              </Button>
              {currentStep < FormStep.Register ? (
                <Button
                  variant="outline"
                  type="button"
                  onClick={handleNextStep}
                  disabled={!isCurrentStepValid()}
                >
                  Next
                </Button>
              ) : (
                <Button variant="outline" type="submit">
                  Submit
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default OptInForm

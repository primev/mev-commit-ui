"use client"

import React, { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useForm } from "react-hook-form"
import { Hex } from "viem"
import { z } from "zod"

import { useFormStep } from "@/hooks/use-form-step"
import { useOptInValidators } from "@/hooks/use-opt-in"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { FormSteps } from "./opt-in-form-steps"
import { ProtocolField } from "./protocol.field"
import { FormStep } from "./providers/form-step-provider"
import { StakeAmountField } from "./stake-amount.field"
import { ValidatorKeysList } from "./validator-keys-list"
import { ValidatorKeysField } from "./validator-keys.field"

// import { ValidatorKeysField } from "./validator-keys.field"

export type Protocol = "vanilla" | "eigenlayer" | "symbiotic"

const ValidatorKey = z
  .string()
  .regex(
    /^0x[a-fA-F0-9]{96}$/,
    "BLS Public key must be a 96-character hexadecimal string starting with 0x."
  )
  .transform((val): Hex => val as Hex)

const ValidatorKeys = z
  .array(ValidatorKey)
  .optional()
  .refine((keys) => keys?.every((key) => ValidatorKey.safeParse(key).success), {
    message:
      "BLS Public keys must be a 96-character hexadecimal string starting with 0x.",
  })
  .transform((value) => value ?? [])
export const formSchema = z
  .object({
    protocol: z.enum(["vanilla", "eigenlayer", "symbiotic"], {
      required_error: "Protocol is required",
    }),
    validatorKeys: ValidatorKeys,
    stakeAmount: z.string().optional(),
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

  const { loading, error, optInValidators } = useOptInValidators()

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("onSubmit- data", data)
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
    optInValidators(data.protocol, [data.validatorKeys])
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
      if (currentStep === FormStep.ImportKeys && protocol !== "vanilla") {
        setStep(FormStep.Register)
      } else {
        nextStep()
      }
    } else {
      form.trigger(
        currentStep === FormStep.SelectProtocol ? "protocol" : "validatorKeys"
      )
    }
  }

  const validatorKeys = form.watch("validatorKeys") // Use watch to make validatorKeys reactive
  // Log form errors to debug
  useEffect(() => {
    console.log("error", error)
    console.log("loading", loading)
  }, [error, loading])

  return (
    <div className="mx-auto grid h-[400px] max-w-screen-xl grid-cols-2 gap-12 rounded-md border border-black/50 bg-slate-900 p-12">
      <FormSteps
        className="w-11/12"
        form={{ ...form }}
        loading={loading}
        error={error}
      />

      <div className="flex w-full flex-col">
        <Form {...form}>
          <form className="mx-auto flex h-full w-full flex-col justify-between">
            <div>
              {currentStep === FormStep.SelectProtocol && (
                <ProtocolField control={form.control} />
              )}
              {currentStep === FormStep.ImportKeys && (
                <>
                  {validatorKeys.length > 0 &&
                  !form.formState.errors.validatorKeys ? (
                    <ValidatorKeysList fileName="keys.txt" form={{ ...form }} />
                  ) : (
                    <ValidatorKeysField control={form.control} />
                  )}
                </>
              )}
              {currentStep === FormStep.InputStake && (
                <StakeAmountField control={form.control} />
              )}
              {currentStep === FormStep.Register && (
                <ValidatorKeysList fileName="keys.txt" form={{ ...form }} />
              )}
            </div>
          </form>
        </Form>
        <div className="mt-4 flex justify-between">
          {currentStep > FormStep.SelectProtocol && (
            <Button
              variant="outline"
              type="button"
              onClick={prevStep}
              disabled={currentStep === FormStep.SelectProtocol}
            >
              <ChevronLeft strokeWidth={1.5} className="h-5 w-5" />
              Back
            </Button>
          )}
          {currentStep < FormStep.Register ? (
            <Button
              variant="outline"
              type="button"
              onClick={handleNextStep}
              disabled={!isCurrentStepValid()}
              className="ml-auto"
            >
              Next <ChevronRight strokeWidth={1.5} className="h-5 w-5" />
            </Button>
          ) : (
            <Button
              variant="outline"
              type="submit"
              onClick={form.handleSubmit(onSubmit)}
            >
              Opt-In
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default OptInForm

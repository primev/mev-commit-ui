"use client"

import React, { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useForm } from "react-hook-form"
import type { Address as AddressType, Hex } from "viem"
import { z } from "zod"

import { useAccount } from "@/hooks/use-account"
import { useFormStep } from "@/hooks/use-form-step"
import { useOptInValidators } from "@/hooks/use-opt-in"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { FormStep, Protocol } from "../providers/form-step-provider"
import ConfigureField from "./fields/configure.field"
import { ProtocolField } from "./fields/protocol.field"
import { StakeAmountField } from "./fields/stake-amount.field"
import { ValidatorKeysField } from "./fields/validator-keys.field"
import { VaultKeysField } from "./fields/vault-keys.field"
import VaultsField from "./fields/vaults.field"
import { FormSteps } from "./opt-in-form-steps"
import { ValidatorKeysList } from "./ui/validator-keys-list"

const ValidatorKey = z
  .string()
  .regex(
    /^0x[a-fA-F0-9]{96}$/,
    "BLS Public key must be a 96-character hexadecimal string starting with 0x."
  )
  .transform((val): Hex => val as Hex)

const ValidatorKeys = z
  .array(z.array(ValidatorKey))
  .optional()
  .refine(
    (keys) =>
      keys?.every((keyArray) =>
        keyArray.every((key) => ValidatorKey.safeParse(key).success)
      ),
    {
      message:
        "Each BLS Public key must be a 96-character hexadecimal string starting with 0x.",
    }
  )
  .transform((value) => value ?? [])

const Address = z
  .string()
  .regex(
    /^0x[a-fA-F0-9]{40}$/,
    "Address must be a 40-character hexadecimal string starting with 0x."
  )

const Vaults = z
  .array(Address)
  .optional()
  .transform((value) => value as AddressType[])

export const formSchema = z
  .object({
    configured: z.boolean(),
    protocol: z.enum(["vanilla", "eigenlayer", "symbiotic"], {
      required_error: "Protocol is required",
    }),
    validatorKeys: ValidatorKeys,
    stakeAmount: z.string().optional(),
    vaults: Vaults,
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
      configured: false,
      protocol: undefined,
      validatorKeys: [[]],
      stakeAmount: undefined,
      vaults: [],
    },
    mode: "onChange",
  })

  const { loading, error, optInValidators, clearError } = useOptInValidators()

  const { currentStep, nextStep, prevStep, setProtocol } = useFormStep()

  const { isPodOwner, isEigenPodOperator, isSymbioticOperator } = useAccount()
  // export enum FormStep {
  //   Configure = 0,
  //   SelectProtocol = 1,
  //   ImportKeys = 2,
  //   ImportVaults = 3,
  //   ImportVaultKeys = 4,
  //   InputStake = 5,
  //   ViewKeys = 6,
  //   Register = 7,
  // }
  const isCurrentStepValid = () => {
    const stepFields: Array<Array<keyof OptInFormData>> = [
      ["configured"], // FormStep.Configure
      ["protocol"], // FormStep.SelectProtocol
      ["validatorKeys"], // FormStep.ImportKeys
      ["vaults"], // FormStep.ImportVaults
      ["validatorKeys"], // FormStep.ImportVaultKeys
      ["stakeAmount"], // FormStep.InputStake
      ["validatorKeys"], // FormStep.ViewKeys
      ["validatorKeys"], // FormStep.Register
    ]

    const fields = stepFields[currentStep] || []

    // Check if any field in the current step is dirty and not invalid
    const isStepDirty = fields.some(
      (field) => form.getFieldState(field).isDirty
    )
    const isStepInvalid = fields.some(
      (field) => form.getFieldState(field).invalid
    )

    // Additional validation for symbiotic protocol during ImportVaultKeys step
    const protocol = form.watch("protocol")
    const validatorKeys = form.watch("validatorKeys")
    const vaults = form.watch("vaults")

    const importKeysValid = !(
      FormStep.ImportKeys === currentStep &&
      (!validatorKeys[0] || validatorKeys[0].length === 0)
    )

    const isSymbioticValid =
      (currentStep !== FormStep.ImportVaultKeys ||
        protocol !== "symbiotic" ||
        validatorKeys.length === vaults.length) &&
      !(protocol === "symbiotic" && !isSymbioticOperator)

    const isEigenLayerValid =
      protocol !== "eigenlayer" ||
      (currentStep === FormStep.SelectProtocol &&
        (isPodOwner || isEigenPodOperator))
    console.log({
      stepValid:
        isStepDirty &&
        !isStepInvalid &&
        isSymbioticValid &&
        isEigenLayerValid &&
        importKeysValid,
      isStepDirty: isStepDirty,
      isStepInvalid: !isStepInvalid,
      isSymbioticValid: isSymbioticValid,
      isEigenLayerValid: isEigenLayerValid,
      importKeysValid: importKeysValid,
    })
    return (
      isStepDirty &&
      !isStepInvalid &&
      isSymbioticValid &&
      isEigenLayerValid &&
      importKeysValid
    )
  }

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    optInValidators(data)
  }

  const handleNextStep = () => {
    if (isCurrentStepValid()) {
      console.log("nextStep")
      nextStep()
    }
  }

  const handlePrevStep = () => {
    if (currentStep === FormStep.ViewKeys) {
      form.setValue("validatorKeys", [[]])
    }
    clearError()
    prevStep()
  }

  const validatorKeys = form.watch("validatorKeys") // Use watch to make validatorKeys reactive
  const protocol = form.watch("protocol")

  useEffect(() => {
    console.log({ validatorKeys, protocol, error: form.formState.errors })
  }, [validatorKeys, protocol, form.formState.errors])

  useEffect(() => {
    if (protocol) {
      setProtocol(
        {
          vanilla: Protocol.Vanilla,
          eigenlayer: Protocol.EigenLayer,
          symbiotic: Protocol.Symbiotic,
        }[protocol]
      )
    }
  }, [protocol])

  useEffect(() => {
    // Check if validatorKeys is non-empty and valid
    const isValidatorKeysValid =
      validatorKeys[0] &&
      validatorKeys[0].length > 0 &&
      !form.getFieldState("validatorKeys").invalid

    if (isValidatorKeysValid && currentStep === FormStep.ImportKeys) {
      nextStep()
    }
  }, [validatorKeys, form]) // Re-run effect when validatorKeys or form changes

  return (
    <div className="mx-auto grid h-[450px] max-w-screen-xl grid-cols-2 gap-12 rounded-md bg-black/90 p-12 shadow-md shadow-muted/10">
      <FormSteps
        className="w-11/12"
        form={{ ...form }}
        loading={loading}
        error={error}
      />

      <div className="flex w-full flex-col">
        <Form {...form}>
          <form className="mx-auto flex h-full w-full flex-col justify-between">
            {currentStep === FormStep.Configure && (
              <ConfigureField control={form.control} />
            )}
            {currentStep === FormStep.SelectProtocol && (
              <ProtocolField control={form.control} />
            )}
            {currentStep === FormStep.ImportKeys && (
              <ValidatorKeysField control={form.control} />
            )}
            {currentStep === FormStep.InputStake && (
              <StakeAmountField control={form.control} />
            )}
            {currentStep === FormStep.ImportVaults && (
              <VaultsField control={form.control} />
            )}
            {currentStep === FormStep.ImportVaultKeys && (
              <VaultKeysField form={form} />
            )}

            {/* View Keys */}
            {currentStep === FormStep.ViewKeys && protocol === "vanilla" && (
              <ValidatorKeysList fileName="keys.txt" form={{ ...form }} />
            )}
            {currentStep === FormStep.ViewKeys && protocol === "eigenlayer" && (
              <ValidatorKeysList fileName="keys.txt" form={{ ...form }} />
            )}
            {currentStep === FormStep.ViewKeys && protocol === "symbiotic" && (
              <ValidatorKeysList fileName="keys.txt" form={{ ...form }} />
            )}

            {/* Register */}
            {currentStep === FormStep.Register && protocol === "vanilla" && (
              <ValidatorKeysList form={{ ...form }} />
            )}
            {currentStep === FormStep.Register && protocol === "eigenlayer" && (
              <ValidatorKeysList form={{ ...form }} />
            )}
            {currentStep === FormStep.Register && protocol === "symbiotic" && (
              <ValidatorKeysList form={{ ...form }} />
            )}
          </form>
        </Form>
        <div className="mt-4 flex justify-between">
          {currentStep > FormStep.Configure && (
            <Button
              variant="outline"
              type="button"
              onClick={handlePrevStep}
              disabled={currentStep === FormStep.Configure}
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

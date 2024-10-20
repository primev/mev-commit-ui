"use client"

import React, { createContext, useState } from "react"

// Define the enum for steps
export enum FormStep {
  SelectProtocol,
  ImportKeys,
  InputStake,
  Register,
}

export interface FormStepContextType {
  currentStep: FormStep
  setCurrentStep: React.Dispatch<React.SetStateAction<FormStep>>
  nextStep: () => void
  prevStep: () => void
  setStep: (step: FormStep) => void
}

export const FormStepContext = createContext<FormStepContextType | undefined>(
  undefined
)

export function FormStepProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState<FormStep>(
    FormStep.SelectProtocol
  )

  const nextStep = () =>
    setCurrentStep((prev) => (prev < FormStep.Register ? prev + 1 : prev))

  const prevStep = () =>
    setCurrentStep((prev) => (prev > FormStep.SelectProtocol ? prev - 1 : prev))

  const setStep = (step: FormStep) => setCurrentStep(step)

  return (
    <FormStepContext.Provider
      value={{ currentStep, setCurrentStep, nextStep, prevStep, setStep }}
    >
      {children}
    </FormStepContext.Provider>
  )
}

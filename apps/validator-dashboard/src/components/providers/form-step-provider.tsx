"use client"

import React, { createContext, useCallback, useState } from "react"

export enum FormStep {
  Configure = 0,
  SelectProtocol = 1,
  ImportKeys = 2,
  ImportVaults = 3,
  ImportVaultKeys = 4,
  InputStake = 5,
  ViewKeys = 6,
  Register = 7,
}

export enum Protocol {
  EigenLayer,
  Vanilla,
  Symbiotic,
}

const protocolSteps: { [key in Protocol]: FormStep[] } = {
  [Protocol.EigenLayer]: [
    FormStep.Configure,
    FormStep.SelectProtocol,
    FormStep.ImportKeys,
    FormStep.ViewKeys,
    FormStep.Register,
  ],
  [Protocol.Vanilla]: [
    FormStep.Configure,
    FormStep.SelectProtocol,
    FormStep.ImportKeys,
    FormStep.ViewKeys,
    FormStep.InputStake,
    FormStep.Register,
  ],
  [Protocol.Symbiotic]: [
    FormStep.Configure,
    FormStep.SelectProtocol,
    FormStep.ImportVaults,
    FormStep.ImportVaultKeys,
    FormStep.ViewKeys,
    FormStep.Register,
  ],
}

export interface FormStepContextType {
  currentStep: FormStep
  nextStep: () => void
  prevStep: () => void
  setProtocol: (protocol: Protocol) => void
  selectedProtocol: Protocol | null
}

export const FormStepContext = createContext<FormStepContextType | undefined>(
  undefined
)

export function FormStepProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState<FormStep>(FormStep.Configure)
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol | null>(
    null
  )
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const nextStep = useCallback(() => {
    if (currentStep === FormStep.Configure) {
      // Move to SelectProtocol step
      setCurrentStep(FormStep.SelectProtocol)
    } else if (selectedProtocol !== null) {
      const steps = protocolSteps[selectedProtocol]
      if (currentStepIndex < steps.length - 1) {
        const nextIndex = currentStepIndex + 1
        if (steps[nextIndex] !== undefined) {
          setCurrentStepIndex(nextIndex)
          setCurrentStep(steps[nextIndex])
        }
      }
    }
  }, [selectedProtocol, currentStep, currentStepIndex])

  const prevStep = useCallback(() => {
    if (currentStep === FormStep.SelectProtocol) {
      // Move back to Configure step
      setCurrentStep(FormStep.Configure)
    } else if (selectedProtocol !== null) {
      const steps = protocolSteps[selectedProtocol]
      if (currentStepIndex > 0) {
        const prevIndex = currentStepIndex - 1
        const prevStep = steps[prevIndex]
        if (prevStep !== undefined) {
          setCurrentStepIndex(prevIndex)
          setCurrentStep(prevStep)
        }
      }
    }
  }, [selectedProtocol, currentStep, currentStepIndex])

  const setProtocol = useCallback((protocol: Protocol) => {
    setSelectedProtocol(protocol)
    setCurrentStepIndex(0)
    setCurrentStep(FormStep.SelectProtocol)
    console.log("setProtocol", protocol)
  }, [])

  return (
    <FormStepContext.Provider
      value={{
        currentStep,
        nextStep,
        prevStep,
        setProtocol,
        selectedProtocol,
      }}
    >
      {children}
    </FormStepContext.Provider>
  )
}

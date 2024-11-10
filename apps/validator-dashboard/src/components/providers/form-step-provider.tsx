"use client"

import React, { createContext, useCallback, useState } from "react"

export enum FormStep {
  SelectProtocol = 0,
  ImportKeys = 1,
  ImportVaults = 2,
  ImportVaultKeys = 3,
  InputStake = 4,
  Register = 5,
}

export enum Protocol {
  EigenLayer,
  Vanilla,
  Symbiotic,
}

const protocolSteps: { [key in Protocol]: FormStep[] } = {
  [Protocol.EigenLayer]: [
    FormStep.SelectProtocol,
    FormStep.ImportKeys,
    FormStep.Register,
  ],
  [Protocol.Vanilla]: [
    FormStep.SelectProtocol,
    FormStep.ImportKeys,
    FormStep.InputStake,
    FormStep.Register,
  ],
  [Protocol.Symbiotic]: [
    FormStep.SelectProtocol,
    FormStep.ImportVaults,
    FormStep.ImportVaultKeys,
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
  const [currentStep, setCurrentStep] = useState<FormStep>(
    FormStep.SelectProtocol
  )
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol | null>(
    null
  )
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const nextStep = useCallback(() => {
    if (selectedProtocol !== null) {
      const steps = protocolSteps[selectedProtocol]
      if (currentStepIndex < steps.length - 1) {
        const nextIndex = currentStepIndex + 1
        if (steps[nextIndex] !== undefined) {
          setCurrentStepIndex(nextIndex)
          setCurrentStep(steps[nextIndex])
        }
      }
    }
  }, [selectedProtocol, currentStepIndex])

  const prevStep = useCallback(() => {
    if (selectedProtocol !== null) {
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
  }, [selectedProtocol, currentStepIndex])

  const setProtocol = useCallback((protocol: Protocol) => {
    setSelectedProtocol(protocol)
    setCurrentStepIndex(0)
    setCurrentStep(FormStep.SelectProtocol)
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

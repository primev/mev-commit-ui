import React from "react"
import { Control } from "react-hook-form"

import { OptInFormData } from "./opt-in.form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

interface PersonaFieldProps {
  control: Control<OptInFormData>
}

export function PersonaField({ control }: PersonaFieldProps) {
  return (
    <FormField
      control={control}
      name="persona"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Select Persona</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              {control._formValues.protocol === "eigenlayer" && (
                <>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="operator" id="operator" />
                    <FormLabel htmlFor="operator">Operator</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="pod owner" id="pod-owner" />
                    <FormLabel htmlFor="pod-owner">Pod Owner</FormLabel>
                  </FormItem>
                </>
              )}
              {control._formValues.protocol === "symbiotic" && (
                <>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="vault" id="vault" />
                    <FormLabel htmlFor="vault">Vault</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="vault owner" id="vault-owner" />
                    <FormLabel htmlFor="vault-owner">Vault Owner</FormLabel>
                  </FormItem>
                </>
              )}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

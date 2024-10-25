"use client"

import React from "react"
import { Control } from "react-hook-form"

import { OptInFormData } from "./opt-in.form"
import { DynamicInput } from "./ui/dynamic-input"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"

export function StakeAmountField({
  control,
}: {
  control: Control<OptInFormData>
}): React.ReactNode {
  return (
    <FormField
      control={control}
      name="stakeAmount"
      render={({ field }) => (
        <FormItem className="flex flex-col items-center">
          <FormLabel
            htmlFor="stakeAmount"
            className="text-left text-xl font-semibold tracking-tight"
          >
            Stake Amount (in wei)
          </FormLabel>
          <FormControl>
            <DynamicInput {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

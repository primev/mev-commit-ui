"use client"

import React from "react"
import { Control } from "react-hook-form"

import { DynamicInput } from "@/components/ui/dynamic-input"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { OptInFormData } from "../opt-in.form"

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
        <FormItem className="flex h-full flex-col items-center">
          <FormLabel
            htmlFor="stakeAmount"
            className="text-left text-xl font-semibold tracking-tight"
          >
            Stake Amount (in wei)
          </FormLabel>
          <FormControl>
            <div className="flex h-full w-full items-center justify-center rounded-md bg-muted/20">
              <DynamicInput {...field} />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

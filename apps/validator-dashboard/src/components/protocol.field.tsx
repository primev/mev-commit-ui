"use client"

import React from "react"
import { Control } from "react-hook-form"

import { cn } from "@/lib/utils"
import { IconKeys, Icons, IconSelector } from "@/components/icons"

import { OptInFormData } from "./opt-in.form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

const protocols: {
  value: OptInFormData["protocol"]
  label: string
  icon: IconKeys
}[] = [
  {
    value: "vanilla",
    label: "Vanilla",
    icon: "eth",
  },
  {
    value: "eigenlayer",
    label: "EigenLayer",
    icon: "eigenlayer",
  },
  {
    value: "symbiotic",
    label: "Symbiotic",
    icon: "symbiotic",
  },
]

export function ProtocolField({
  control,
}: {
  control: Control<OptInFormData>
}): React.ReactNode {
  return (
    <FormField
      control={control}
      name="protocol"
      render={({ field }) => (
        <FormItem className="flex flex-col items-center">
          <h4 className="text-left text-xl font-semibold tracking-tight">
            Restake with:
          </h4>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="mt-8 flex gap-8"
            >
              {protocols.map((protocol) => (
                <FormItem key={protocol.value}>
                  <FormControl>
                    <RadioGroupItem
                      value={protocol.value}
                      id={protocol.value}
                      className="sr-only"
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor={protocol.value}
                    className={cn(
                      "flex aspect-square cursor-pointer flex-col items-center justify-center space-x-2 rounded-md border p-8",
                      field.value === protocol.value
                        ? "border-primev"
                        : "border-gray-600"
                    )}
                    onClick={() => field.onChange(protocol.value)}
                  >
                    <IconSelector
                      icon={protocol.icon}
                      className={cn(
                        "h-24 w-24",
                        field.value === protocol.value
                          ? "fill-primary"
                          : "fill-muted-foreground"
                      )}
                    />
                    <span className="text-xs">{protocol.value}</span>
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

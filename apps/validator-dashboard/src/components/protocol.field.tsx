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
    label: "Simple",
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
        <FormItem className="flex flex-col items-center ">
          <FormControl className="">
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex gap-8"
            >
              {protocols.map((protocol) => (
                <FormItem key={protocol.value} className="relative space-y-0 ">
                  <div className="absolute left-0.5 top-0.5 rounded-sm bg-muted/90 p-1 text-xs">
                    <span>{protocol.label}</span>
                  </div>
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
                      " flex aspect-square cursor-pointer flex-col items-center justify-center space-y-2 rounded-md border p-6",
                      field.value === protocol.value
                        ? "border-primev"
                        : "border-gray-600"
                    )}
                    onClick={() => field.onChange(protocol.value)}
                  >
                    <IconSelector
                      icon={protocol.icon}
                      className={cn(
                        "h-22 w-22",
                        field.value === protocol.value
                          ? "fill-primary"
                          : "fill-muted-foreground"
                      )}
                    />
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

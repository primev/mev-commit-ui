"use client"

import React from "react"
import { CircleSlash } from "lucide-react"
import { Control } from "react-hook-form"

import { cn } from "@/lib/utils"
import { useAccount } from "@/hooks/use-account"
import { Badge } from "@/components/ui/badge"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { IconKeys, Icons, IconSelector } from "@/components/icons"

import { OptInFormData } from "../opt-in.form"

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
  const { isPodOwner, isEigenPodOperator, isSymbioticOperator } = useAccount()

  const protocolDisabled: Record<OptInFormData["protocol"], string> = {
    vanilla: "",
    eigenlayer:
      !isPodOwner && !isEigenPodOperator
        ? "You are not an Eigenpod owner or operator"
        : "",
    symbiotic: !isSymbioticOperator ? "You are not a Symbiotic operator" : "",
  }

  return (
    <>
      <FormField
        control={control}
        name="protocol"
        render={({ field }) => (
          <FormItem className="flex flex-col items-center space-y-6">
            <FormControl className="">
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-8"
              >
                {protocols.map((protocol) => (
                  <FormItem
                    key={protocol.value}
                    className="relative space-y-0 "
                  >
                    <Badge
                      variant="outline"
                      className="absolute left-0.5 top-0.5 rounded-sm bg-muted/90 p-1 text-xs"
                    >
                      <span>{protocol.label}</span>
                    </Badge>
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
                          : "border-neutral-800",
                        field.value === protocol.value &&
                          !!protocolDisabled[protocol.value]
                          ? "border-neutral-300"
                          : ""
                      )}
                      onClick={() => field.onChange(protocol.value)}
                    >
                      <IconSelector
                        icon={protocol.icon}
                        className={cn(
                          "h-22 w-22 ",
                          field.value === protocol.value
                            ? "fill-primary"
                            : "fill-muted-foreground",
                          field.value === protocol.value &&
                            !!protocolDisabled[protocol.value]
                            ? "fill-neutral-300"
                            : ""
                        )}
                      />
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
            {!!protocolDisabled[field.value] && (
              <div className="flex w-full items-center gap-2 rounded-md border border-destructive p-3 text-destructive">
                <CircleSlash strokeWidth={1.5} className="h-4 w-4" />
                <p className="text-xs">{protocolDisabled[field.value]}</p>
              </div>
            )}
          </FormItem>
        )}
      />
    </>
  )
}

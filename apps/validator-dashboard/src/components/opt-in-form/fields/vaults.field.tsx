"use client"

import { ReactNode, useState } from "react"
import { VaultIcon } from "lucide-react"
import { Control, useController } from "react-hook-form"

import { Vault } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useOperatorVaults } from "@/hooks/use-operator-vaults"
import { Card } from "@/components/ui/card"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { ScrollArea } from "@/components/ui/scroll-area"

import { OptInFormData } from "../opt-in.form"

export default function VaultsField({
  control,
}: {
  control: Control<OptInFormData>
}): ReactNode {
  const { loading, error, vaults } = useOperatorVaults()

  const [selectedVaults, setSelectedVaults] = useState<string[]>([])

  const { field } = useController({
    name: "vaults",
    control,
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  if (vaults.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <p className="text-center text-muted-foreground">
          No vaults found. Please ensure that you are connected with a
          registered operator account.
        </p>
      </div>
    )
  }

  const toggleVaultSelection = (vaultId: string) => {
    setSelectedVaults((prev) =>
      prev.includes(vaultId)
        ? prev.filter((id) => id !== vaultId)
        : [...prev, vaultId]
    )
    field.onChange(
      selectedVaults.includes(vaultId)
        ? field.value.filter((id: string) => id !== vaultId)
        : [...field.value, vaultId]
    )
  }

  // const toggleAllVaults = () => {
  //   const allVaultIds = vaults.map((v: { vault: Vault }) => v.vault.id)
  //   if (selectedVaults.length === vaults.length) {
  //     setSelectedVaults([])
  //     field.onChange([])
  //   } else {
  //     setSelectedVaults(allVaultIds)
  //     field.onChange(allVaultIds)
  //   }
  // }

  return (
    <FormField
      control={control}
      name="vaults"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">Select Vaults</FormLabel>
          <FormControl>
            <ScrollArea className="h-[200px] w-full rounded-md border border-muted/40 bg-muted/30 p-3">
              <div className="space-y-4">
                {vaults.map((vault) => (
                  <Card
                    key={vault.id}
                    onClick={() => toggleVaultSelection(vault.id)}
                    className={cn(
                      "mx-auto flex w-min cursor-pointer items-center gap-2 rounded-md bg-muted/70 p-4 shadow-sm shadow-muted",
                      field.value.includes(vault.id) ? "border-primary" : ""
                    )}
                  >
                    <VaultIcon strokeWidth={1} className="h-5 w-5" />
                    <code className="select-none font-mono  text-sm">
                      {vault.vaultAddress}
                    </code>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

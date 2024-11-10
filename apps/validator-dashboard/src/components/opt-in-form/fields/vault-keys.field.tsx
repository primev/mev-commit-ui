"use client"

import React, { useRef, useState } from "react"
import { VaultIcon } from "lucide-react"
import {
  Control,
  useController,
  UseFormReturn,
  useWatch,
} from "react-hook-form"
import { Hex } from "viem"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { ScrollArea } from "@/components/ui/scroll-area"

import { OptInFormData } from "../opt-in.form"
import { ValidatorKeysList } from "../ui/validator-keys-list"

interface VaultKeysProps {
  form: UseFormReturn<OptInFormData>
}

function processKeys(text: string): Hex[] {
  return text
    .split(/[\n,]+/)
    .map((key) => key.trim())
    .filter((key) => key !== "")
    .map((key) => key as Hex)
}

export function VaultKeysField({ form }: VaultKeysProps) {
  const [openVaultIndex, setOpenVaultIndex] = useState<number | null>(null)
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([])

  const { field } = useController({
    name: "validatorKeys",
    control: form.control,
  })

  const vaults = useWatch({ control: form.control, name: "vaults" })

  const handlePaste = async (index: number) => {
    try {
      const text = await navigator.clipboard.readText()
      const keys = processKeys(text)
      const newValidatorKeys = [...field.value]
      newValidatorKeys[index] = keys
      field.onChange(newValidatorKeys)
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error)
    }
  }

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result as string
        const keys = processKeys(text)
        const newValidatorKeys = [...field.value]
        newValidatorKeys[index] = keys
        field.onChange(newValidatorKeys)
      }
      reader.readAsText(file)
      event.target.value = ""
    }
  }

  const handleFileUpload = (index: number) => {
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index]?.click()
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Vaults</h3>
      <ScrollArea className="h-[200px] space-y-2 rounded-md border p-4">
        {vaults.map((vault, index) => (
          <Dialog
            key={vault}
            open={openVaultIndex === index}
            onOpenChange={(open) => !open && setOpenVaultIndex(null)}
          >
            <DialogTrigger asChild>
              <Card
                className={cn(
                  "mx-auto mb-3 flex w-full cursor-pointer items-center justify-between rounded-md bg-muted/70 p-2 shadow-sm  shadow-muted",
                  openVaultIndex === index ? "border-primary" : ""
                )}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <VaultIcon strokeWidth={1} className="h-5 w-5" />
                    <code className="select-none font-mono  text-sm">
                      Vault: {vault.slice(0, 6)}...{vault.slice(-4)}
                    </code>
                  </div>
                  <div className="text-xs opacity-50">
                    Keys: {field.value?.[index]?.length ?? 0}
                  </div>
                </div>
                {(!field.value?.[index] || field.value[index].length === 0) && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => setOpenVaultIndex(index)}
                  >
                    Add Keys
                  </Button>
                )}
              </Card>
            </DialogTrigger>
            <DialogContent className="w-full max-w-screen-sm">
              <DialogHeader>
                <DialogTitle>Enter Keys for Vault {index + 1}</DialogTitle>
              </DialogHeader>

              {(field?.value?.[index]?.length ?? 0) > 0 ? (
                <>
                  <ValidatorKeysList
                    form={form}
                    fileName={`Vault ${index + 1}`}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setOpenVaultIndex(null)}
                    className="ml-auto mt-4 w-min"
                  >
                    Confirm
                  </Button>
                </>
              ) : (
                <FormField
                  control={form.control}
                  name={`validatorKeys.${index}`}
                  render={() => (
                    <FormItem className="h-full space-y-0">
                      <FormLabel className="sr-only">
                        Vault {index + 1} Keys
                      </FormLabel>
                      <FormControl>
                        <ContextMenu>
                          <ContextMenuTrigger asChild>
                            <Button
                              type="button"
                              onClick={() => handleFileUpload(index)}
                              className="group flex h-56 w-full items-center space-x-2 border border-dashed border-muted-foreground text-sm transition-all duration-300 hover:border-primary hover:bg-transparent"
                              variant="ghost"
                            >
                              <input
                                type="file"
                                accept=".txt"
                                ref={(el) =>
                                  (fileInputRefs.current[index] = el)
                                }
                                style={{ display: "none" }}
                                onChange={(e) => handleFileChange(e, index)}
                              />
                              <div className="text-xs opacity-50">
                                <span className="underline underline-offset-4">
                                  Upload File
                                </span>{" "}
                                or right click to paste for Vault {index + 1}
                              </div>
                            </Button>
                          </ContextMenuTrigger>
                          <ContextMenuContent>
                            <ContextMenuItem
                              onSelect={() => handlePaste(index)}
                            >
                              Paste
                            </ContextMenuItem>
                          </ContextMenuContent>
                        </ContextMenu>
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
            </DialogContent>
          </Dialog>
        ))}
      </ScrollArea>
    </div>
  )
}

import React, { useRef } from "react"
import { Control, useController } from "react-hook-form"

import { OptInFormData } from "./opt-in.form"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"

interface ValidatorKeysFieldProps {
  control: Control<OptInFormData>
}

export function ValidatorKeysField({ control }: ValidatorKeysFieldProps) {
  const { field } = useController({
    name: "validatorKeys",
    control,
  })

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      const keys = text
        .split(/[\n,]+/)
        .map((key) => key.trim())
        .filter((key) => key.length === 64)
      field.onChange(keys)
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error)
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result as string
        const keys = text
          .split(/[\n,]+/)
          .map((key) => key.trim())
          .filter((key) => key.length === 64)
        field.onChange(keys)
      }
      reader.readAsText(file)
    }
  }

  return (
    <FormField
      control={control}
      name="validatorKeys"
      render={() => (
        <FormItem className="space-y-3">
          <FormLabel>Validator Keys</FormLabel>
          <FormControl>
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <div className="border-2 border-dashed p-4 text-center">
                  <input
                    type="file"
                    accept=".txt"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                  <p>Upload or right click to paste</p>
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem onSelect={handlePaste}>Paste</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

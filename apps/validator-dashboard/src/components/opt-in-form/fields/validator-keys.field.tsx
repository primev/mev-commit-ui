import React, { useEffect, useRef } from "react"
import { Control, useController } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"

import { OptInFormData } from "../opt-in.form"

interface ValidatorKeysFieldProps {
  control: Control<OptInFormData>
}

function processKeys(text: string): string[] {
  return text
    .split(/[\n,]+/)
    .map((key) => key.trim())
    .filter((key) => key !== "")
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
      const keys = processKeys(text)
      field.onChange(keys)
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error)
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result as string
        const keys = processKeys(text)
        field.onChange(keys)
      }
      reader.readAsText(file)
      event.target.value = ""
    }
  }

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <FormField
      control={control}
      name="validatorKeys"
      render={(field) => (
        <FormItem className="h-full space-y-0">
          <FormLabel className="sr-only">Validator Keys</FormLabel>
          <FormControl>
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <Button
                  type="button"
                  onClick={handleFileUpload}
                  className="group flex h-56 w-full items-center space-x-2 border border-dashed border-muted-foreground text-sm transition-all  duration-300 hover:border-primary hover:bg-transparent"
                  variant="ghost"
                >
                  <input
                    type="file"
                    accept=".txt"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <div className="text-xs opacity-50">
                    <span className=" underline underline-offset-4">
                      Upload File
                    </span>{" "}
                    or right click to paste
                  </div>
                </Button>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem onSelect={handlePaste}>Paste</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </FormControl>
        </FormItem>
      )}
    />
  )
}

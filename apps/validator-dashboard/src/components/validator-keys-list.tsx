import { FileText, X } from "lucide-react"
import { UseFormReturn } from "react-hook-form"

import { truncateKey } from "@/lib/utils"

import { OptInFormData } from "./opt-in.form"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"

interface ValidatorKeysListProps {
  form: UseFormReturn<OptInFormData>
  fileName?: string
}

export function ValidatorKeysList({
  form,
  fileName,
}: ValidatorKeysListProps): React.ReactElement {
  return (
    <div className="mx-auto w-full">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center rounded bg-muted/70 px-3 py-2 text-sm font-semibold">
            <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
            {fileName && <span>{fileName}</span>}
          </div>
          <Button
            variant="secondary"
            onClick={() => form.setValue("validatorKeys", [])}
            size="sm"
            className="ml-2 text-xs text-muted-foreground"
          >
            <X className="mr-2 h-4 w-4" />
            Clear
          </Button>
        </div>
        <span className="text-xs text-muted-foreground">
          {form.getValues("validatorKeys").length} keys
        </span>
      </div>
      <ScrollArea className="h-[200px] w-full rounded-md border border-muted/40 bg-muted/30 p-3">
        <div className="space-y-4">
          {form.getValues("validatorKeys").map((key, index) => (
            <div
              key={index}
              className="mx-auto w-min rounded-md bg-muted/70 p-2 shadow-sm shadow-muted"
            >
              <code className="font-mono text-sm ">{truncateKey(key)}</code>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

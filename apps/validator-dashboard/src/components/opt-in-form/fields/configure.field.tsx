import { Control } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"

export default function ConfigureField({
  control,
}: {
  control: Control<any>
}): React.ReactElement {
  return (
    <FormField
      control={control}
      name="configured"
      render={({ field }) => (
        <Card
          className={cn(
            "flex h-full cursor-pointer items-center justify-center space-y-0 border-none bg-card/20"
          )}
        >
          <FormItem className="flex flex-row items-center justify-center space-x-4 space-y-0 p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="leading-none">
              <FormLabel className="cursor-pointer">
                mev-boost relays are configured
              </FormLabel>
            </div>
          </FormItem>
        </Card>
      )}
    />
  )
}

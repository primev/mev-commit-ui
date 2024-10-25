import OptInForm from "@/components/opt-in.form"
import { FormStepProvider } from "@/components/providers/form-step-provider"

export default function OptInPage(): JSX.Element {
  return (
    <div className="h-full space-y-12  bg-black/50 p-8 backdrop-blur-lg">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Opt-in</h1>
        <p className="text-sm text-gray-500">
          Opt-in to the MEV Commit network and start earning rewards.
        </p>
      </div>
      <div>
        <FormStepProvider>
          <OptInForm />
        </FormStepProvider>
      </div>
    </div>
  )
}

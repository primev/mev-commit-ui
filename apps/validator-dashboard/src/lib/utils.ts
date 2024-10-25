import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { BaseError, ContractFunctionRevertedError } from "viem"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(timestamp: string) {
  return new Date(Number(timestamp) * 1000).toLocaleString()
}

export function getContractError(error: any): string | any {
  if (error instanceof BaseError) {
    const revertError = error.walk(
      (err) => err instanceof ContractFunctionRevertedError
    )
    if (revertError instanceof ContractFunctionRevertedError) {
      return revertError.reason ?? "Unknown error"
    }
  } else if (error.shortMessage) {
    return error.shortMessage
  } else if (error.message) {
    return error.message
  }
  return error // Return the original error if no specific message is found
}

export function truncateKey(
  key: string,
  {
    prefixLength = 32,
    suffixLength = 24,
  }: { prefixLength?: number; suffixLength?: number } = {}
): string {
  return `${key.slice(0, prefixLength)}•••${key.slice(-suffixLength)}`
}

export function getErrorName(error: any): string | null {
  if (error?.cause?.data?.errorName) {
    return error.cause.data.errorName
  }
  return null
}

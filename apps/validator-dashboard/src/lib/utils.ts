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
  }
  if (error.shortMessage) {
    return error.shortMessage
  } else if (error.message) {
    return error.message
  }
  return error // Return the original error if no specific message is found
}

export function truncateKey(
  key: string,
  {
    prefixLength = 24,
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

// Utility function to calculate time ago
export function timeAgo(seconds: number): string {
  const date = new Date(seconds * 1000)
  const now = new Date()
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000)

  const intervals = [
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ]

  for (const interval of intervals) {
    const count = Math.floor(secondsAgo / interval.seconds)
    if (count > 0) {
      return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`
    }
  }

  return "just now"
}

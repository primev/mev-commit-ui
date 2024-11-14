"use server"

import { headers } from "next/headers"

export async function getChain(): Promise<"holesky" | "mainnet"> {
  const headersList = headers()
  const host = headersList.get("host") || ""
  return host.includes("holesky") ? "holesky" : "mainnet"
}

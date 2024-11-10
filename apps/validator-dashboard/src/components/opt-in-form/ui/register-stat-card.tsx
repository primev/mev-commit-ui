import React, { FC } from "react"

export const RegisterStatCard: FC<{
  title: string
  value?: string | number
  children?: React.ReactNode
}> = ({ title, value, children }) => (
  <div className="relative flex flex-col gap-2 overflow-hidden rounded-md bg-black/30 p-4 backdrop-blur-sm before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-blue-500/20 before:via-purple-500/20 before:to-pink-500/20 before:opacity-80">
    <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
    {children ? (
      children
    ) : (
      <p className="text-xl font-medium uppercase text-white">{value}</p>
    )}
  </div>
)

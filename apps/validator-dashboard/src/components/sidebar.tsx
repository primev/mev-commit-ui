"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import {
  BookText,
  ChevronLeft,
  ChevronRight,
  Home,
  Lock,
  LogOut,
  RefreshCw,
} from "lucide-react"
import { FaFaucetDrip } from "react-icons/fa6"

import { Button } from "@/components/ui/button"
import { ActiveLink } from "@/components/ui/link.active"
import { Icons } from "@/components/icons"

const navItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "Opt-in", icon: Lock, href: "/dashboard/opt-in" },
  // { name: "Restake", icon: RefreshCw, href: "/dashboard/restake" },
  { type: "separator", href: "#", icon: () => <div /> },
  {
    name: "Faucet",
    icon: FaFaucetDrip,
    href: "https://holesky-faucet.pk910.de/",
  },
  { name: "Docs", icon: BookText, href: "https://docs.primev.xyz" },
]

export default function Sidebar(): JSX.Element {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={`flex h-full flex-col border-r border-black/50 bg-black/70 p-4 transition-all duration-300 ${collapsed ? "w-[80px]" : "w-[280px]"}`}
    >
      <div className="mb-8 flex w-full items-center justify-between">
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.1 }}
            >
              <Link
                href="https://primev.xyz"
                className="flex items-center gap-2 font-semibold"
              >
                <Icons.primev className="mx-auto w-2/3" />
                <span className="sr-only">Primev</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto w-16"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      <nav className="w-full flex-1">
        <ul className="space-y-2">
          {navItems.map((item, index) =>
            item.type === "separator" ? (
              <li
                key={`separator-${index}`}
                className="my-2 border-t border-gray-700"
              />
            ) : (
              <li key={item.name}>
                <ActiveLink
                  href={item.href}
                  className={`flex h-12 items-center justify-start gap-3 rounded px-3 py-2 transition-colors`}
                >
                  <div className="flex-shrink-0">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <AnimatePresence>
                    {!collapsed && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </ActiveLink>
              </li>
            )
          )}
        </ul>
      </nav>
      <Button
        variant="outline"
        className={`mt-auto flex w-full items-center justify-center gap-2 ${collapsed ? "p-2" : ""}`}
      >
        <LogOut className="h-4 w-4" />
        {!collapsed && "Disconnect"}
      </Button>
    </div>
  )
}

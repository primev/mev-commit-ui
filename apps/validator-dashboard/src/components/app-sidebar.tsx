"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookText, Home, Lock, LogOut } from "lucide-react"
import { FaFaucetDrip } from "react-icons/fa6"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"

import { Icons } from "./icons"
import { Button } from "./ui/button"

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

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Opt-in",
    url: "/dashboard/opt-in",
    icon: Lock,
  },
]

const externalItems = [
  {
    title: "Faucet",
    url: "https://holesky-faucet.pk910.de/",
    icon: FaFaucetDrip,
  },
  {
    title: "Docs",
    url: "https://docs.primev.xyz",
    icon: BookText,
  },
]

export function AppSidebar(): React.ReactElement {
  const pathname = usePathname()
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader className="px-1 py-2">
        <Link
          href="https://primev.xyz"
          target="_blank"
          className="duration-[400ms] h-full w-full rounded-md bg-muted-foreground/0 transition-all group-data-[collapsible=icon]:bg-muted-foreground/20"
        >
          <Icons.primev className="mx-auto block h-auto p-5 group-data-[collapsible=icon]:hidden" />
          <Icons.primevIcon className="hidden w-10 p-1 group-data-[collapsible=icon]:block" />
          <span className="sr-only">Primev</span>
        </Link>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  // className="h-11 rounded-md bg-gradient-to-tr from-purple-500 to-blue-500 p-0.5"
                >
                  <SidebarMenuButton
                    asChild
                    // className="m-auto h-[40px] bg-black/70 text-base"
                    isActive={pathname === item.url}
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />

        <SidebarGroup>
          <SidebarMenu>
            {externalItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton className="text-base" asChild>
                  <a href={item.url} target="_blank">
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton variant="outline">
              <LogOut />
              <span>Disconnect</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

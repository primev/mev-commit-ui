import { cookies } from "next/headers"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}): Promise<JSX.Element> {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

  return (
    <SidebarProvider className="relative" defaultOpen={defaultOpen}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-[335px] -translate-x-1/2 -translate-y-1/2 rounded-full  bg-[#25E97D]/40 blur-[229px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-[435px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#7D25E9]/40 blur-[96px]" />
      </div>

      <AppSidebar />

      <main className=" flex h-screen w-full overflow-x-hidden px-4 py-12 after:absolute after:right-[-10%] after:top-[-180px] after:z-[-1] after:h-[610px] after:w-[100%] after:rounded-[99%] after:bg-[#612d26] after:opacity-[0%] after:blur-[97px] after:content-[''] lg:px-10 2xl:px-60">
        <SidebarTrigger className="sticky -translate-x-12 -translate-y-8" />
        {children}
      </main>
    </SidebarProvider>
  )
}

import { Account } from "@/components/account"
import Sidebar from "@/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <main className="flex h-screen after:absolute after:left-[-10%]  after:top-[-200px] after:z-[-1] after:h-[510px] after:w-[120%] after:rounded-[99%] after:bg-[#612d26] after:opacity-[45%] after:blur-[87px] after:content-['']">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <main className="flex-1">{children}</main>
    </main>
  )
}

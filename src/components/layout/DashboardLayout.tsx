import { SidebarNav } from "./SidebarNav";
import { TopNav } from "./TopNav";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <SidebarNav />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
import { FilterProvider } from "@/components/FilterProvider";
import Sidebar from "@/components/Sidebar";
import SiteFooter from "@/components/SiteFooter";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FilterProvider>
      <div className="min-h-screen">
        <Sidebar />
        <div className="lg:ml-[280px]">
          <main className="flex flex-col">
            {children}
            <SiteFooter />
          </main>
        </div>
      </div>
    </FilterProvider>
  );
}

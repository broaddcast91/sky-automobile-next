"use client";
import Sidebar from "@/components/admin/Siderbar";
import { DataWrapper } from "@/context/index2";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  // Use useEffect to update showSidebar only on the client side
  useEffect(() => {
    setShowSidebar(pathname !== "/login" && pathname !== "/");
  }, [pathname]);
  return (
    <section className="bg-[#e1e7fd]">
      <Sidebar
        isCollapsed={isCollapsed}
        toggleSidebar={toggleSidebar}
        pathname={pathname}
      />
      <div
        className={`flex-1 min-h-screen pl-4 py-2 ${
          showSidebar ? (isCollapsed ? "ml-[85px]" : "ml-[255px]") : "ml-0"
        } transition-all duration-300`}
      >
        <DataWrapper>{children}</DataWrapper>
      </div>
    </section>
  );
}

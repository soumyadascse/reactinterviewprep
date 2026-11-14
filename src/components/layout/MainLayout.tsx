import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">

      <Header
        onMenuClick={() =>
          setSidebarOpen(true)
        }
      />

      <div className="flex flex-1 overflow-hidden">

        <Sidebar
          open={sidebarOpen}
          onClose={() =>
            setSidebarOpen(false)
          }
        />

        <main
          className="
          flex-1
          overflow-y-auto
          bg-slate-50
          p-3
          md:p-6"
        >
          <Outlet />
        </main>

      </div>

      <Footer />

    </div>
  );
}
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";
import PageTransition from "../components/ui/PageTransition";

function AdminLayout() {
    const [isOpen, setIsOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-slate-100">

            <Sidebar
                isOpen={isOpen}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />

            <div className="relative flex flex-1 flex-col overflow-hidden">
                <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-green-300/20 blur-3xl" />

                <Topbar
                    toggleSidebar={() => setIsOpen(!isOpen)}
                    openMobile={() => setMobileOpen(true)}
                />

                <main className="relative overflow-y-auto p-4 sm:p-6 lg:p-7">
                    <PageTransition>
                        <Outlet />
                    </PageTransition>
                </main>
            </div>

        </div>
    );
}

export default AdminLayout;
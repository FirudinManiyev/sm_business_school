import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

function AdminLayout() {
    const [isOpen, setIsOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">

            <Sidebar
                isOpen={isOpen}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />

            <div className="flex-1 flex flex-col">
                <Topbar
                    toggleSidebar={() => setIsOpen(!isOpen)}
                    openMobile={() => setMobileOpen(true)}
                />

                <main className="p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>

        </div>
    );
}

export default AdminLayout;
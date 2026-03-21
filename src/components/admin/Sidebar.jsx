import { NavLink } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

function Sidebar({ isOpen, mobileOpen, setMobileOpen }) {
    return (
        <>
            {/* Overlay (mobile) */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/30 md:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            <div
                className={`
        fixed md:static z-50 bg-white shadow-md h-full transition-all duration-300
        ${isOpen ? "w-64" : "w-20"}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
            >
                <div className="p-4 font-bold text-xl border-b">
                    {isOpen ? "Admin Panel" : "AP"}
                </div>

                <nav className="p-4 flex flex-col gap-2">
                    <NavLink
                        to="/admin"
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                            `flex items-center gap-2 p-2 rounded transition
              ${isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`
                        }
                    >
                        <LayoutDashboard size={20} />
                        {isOpen && <span>Dashboard</span>}
                    </NavLink>
                </nav>
            </div>
        </>
    );
}

export default Sidebar;
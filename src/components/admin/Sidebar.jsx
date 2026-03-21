import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, Users, GraduationCap, FileText } from "lucide-react";

function Sidebar({ isOpen, mobileOpen, setMobileOpen }) {
    const linkClass = (isActive) =>
        `relative flex items-center gap-3 p-2 rounded-lg transition-all duration-200 group
    ${isActive
            ? "bg-blue-500 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`;

    const renderLink = (to, icon, label) => (
        <NavLink
            to={to}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) => linkClass(isActive)}
        >
            {({ isActive }) => (
                <>
                    {/* Active indicator */}
                    <span
                        className={`absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r transition-all
            ${isActive ? "opacity-100" : "opacity-0"}`}
                    />

                    {icon}

                    {isOpen && <span>{label}</span>}

                    {/* Tooltip (collapse olanda) */}
                    {!isOpen && (
                        <span className="absolute left-16 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                            {label}
                        </span>
                    )}
                </>
            )}
        </NavLink>
    );

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
                {/* Logo */}
                <div className="p-4 font-bold text-xl border-b">
                    {isOpen ? "Admin Panel" : "AP"}
                </div>

                <nav className="p-3 flex flex-col gap-4">

                    {/* ===== MAIN ===== */}
                    {isOpen && (
                        <p className="text-xs text-gray-400 px-2">MAIN</p>
                    )}

                    {renderLink("/admin", <LayoutDashboard size={20} />, "Dashboard")}

                    {/* ===== MANAGEMENT ===== */}
                    {isOpen && (
                        <p className="text-xs text-gray-400 px-2 mt-2">
                            MANAGEMENT
                        </p>
                    )}

                    {renderLink("/admin/courses", <BookOpen size={20} />, "Courses")}

                    {renderLink("/admin/trainers", <Users size={20} />, "Trainers")}

                    {renderLink(
                        "/admin/students",
                        <GraduationCap size={20} />,
                        "Students"
                    )}

                    {renderLink("/admin/blog", <FileText size={20} />, "Blog")}

                </nav>
            </div>
        </>
    );
}

export default Sidebar;
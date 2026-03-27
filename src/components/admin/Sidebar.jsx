import { Link, NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, Users, GraduationCap, FileText, House } from "lucide-react";
import logo from "../../assets/logo.png";

function Sidebar({ isOpen, mobileOpen, setMobileOpen }) {
    const linkClass = (isActive) =>
        `relative flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 group
    ${isActive
            ? "bg-blue-600 text-white shadow"
            : "text-slate-700 hover:bg-blue-50"
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
                        className={`absolute left-0 top-0 h-full w-1 rounded-r bg-blue-700 transition-all
            ${isActive ? "opacity-100" : "opacity-0"}`}
                    />

                    {icon}

                    {isOpen && <span>{label}</span>}

                    {/* Tooltip (collapse olanda) */}
                    {!isOpen && (
                        <span className="absolute left-16 rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100 whitespace-nowrap">
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
        fixed md:static z-50 h-full border-r border-slate-200 bg-white/95 shadow-sm backdrop-blur transition-all duration-300
        ${isOpen ? "w-64" : "w-20"}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
            >
                {/* Logo */}
                <div className={`flex border-b border-slate-100 p-4 ${isOpen ? "items-center gap-3" : "items-center justify-center"}`}>
                    <img src={logo} alt="SMBS" className="h-10 w-10 rounded-full border border-blue-100 object-cover" />
                    {isOpen ? (
                        <div>
                            <p className="text-sm font-extrabold uppercase tracking-wide text-slate-900">SMBS Admin</p>
                            <p className="text-xs text-slate-500">Management Panel</p>
                        </div>
                    ) : null}
                </div>

                <div className="flex h-[calc(100%-73px)] flex-col">
                    <nav className="flex flex-col gap-4 p-3">

                    {/* ===== MAIN ===== */}
                    {isOpen && (
                        <p className="px-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Main</p>
                    )}

                    {renderLink("/admin", <LayoutDashboard size={20} />, "Dashboard")}

                    {/* ===== MANAGEMENT ===== */}
                    {isOpen && (
                        <p className="mt-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Management
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

                    <div className="mt-auto border-t border-slate-100 p-3">
                        <Link
                            to="/"
                            onClick={() => setMobileOpen(false)}
                            className="group relative flex items-center justify-center gap-3 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2.5 text-sm font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-100"
                        >
                            <House size={18} />
                            {isOpen && <span>Anasəhifəyə qayıt</span>}

                            {!isOpen && (
                                <span className="absolute left-16 rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100 whitespace-nowrap">
                                    Anasəhifəyə qayıt
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
import { Menu, Bell } from "lucide-react";

function Topbar({ toggleSidebar, openMobile }) {
    return (
        <div className="h-16 border-b border-slate-200 bg-white/90 px-4 shadow-sm backdrop-blur sm:px-6">
            <div className="flex h-full items-center justify-between">

                <div className="flex items-center gap-2">
                    {/* Mobile */}
                    <button
                        onClick={openMobile}
                        className="rounded-xl border border-slate-200 p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
                    >
                        <Menu size={18} />
                    </button>

                    {/* Desktop */}
                    <button
                        onClick={toggleSidebar}
                        className="hidden rounded-xl border border-slate-200 p-2 text-slate-700 transition-colors hover:bg-slate-100 md:block"
                    >
                        <Menu size={18} />
                    </button>

                </div>

                <h1 className="hidden text-lg font-bold text-slate-800 md:block">
                    Admin Dashboard
                </h1>

                <div className="flex items-center gap-2">
                    <button className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100">
                        <Bell size={16} />
                    </button>

                    <div className="rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm">
                        Admin
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
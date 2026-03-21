import { Menu } from "lucide-react";

function Topbar({ toggleSidebar, openMobile }) {
    return (
        <div className="h-16 bg-white shadow flex items-center justify-between px-6">

            <div className="flex items-center gap-2">
                {/* Mobile */}
                <button onClick={openMobile} className="md:hidden">
                    <Menu />
                </button>

                {/* Desktop */}
                <button onClick={toggleSidebar} className="hidden md:block">
                    <Menu />
                </button>
            </div>

            <h1 className="font-semibold text-lg">
                Admin Dashboard
            </h1>

            <div className="text-sm text-gray-600">
                Admin
            </div>
        </div>
    );
}

export default Topbar;